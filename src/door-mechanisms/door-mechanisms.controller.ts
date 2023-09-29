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
import { DoorMechanismsService } from './door-mechanisms.service';
import { CreateDoorMechanismDto } from './dto/create-door-mechanism.dto';
import { UpdateDoorMechanismDto } from './dto/update-door-mechanism.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('door-mechanisms')
export class DoorMechanismsController {
  constructor(private readonly doorMechanismsService: DoorMechanismsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createDoorMechanismDto: CreateDoorMechanismDto,
  ) {
    const userId = req.user?.userId;
    return this.doorMechanismsService.create(createDoorMechanismDto, userId);
  }

  @Get()
  findAll() {
    return this.doorMechanismsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doorMechanismsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateDoorMechanismDto: UpdateDoorMechanismDto,
  ) {
    const userId = req.user?.userId;
    return this.doorMechanismsService.update(
      id,
      updateDoorMechanismDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doorMechanismsService.remove(id);
  }
}
