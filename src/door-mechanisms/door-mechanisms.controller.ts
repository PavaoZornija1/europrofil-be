import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DoorMechanismsService } from './door-mechanisms.service';
import { CreateDoorMechanismDto } from './dto/create-door-mechanism.dto';
import { UpdateDoorMechanismDto } from './dto/update-door-mechanism.dto';

@Controller('door-mechanisms')
export class DoorMechanismsController {
  constructor(private readonly doorMechanismsService: DoorMechanismsService) {}

  @Post()
  create(@Body() createDoorMechanismDto: CreateDoorMechanismDto) {
    return this.doorMechanismsService.create(createDoorMechanismDto);
  }

  @Get()
  findAll() {
    return this.doorMechanismsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doorMechanismsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDoorMechanismDto: UpdateDoorMechanismDto,
  ) {
    return this.doorMechanismsService.update(id, updateDoorMechanismDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doorMechanismsService.remove(id);
  }
}
