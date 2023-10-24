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
} from '@nestjs/common';
import { MechanismsService } from './mechanisms.service';
import { CreateMechanismDto } from './dto/create-mechanism.dto';
import { UpdateMechanismDto } from './dto/update-mechanism.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('mechanisms')
export class MechanismsController {
  constructor(private readonly mechanismsService: MechanismsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('thinningPic'))
  create(
    @Req() req: any,
    @UploadedFile() thinningPic: Express.Multer.File,
    @Body() createMechanismDto: CreateMechanismDto,
  ) {
    const userId = req.user?.userId;
    // return false;
    return this.mechanismsService.create(createMechanismDto, userId);
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
