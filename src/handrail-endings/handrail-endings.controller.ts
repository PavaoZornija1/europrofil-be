import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HandrailEndingsService } from './handrail-endings.service';
import { CreateHandrailEndingDto } from './dto/create-handrail-ending.dto';
import { UpdateHandrailEndingDto } from './dto/update-handrail-ending.dto';

@Controller('handrail-endings')
export class HandrailEndingsController {
  constructor(
    private readonly handrailEndingsService: HandrailEndingsService,
  ) {}

  @Post()
  create(@Body() createHandrailEndingDto: CreateHandrailEndingDto) {
    return this.handrailEndingsService.create(createHandrailEndingDto);
  }

  @Get()
  findAll() {
    return this.handrailEndingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handrailEndingsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHandrailEndingDto: UpdateHandrailEndingDto,
  ) {
    return this.handrailEndingsService.update(id, updateHandrailEndingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handrailEndingsService.remove(id);
  }
}
