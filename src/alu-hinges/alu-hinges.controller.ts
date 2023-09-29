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
import { AluHingesService } from './alu-hinges.service';
import { CreateAluHingeDto } from './dto/create-alu-hinge.dto';
import { UpdateAluHingeDto } from './dto/update-alu-hinge.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-hinges')
export class AluHingesController {
  constructor(private readonly aluHingesService: AluHingesService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createAluHingeDto: CreateAluHingeDto) {
    const userId = req.user?.userId;
    return this.aluHingesService.create(createAluHingeDto, userId);
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
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluHingeDto: UpdateAluHingeDto,
  ) {
    const userId = req.user?.userId;
    return this.aluHingesService.update(id, updateAluHingeDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluHingesService.remove(id);
  }
}
