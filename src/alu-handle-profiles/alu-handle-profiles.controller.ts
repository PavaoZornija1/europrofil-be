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
import { AluHandleProfilesService } from './alu-handle-profiles.service';
import { CreateAluHandleProfileDto } from './dto/create-alu-handle-profile.dto';
import { UpdateAluHandleProfileDto } from './dto/update-alu-handle-profile.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-handle-profiles')
export class AluHandleProfilesController {
  constructor(
    private readonly aluHandleProfilesService: AluHandleProfilesService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Req() req: any,
    @Body() createAluHandleProfileDto: CreateAluHandleProfileDto,
  ) {
    const userId = req.user?.userId;
    return this.aluHandleProfilesService.create(
      createAluHandleProfileDto,
      userId,
    );
  }

  @Get()
  findAll() {
    return this.aluHandleProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluHandleProfilesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluHandleProfileDto: UpdateAluHandleProfileDto,
  ) {
    const userId = req.user?.userId;
    return this.aluHandleProfilesService.update(
      id,
      updateAluHandleProfileDto,
      userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluHandleProfilesService.remove(id);
  }
}
