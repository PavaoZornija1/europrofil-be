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
import { HandrailsService } from './handrails.service';
import { CreateHandrailDto } from './dto/create-handrail.dto';
import { UpdateHandrailDto } from './dto/update-handrail.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('handrails')
export class HandrailsController {
  constructor(private readonly handrailsService: HandrailsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createHandrailDto: CreateHandrailDto) {
    const userId = req.user?.userId;
    return this.handrailsService.create(createHandrailDto, userId);
  }

  @Get()
  findAll() {
    return this.handrailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handrailsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateHandrailDto: UpdateHandrailDto,
  ) {
    const userId = req.user?.userId;
    return this.handrailsService.update(id, updateHandrailDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handrailsService.remove(id);
  }
}
