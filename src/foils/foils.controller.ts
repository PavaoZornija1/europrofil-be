import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoilsService } from './foils.service';
import { CreateFoilDto } from './dto/create-foil.dto';
import { UpdateFoilDto } from './dto/update-foil.dto';

@Controller('foils')
export class FoilsController {
  constructor(private readonly foilsService: FoilsService) {}

  @Post()
  create(@Body() createFoilDto: CreateFoilDto) {
    return this.foilsService.create(createFoilDto);
  }

  @Get()
  findAll() {
    return this.foilsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foilsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoilDto: UpdateFoilDto) {
    return this.foilsService.update(id, updateFoilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foilsService.remove(id);
  }
}
