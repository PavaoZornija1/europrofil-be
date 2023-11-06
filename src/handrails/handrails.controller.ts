import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import * as fs from 'fs';
import { HandrailsService } from './handrails.service';
import { CreateHandrailDto } from './dto/create-handrail.dto';
import { UpdateHandrailDto } from './dto/update-handrail.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('handrails')
export class HandrailsController {
  constructor(private readonly handrailsService: HandrailsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileFieldsInterceptor([{ name: 'pic', maxCount: 1 }]))
  create(
    @Req() req: any,
    @Body() createHandrailDto: CreateHandrailDto,
    @UploadedFiles()
    files: { pic: Express.Multer.File },
  ) {
    const userId = req.user?.userId;
    console.log('HANDRIAL: ', createHandrailDto);
    const { pic } = files;

    // Define the directory where you want to save the files
    const savePath = 'public/uploads/'; // Adjust the path to your desired public folder

    // Create the public folder if it doesn't exist
    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath, { recursive: true });
    }
    // console.log('PIIIIIC: ', pic);
    // Save the files to the public folder
    if (pic) {
      fs.writeFileSync(
        `${savePath}/handrail_${pic[0].originalname}`,
        pic[0].buffer,
      );
    }

    return this.handrailsService.create(createHandrailDto, userId, files);
  }

  @Get()
  findAll() {
    return this.handrailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handrailsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateHandrailDto: UpdateHandrailDto,
  ) {
    const userId = req.user?.userId;
    return this.handrailsService.update(id, updateHandrailDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handrailsService.remove(id);
  }
}
