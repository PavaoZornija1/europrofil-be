import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AluProfilesService } from './alu-profiles.service';
import { CreateAluProfileDto } from './dto/create-alu-profile.dto';
import { UpdateAluProfileDto } from './dto/update-alu-profile.dto';

@Controller('alu-profiles')
export class AluProfilesController {
  constructor(private readonly aluProfilesService: AluProfilesService) {}

  @Post()
  create(@Body() createAluProfileDto: CreateAluProfileDto) {
    return this.aluProfilesService.create(createAluProfileDto);
  }

  @Get()
  findAll() {
    return this.aluProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluProfilesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAluProfileDto: UpdateAluProfileDto,
  ) {
    return this.aluProfilesService.update(id, updateAluProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluProfilesService.remove(id);
  }
}
