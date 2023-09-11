import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AluFrameTreatmentsService } from './alu-frame-treatments.service';
import { CreateAluFrameTreatmentDto } from './dto/create-alu-frame-treatment.dto';
import { UpdateAluFrameTreatmentDto } from './dto/update-alu-frame-treatment.dto';

@Controller('alu-frame-treatments')
export class AluFrameTreatmentsController {
  constructor(
    private readonly aluFrameTreatmentsService: AluFrameTreatmentsService,
  ) {}

  @Post()
  create(@Body() createAluFrameTreatmentDto: CreateAluFrameTreatmentDto) {
    return this.aluFrameTreatmentsService.create(createAluFrameTreatmentDto);
  }

  @Get()
  findAll() {
    return this.aluFrameTreatmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluFrameTreatmentsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAluFrameTreatmentDto: UpdateAluFrameTreatmentDto,
  ) {
    return this.aluFrameTreatmentsService.update(
      id,
      updateAluFrameTreatmentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluFrameTreatmentsService.remove(id);
  }
}
