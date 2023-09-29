import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AluFillsService } from './alu-fills.service';
import { CreateAluFillDto } from './dto/create-alu-fill.dto';
import { UpdateAluFillDto } from './dto/update-alu-fill.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-fills')
export class AluFillsController {
  constructor(private readonly aluFillsService: AluFillsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createAluFillDto: CreateAluFillDto) {
    const userId = req.user?.userId;
    return this.aluFillsService.create(createAluFillDto, userId);
  }

  @Get()
  findAll() {
    return this.aluFillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluFillsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluFillDto: UpdateAluFillDto,
  ) {
    const userId = req.user?.userId;
    return this.aluFillsService.update(id, updateAluFillDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluFillsService.remove(id);
  }
}
