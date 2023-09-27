import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SandBlastingOptionsService } from './sand-blasting-options.service';
import { CreateSandBlastingOptionDto } from './dto/create-sand-blasting-option.dto';
import { UpdateSandBlastingOptionDto } from './dto/update-sand-blasting-option.dto';

@Controller('sand-blasting-options')
export class SandBlastingOptionsController {
  constructor(private readonly sandBlastingOptionsService: SandBlastingOptionsService) {}

  @Post()
  create(@Body() createSandBlastingOptionDto: CreateSandBlastingOptionDto) {
    return this.sandBlastingOptionsService.create(createSandBlastingOptionDto);
  }

  @Get()
  findAll() {
    return this.sandBlastingOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sandBlastingOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSandBlastingOptionDto: UpdateSandBlastingOptionDto) {
    return this.sandBlastingOptionsService.update(+id, updateSandBlastingOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sandBlastingOptionsService.remove(+id);
  }
}
