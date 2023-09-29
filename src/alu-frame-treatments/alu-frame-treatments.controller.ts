import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AluFrameTreatmentsService } from './alu-frame-treatments.service';
import { CreateAluFrameTreatmentDto } from './dto/create-alu-frame-treatment.dto';
import { UpdateAluFrameTreatmentDto } from './dto/update-alu-frame-treatment.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-frame-treatments')
export class AluFrameTreatmentsController {
  constructor(
    private readonly aluFrameTreatmentsService: AluFrameTreatmentsService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createAluFrameTreatmentDto: CreateAluFrameTreatmentDto,
  ) {
    const userId = req.user?.userId;
    return this.aluFrameTreatmentsService.create(
      createAluFrameTreatmentDto,
      userId,
    );
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
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluFrameTreatmentDto: UpdateAluFrameTreatmentDto,
  ) {
    const userId = req.user?.userId;
    return this.aluFrameTreatmentsService.update(
      id,
      updateAluFrameTreatmentDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluFrameTreatmentsService.remove(id);
  }
}
