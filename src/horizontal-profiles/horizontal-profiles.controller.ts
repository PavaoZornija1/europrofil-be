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
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import * as fs from 'fs';
import { HorizontalProfilesService } from './horizontal-profiles.service';
import { CreateHorizontalProfileDto } from './dto/create-horizontal-profile.dto';
import { UpdateHorizontalProfileDto } from './dto/update-horizontal-profile.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('horizontal-profiles')
export class HorizontalProfilesController {
  constructor(
    private readonly horizontalProfilesService: HorizontalProfilesService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileFieldsInterceptor([{ name: 'pic', maxCount: 1 }]))
  create(
    @Req() req: any,
    @UploadedFiles()
    files: { pic: Express.Multer.File },
    @Body() createHorizontalProfileDto: CreateHorizontalProfileDto,
  ) {
    const userId = req.user?.userId;

    console.log('CONTROLLER: ', createHorizontalProfileDto);

    const { pic } = files;

    // Define the directory where you want to save the files
    const savePath = 'public/uploads/'; // Adjust the path to your desired public folder

    // Create the public folder if it doesn't exist
    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath, { recursive: true });
    }
    // Save the files to the public folder
    if (pic) {
      fs.writeFileSync(
        `${savePath}/${pic[0].originalname}_hor_profile`,
        pic[0].buffer,
      );
    }

    return this.horizontalProfilesService.create(
      createHorizontalProfileDto,
      userId,
      files,
    );
  }

  @Get()
  findAll() {
    return this.horizontalProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horizontalProfilesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateHorizontalProfileDto: UpdateHorizontalProfileDto,
  ) {
    const userId = req.user?.userId;

    return this.horizontalProfilesService.update(
      id,
      updateHorizontalProfileDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horizontalProfilesService.remove(id);
  }
}
