import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PvcProfilesService } from './pvc-profiles.service';
import { CreatePvcProfileDto } from './dto/create-pvc-profile.dto';
import { UpdatePvcProfileDto } from './dto/update-pvc-profile.dto';

@Controller('pvc-profiles')
export class PvcProfilesController {
  constructor(private readonly pvcProfilesService: PvcProfilesService) {}

  @Post()
  create(@Body() createPvcProfileDto: CreatePvcProfileDto) {
    return this.pvcProfilesService.create(createPvcProfileDto);
  }

  @Get()
  findAll() {
    return this.pvcProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pvcProfilesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePvcProfileDto: UpdatePvcProfileDto,
  ) {
    return this.pvcProfilesService.update(id, updatePvcProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pvcProfilesService.remove(id);
  }
}
