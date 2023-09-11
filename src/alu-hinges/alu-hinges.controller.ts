import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AluHingesService } from './alu-hinges.service';
import { CreateAluHingeDto } from './dto/create-alu-hinge.dto';
import { UpdateAluHingeDto } from './dto/update-alu-hinge.dto';

@Controller('alu-hinges')
export class AluHingesController {
  constructor(private readonly aluHingesService: AluHingesService) {}

  @Post()
  create(@Body() createAluHingeDto: CreateAluHingeDto) {
    return this.aluHingesService.create(createAluHingeDto);
  }

  @Get()
  findAll() {
    return this.aluHingesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluHingesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAluHingeDto: UpdateAluHingeDto,
  ) {
    return this.aluHingesService.update(id, updateAluHingeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluHingesService.remove(id);
  }
}
