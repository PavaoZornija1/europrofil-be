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
import { MechanismsService } from './mechanisms.service';
import { CreateMechanismDto } from './dto/create-mechanism.dto';
import { UpdateMechanismDto } from './dto/update-mechanism.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('mechanisms')
export class MechanismsController {
  constructor(private readonly mechanismsService: MechanismsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createMechanismDto: CreateMechanismDto) {
    const userId = req.user?.userId;
    // return false;
    return this.mechanismsService.create(createMechanismDto, userId);
  }

  @Get()
  findAll() {
    return this.mechanismsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechanismsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateMechanismDto: UpdateMechanismDto,
  ) {
    const userId = req.user?.userId;
    return this.mechanismsService.update(id, updateMechanismDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechanismsService.remove(id);
  }
}
