import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HandrailDecorationsService } from './handrail-decorations.service';
import { CreateHandrailDecorationDto } from './dto/create-handrail-decoration.dto';
import { UpdateHandrailDecorationDto } from './dto/update-handrail-decoration.dto';

@Controller('handrail-decorations')
export class HandrailDecorationsController {
  constructor(
    private readonly handrailDecorationsService: HandrailDecorationsService,
  ) {}

  @Post()
  create(@Body() createHandrailDecorationDto: CreateHandrailDecorationDto) {
    return this.handrailDecorationsService.create(createHandrailDecorationDto);
  }

  @Get()
  findAll() {
    return this.handrailDecorationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handrailDecorationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHandrailDecorationDto: UpdateHandrailDecorationDto,
  ) {
    return this.handrailDecorationsService.update(
      id,
      updateHandrailDecorationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handrailDecorationsService.remove(id);
  }
}
