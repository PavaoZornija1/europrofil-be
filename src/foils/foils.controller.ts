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
import { FoilsService } from './foils.service';
import { CreateFoilDto } from './dto/create-foil.dto';
import { UpdateFoilDto } from './dto/update-foil.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('foils')
export class FoilsController {
  constructor(private readonly foilsService: FoilsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createFoilDto: CreateFoilDto) {
    const userId = req.user?.userId;
    return this.foilsService.create(createFoilDto, userId);
  }

  @Get()
  findAll() {
    return this.foilsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foilsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateFoilDto: UpdateFoilDto,
  ) {
    const userId = req.user?.userId;
    return this.foilsService.update(id, updateFoilDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foilsService.remove(id);
  }
}
