import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupportedDecorationsService } from './supported-decorations.service';
import { CreateSupportedDecorationDto } from './dto/create-supported-decoration.dto';
import { UpdateSupportedDecorationDto } from './dto/update-supported-decoration.dto';

@Controller('supported-decorations')
export class SupportedDecorationsController {
  constructor(
    private readonly supportedDecorationsService: SupportedDecorationsService,
  ) {}

  @Post()
  create(@Body() createSupportedDecorationDto: CreateSupportedDecorationDto) {
    return this.supportedDecorationsService.create(
      createSupportedDecorationDto,
    );
  }

  @Get()
  findAll() {
    return this.supportedDecorationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supportedDecorationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupportedDecorationDto: UpdateSupportedDecorationDto,
  ) {
    return this.supportedDecorationsService.update(
      id,
      updateSupportedDecorationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supportedDecorationsService.remove(id);
  }
}
