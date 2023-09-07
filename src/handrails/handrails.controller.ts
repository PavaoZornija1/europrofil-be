import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HandrailsService } from './handrails.service';
import { CreateHandrailDto } from './dto/create-handrail.dto';
import { UpdateHandrailDto } from './dto/update-handrail.dto';

@Controller('handrails')
export class HandrailsController {
  constructor(private readonly handrailsService: HandrailsService) {}

  @Post()
  create(@Body() createHandrailDto: CreateHandrailDto) {
    return this.handrailsService.create(createHandrailDto);
  }

  @Get()
  findAll() {
    return this.handrailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handrailsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHandrailDto: UpdateHandrailDto,
  ) {
    return this.handrailsService.update(id, updateHandrailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handrailsService.remove(id);
  }
}
