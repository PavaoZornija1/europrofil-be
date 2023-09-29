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
import { SupportedDecorationsService } from './supported-decorations.service';
import { CreateSupportedDecorationDto } from './dto/create-supported-decoration.dto';
import { UpdateSupportedDecorationDto } from './dto/update-supported-decoration.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('supported-decorations')
export class SupportedDecorationsController {
  constructor(
    private readonly supportedDecorationsService: SupportedDecorationsService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createSupportedDecorationDto: CreateSupportedDecorationDto,
  ) {
    const userId = req.user?.userId;
    return this.supportedDecorationsService.create(
      createSupportedDecorationDto,
      userId,
    );
  }

  @Get()
  findAll() {
    return this.supportedDecorationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supportedDecorationsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateSupportedDecorationDto: UpdateSupportedDecorationDto,
  ) {
    const userId = req.user?.userId;
    return this.supportedDecorationsService.update(
      id,
      updateSupportedDecorationDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supportedDecorationsService.remove(id);
  }
}
