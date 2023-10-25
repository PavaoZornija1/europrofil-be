import * as fs from 'fs';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { MechanismsService } from './mechanisms.service';
import { CreateMechanismDto } from './dto/create-mechanism.dto';
import { UpdateMechanismDto } from './dto/update-mechanism.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';

@Controller('mechanisms')
export class MechanismsController {
  constructor(private readonly mechanismsService: MechanismsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'thinningPic', maxCount: 1 }, // 'file1' is the field name for the first file
      { name: 'pic', maxCount: 1 }, // 'file2' is the field name for the second file
    ]),
  )
  create(
    @Req() req: any,
    @UploadedFiles()
    files: { thinningPic: Express.Multer.File; pic: Express.Multer.File },
    @Body() createMechanismDto: CreateMechanismDto,
  ) {
    const userId = req.user?.userId;
    console.log(files);

    const { pic, thinningPic } = files;

    // Define the directory where you want to save the files
    const savePath = 'public/uploads/'; // Adjust the path to your desired public folder

    // Create the public folder if it doesn't exist
    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath, { recursive: true });
    }
    // console.log('PIIIIIC: ', pic);
    // Save the files to the public folder
    if (pic) {
      fs.writeFileSync(`${savePath}/${pic[0].originalname}`, pic[0].buffer);
    }
    if (thinningPic) {
      fs.writeFileSync(
        `${savePath}/${thinningPic.originalname}`,
        thinningPic.buffer,
      );
    }
    // return false;
    return this.mechanismsService.create(createMechanismDto, userId, files);
  }

  @Get()
  findAll() {
    return this.mechanismsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechanismsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateMechanismDto: UpdateMechanismDto,
  ) {
    const userId = req.user?.userId;
    return this.mechanismsService.update(id, updateMechanismDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechanismsService.remove(id);
  }
}
