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
import { HandrailDecorationsService } from './handrail-decorations.service';
import { CreateHandrailDecorationDto } from './dto/create-handrail-decoration.dto';
import { UpdateHandrailDecorationDto } from './dto/update-handrail-decoration.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('handrail-decorations')
export class HandrailDecorationsController {
  constructor(
    private readonly handrailDecorationsService: HandrailDecorationsService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createHandrailDecorationDto: CreateHandrailDecorationDto,
  ) {
    const userId = req.user?.userId;
    return this.handrailDecorationsService.create(
      createHandrailDecorationDto,
      userId,
    );
  }

  @Get()
  findAll() {
    return this.handrailDecorationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handrailDecorationsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateHandrailDecorationDto: UpdateHandrailDecorationDto,
  ) {
    const userId = req.user?.userId;
    return this.handrailDecorationsService.update(
      id,
      updateHandrailDecorationDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handrailDecorationsService.remove(id);
  }
}
