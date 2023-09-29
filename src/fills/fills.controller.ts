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
import { FillsService } from './fills.service';
import { CreateFillDto } from './dto/create-fill.dto';
import { UpdateFillDto } from './dto/update-fill.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('fills')
export class FillsController {
  constructor(private readonly fillsService: FillsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createFillDto: CreateFillDto) {
    const userId = req.user?.userId;
    return this.fillsService.create(createFillDto, userId);
  }

  @Get()
  findAll() {
    return this.fillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fillsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateFillDto: UpdateFillDto,
  ) {
    const userId = req.user?.userId;
    return this.fillsService.update(id, updateFillDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fillsService.remove(id);
  }
}
