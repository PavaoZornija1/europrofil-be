import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HorizontalProfilesService } from './horizontal-profiles.service';
import { CreateHorizontalProfileDto } from './dto/create-horizontal-profile.dto';
import { UpdateHorizontalProfileDto } from './dto/update-horizontal-profile.dto';

@Controller('horizontal-profiles')
export class HorizontalProfilesController {
  constructor(
    private readonly horizontalProfilesService: HorizontalProfilesService,
  ) {}

  @Post()
  create(@Body() createHorizontalProfileDto: CreateHorizontalProfileDto) {
    return this.horizontalProfilesService.create(createHorizontalProfileDto);
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
  update(
    @Param('id') id: string,
    @Body() updateHorizontalProfileDto: UpdateHorizontalProfileDto,
  ) {
    return this.horizontalProfilesService.update(
      id,
      updateHorizontalProfileDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horizontalProfilesService.remove(id);
  }
}
