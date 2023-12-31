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
import { AluOrdersService } from './alu-orders.service';
import { CreateAluOrderDto } from './dto/create-alu-order.dto';
import { UpdateAluOrderDto } from './dto/update-alu-order.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-orders')
export class AluOrdersController {
  constructor(private readonly aluOrdersService: AluOrdersService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createAluOrderDto: CreateAluOrderDto) {
    const userId = req.user?.userId;
    // return false;
    // return this.mechanismsService.create(createMechanismDto, userId);
    return this.aluOrdersService.create(createAluOrderDto, userId);
  }

  @Get()
  findAll() {
    return this.aluOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluOrdersService.findOne(id);
  }

  @Patch('send-to-create/:id')
  @UseGuards(AuthGuard)
  sendToCreate(@Req() req: any, @Param('id') id: string) {
    const userId = req.user?.userId;
    return this.aluOrdersService.sendToCreate(id);
  }

  @Patch(':id')
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluOrderDto: UpdateAluOrderDto,
  ) {
    const userId = req.user?.userId;
    return this.aluOrdersService.update(+id, updateAluOrderDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluOrdersService.remove(id);
  }
}
