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
import { ExtrasService } from './extras.service';
import { CreateExtraDto } from './dto/create-extra.dto';
import { UpdateExtraDto } from './dto/update-extra.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('extras')
export class ExtrasController {
  constructor(private readonly extrasService: ExtrasService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createExtraDto: CreateExtraDto) {
    const userId = req.user?.userId;
    return this.extrasService.create(createExtraDto, userId);
  }

  @Get()
  findAll() {
    return this.extrasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extrasService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateExtraDto: UpdateExtraDto,
  ) {
    const userId = req.user?.userId;
    return this.extrasService.update(id, updateExtraDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extrasService.remove(id);
  }
}
