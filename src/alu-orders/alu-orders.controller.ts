import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AluOrdersService } from './alu-orders.service';
import { CreateAluOrderDto } from './dto/create-alu-order.dto';
import { UpdateAluOrderDto } from './dto/update-alu-order.dto';

@Controller('alu-orders')
export class AluOrdersController {
  constructor(private readonly aluOrdersService: AluOrdersService) {}

  @Post()
  create(@Body() createAluOrderDto: CreateAluOrderDto) {
    return this.aluOrdersService.create(createAluOrderDto);
  }

  @Get()
  findAll() {
    return this.aluOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAluOrderDto: UpdateAluOrderDto,
  ) {
    return this.aluOrdersService.update(+id, updateAluOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluOrdersService.remove(+id);
  }
}
