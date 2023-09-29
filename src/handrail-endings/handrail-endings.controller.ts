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
import { HandrailEndingsService } from './handrail-endings.service';
import { CreateHandrailEndingDto } from './dto/create-handrail-ending.dto';
import { UpdateHandrailEndingDto } from './dto/update-handrail-ending.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('handrail-endings')
export class HandrailEndingsController {
  constructor(
    private readonly handrailEndingsService: HandrailEndingsService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createHandrailEndingDto: CreateHandrailEndingDto,
  ) {
    const userId = req.user?.userId;
    return this.handrailEndingsService.create(createHandrailEndingDto, userId);
  }

  @Get()
  findAll() {
    return this.handrailEndingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handrailEndingsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateHandrailEndingDto: UpdateHandrailEndingDto,
  ) {
    const userId = req.user?.userId;
    return this.handrailEndingsService.update(
      id,
      updateHandrailEndingDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handrailEndingsService.remove(id);
  }
}
