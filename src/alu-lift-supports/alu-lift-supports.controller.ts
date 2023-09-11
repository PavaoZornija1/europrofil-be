import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AluLiftSupportsService } from './alu-lift-supports.service';
import { CreateAluLiftSupportDto } from './dto/create-alu-lift-support.dto';
import { UpdateAluLiftSupportDto } from './dto/update-alu-lift-support.dto';

@Controller('alu-lift-supports')
export class AluLiftSupportsController {
  constructor(
    private readonly aluLiftSupportsService: AluLiftSupportsService,
  ) {}

  @Post()
  create(@Body() createAluLiftSupportDto: CreateAluLiftSupportDto) {
    return this.aluLiftSupportsService.create(createAluLiftSupportDto);
  }

  @Get()
  findAll() {
    return this.aluLiftSupportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluLiftSupportsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAluLiftSupportDto: UpdateAluLiftSupportDto,
  ) {
    return this.aluLiftSupportsService.update(id, updateAluLiftSupportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluLiftSupportsService.remove(id);
  }
}
