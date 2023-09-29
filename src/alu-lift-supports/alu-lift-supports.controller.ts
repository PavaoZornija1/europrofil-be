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
import { AluLiftSupportsService } from './alu-lift-supports.service';
import { CreateAluLiftSupportDto } from './dto/create-alu-lift-support.dto';
import { UpdateAluLiftSupportDto } from './dto/update-alu-lift-support.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-lift-supports')
export class AluLiftSupportsController {
  constructor(
    private readonly aluLiftSupportsService: AluLiftSupportsService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createAluLiftSupportDto: CreateAluLiftSupportDto,
  ) {
    const userId = req.user?.userId;
    return this.aluLiftSupportsService.create(createAluLiftSupportDto, userId);
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
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluLiftSupportDto: UpdateAluLiftSupportDto,
  ) {
    const userId = req.user?.userId;
    return this.aluLiftSupportsService.update(
      id,
      updateAluLiftSupportDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluLiftSupportsService.remove(id);
  }
}
