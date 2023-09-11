import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupportedProfilesService } from './supported-profiles.service';
import { CreateSupportedProfileDto } from './dto/create-supported-profile.dto';
import { UpdateSupportedProfileDto } from './dto/update-supported-profile.dto';

@Controller('supported-profiles')
export class SupportedProfilesController {
  constructor(
    private readonly supportedProfilesService: SupportedProfilesService,
  ) {}

  @Post()
  create(@Body() createSupportedProfileDto: CreateSupportedProfileDto) {
    return this.supportedProfilesService.create(createSupportedProfileDto);
  }

  @Get()
  findAll() {
    return this.supportedProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supportedProfilesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupportedProfileDto: UpdateSupportedProfileDto,
  ) {
    return this.supportedProfilesService.update(id, updateSupportedProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supportedProfilesService.remove(id);
  }
}
