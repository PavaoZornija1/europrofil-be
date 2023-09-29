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
import { AluHingeTypeService } from './alu-hinge-type.service';
import { CreateAluHingeTypeDto } from './dto/create-alu-hinge-type.dto';
import { UpdateAluHingeTypeDto } from './dto/update-alu-hinge-type.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-hinge-type')
export class AluHingeTypeController {
  constructor(private readonly aluHingeTypeService: AluHingeTypeService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createAluHingeTypeDto: CreateAluHingeTypeDto,
  ) {
    const userId = req.user?.userId;
    return this.aluHingeTypeService.create(createAluHingeTypeDto, userId);
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
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluHingeTypeDto: UpdateAluHingeTypeDto,
  ) {
    const userId = req.user?.userId;
    return this.aluHingeTypeService.update(id, updateAluHingeTypeDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluHingeTypeService.remove(id);
  }
}
