import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AluHandleProfilesService } from './alu-handle-profiles.service';
import { CreateAluHandleProfileDto } from './dto/create-alu-handle-profile.dto';
import { UpdateAluHandleProfileDto } from './dto/update-alu-handle-profile.dto';

@Controller('alu-handle-profiles')
export class AluHandleProfilesController {
  constructor(
    private readonly aluHandleProfilesService: AluHandleProfilesService,
  ) {}

  @Post()
  create(@Body() createAluHandleProfileDto: CreateAluHandleProfileDto) {
    return this.aluHandleProfilesService.create(createAluHandleProfileDto);
  }

  @Get()
  findAll() {
    return this.aluHandleProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluHandleProfilesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAluHandleProfileDto: UpdateAluHandleProfileDto,
  ) {
    return this.aluHandleProfilesService.update(id, updateAluHandleProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluHandleProfilesService.remove(id);
  }
}
