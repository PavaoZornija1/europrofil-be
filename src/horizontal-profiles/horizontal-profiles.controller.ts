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
import { HorizontalProfilesService } from './horizontal-profiles.service';
import { CreateHorizontalProfileDto } from './dto/create-horizontal-profile.dto';
import { UpdateHorizontalProfileDto } from './dto/update-horizontal-profile.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('horizontal-profiles')
export class HorizontalProfilesController {
  constructor(
    private readonly horizontalProfilesService: HorizontalProfilesService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createHorizontalProfileDto: CreateHorizontalProfileDto,
  ) {
    const userId = req.user?.userId;

    return this.horizontalProfilesService.create(
      createHorizontalProfileDto,
      userId,
    );
  }

  @Get()
  findAll() {
    return this.horizontalProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horizontalProfilesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateHorizontalProfileDto: UpdateHorizontalProfileDto,
  ) {
    const userId = req.user?.userId;

    return this.horizontalProfilesService.update(
      id,
      updateHorizontalProfileDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horizontalProfilesService.remove(id);
  }
}
