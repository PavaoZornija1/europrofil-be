import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MechanismsService } from './mechanisms.service';
import { CreateMechanismDto } from './dto/create-mechanism.dto';
import { UpdateMechanismDto } from './dto/update-mechanism.dto';

@Controller('mechanisms')
export class MechanismsController {
  constructor(private readonly mechanismsService: MechanismsService) {}

  @Post()
  create(@Body() createMechanismDto: CreateMechanismDto) {
    return this.mechanismsService.create(createMechanismDto);
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
  update(
    @Param('id') id: string,
    @Body() updateMechanismDto: UpdateMechanismDto,
  ) {
    return this.mechanismsService.update(id, updateMechanismDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechanismsService.remove(id);
  }
}
