import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FillsService } from './fills.service';
import { CreateFillDto } from './dto/create-fill.dto';
import { UpdateFillDto } from './dto/update-fill.dto';

@Controller('fills')
export class FillsController {
  constructor(private readonly fillsService: FillsService) {}

  @Post()
  create(@Body() createFillDto: CreateFillDto) {
    return this.fillsService.create(createFillDto);
  }

  @Get()
  findAll() {
    return this.fillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fillsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFillDto: UpdateFillDto) {
    return this.fillsService.update(id, updateFillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fillsService.remove(id);
  }
}
