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
import { PvcProfilesService } from './pvc-profiles.service';
import { CreatePvcProfileDto } from './dto/create-pvc-profile.dto';
import { UpdatePvcProfileDto } from './dto/update-pvc-profile.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('pvc-profiles')
export class PvcProfilesController {
  constructor(private readonly pvcProfilesService: PvcProfilesService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createPvcProfileDto: CreatePvcProfileDto) {
    const userId = req.user?.userId;
    return this.pvcProfilesService.create(createPvcProfileDto, userId);
  }

  @Get()
  findAll() {
    return this.pvcProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pvcProfilesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updatePvcProfileDto: UpdatePvcProfileDto,
  ) {
    const userId = req.user?.userId;
    return this.pvcProfilesService.update(id, updatePvcProfileDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pvcProfilesService.remove(id);
  }
}
