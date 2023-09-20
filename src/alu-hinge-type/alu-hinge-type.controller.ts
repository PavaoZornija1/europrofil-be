import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AluHingeTypeService } from './alu-hinge-type.service';
import { CreateAluHingeTypeDto } from './dto/create-alu-hinge-type.dto';
import { UpdateAluHingeTypeDto } from './dto/update-alu-hinge-type.dto';

@Controller('alu-hinge-type')
export class AluHingeTypeController {
  constructor(private readonly aluHingeTypeService: AluHingeTypeService) {}

  @Post()
  create(@Body() createAluHingeTypeDto: CreateAluHingeTypeDto) {
    return this.aluHingeTypeService.create(createAluHingeTypeDto);
  }

  @Get()
  findAll() {
    return this.aluHingeTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluHingeTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAluHingeTypeDto: UpdateAluHingeTypeDto,
  ) {
    return this.aluHingeTypeService.update(id, updateAluHingeTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluHingeTypeService.remove(id);
  }
}
