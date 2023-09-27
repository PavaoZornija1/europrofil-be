import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BevelOptionsService } from './bevel-options.service';
import { CreateBevelOptionDto } from './dto/create-bevel-option.dto';
import { UpdateBevelOptionDto } from './dto/update-bevel-option.dto';

@Controller('bevel-options')
export class BevelOptionsController {
  constructor(private readonly bevelOptionsService: BevelOptionsService) {}

  @Post()
  create(@Body() createBevelOptionDto: CreateBevelOptionDto) {
    return this.bevelOptionsService.create(createBevelOptionDto);
  }

  @Get()
  findAll() {
    return this.bevelOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bevelOptionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBevelOptionDto: UpdateBevelOptionDto,
  ) {
    return this.bevelOptionsService.update(id, updateBevelOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bevelOptionsService.remove(id);
  }
}
