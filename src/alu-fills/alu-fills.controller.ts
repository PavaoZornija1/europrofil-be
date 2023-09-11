import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AluFillsService } from './alu-fills.service';
import { CreateAluFillDto } from './dto/create-alu-fill.dto';
import { UpdateAluFillDto } from './dto/update-alu-fill.dto';

@Controller('alu-fills')
export class AluFillsController {
  constructor(private readonly aluFillsService: AluFillsService) {}

  @Post()
  create(@Body() createAluFillDto: CreateAluFillDto) {
    return this.aluFillsService.create(createAluFillDto);
  }

  @Get()
  findAll() {
    return this.aluFillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluFillsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAluFillDto: UpdateAluFillDto) {
    return this.aluFillsService.update(id, updateAluFillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluFillsService.remove(id);
  }
}
