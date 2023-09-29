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
import { AluDepartmentsService } from './alu-departments.service';
import { CreateAluDepartmentDto } from './dto/create-alu-department.dto';
import { UpdateAluDepartmentDto } from './dto/update-alu-department.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-departments')
export class AluDepartmentsController {
  constructor(private readonly aluDepartmentsService: AluDepartmentsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createAluDepartmentDto: CreateAluDepartmentDto,
  ) {
    const userId = req.user?.userId;
    return this.aluDepartmentsService.create(createAluDepartmentDto, userId);
  }

  @Get()
  findAll() {
    return this.aluDepartmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluDepartmentsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluDepartmentDto: UpdateAluDepartmentDto,
  ) {
    const userId = req.user?.userId;
    return this.aluDepartmentsService.update(
      id,
      updateAluDepartmentDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluDepartmentsService.remove(id);
  }
}
