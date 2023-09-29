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
import { AluProfilesService } from './alu-profiles.service';
import { CreateAluProfileDto } from './dto/create-alu-profile.dto';
import { UpdateAluProfileDto } from './dto/update-alu-profile.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('alu-profiles')
export class AluProfilesController {
  constructor(private readonly aluProfilesService: AluProfilesService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req: any, @Body() createAluProfileDto: CreateAluProfileDto) {
    const userId = req.user?.userId;
    return this.aluProfilesService.create(createAluProfileDto, userId);
  }

  @Get()
  findAll() {
    return this.aluProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aluProfilesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateAluProfileDto: UpdateAluProfileDto,
  ) {
    const userId = req.user?.userId;
    return this.aluProfilesService.update(id, updateAluProfileDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aluProfilesService.remove(id);
  }
}
