import { Injectable } from '@nestjs/common';
import { CreateSandBlastingOptionDto } from './dto/create-sand-blasting-option.dto';
import { UpdateSandBlastingOptionDto } from './dto/update-sand-blasting-option.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SandBlastingOptionsService {
  create(createSandBlastingOptionDto: CreateSandBlastingOptionDto) {
    return 'This action adds a new sandBlastingOption';
  }

  async findAll() {
    return await prisma.cmsAluSandBlastingOptions.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} sandBlastingOption`;
  }

  update(id: number, updateSandBlastingOptionDto: UpdateSandBlastingOptionDto) {
    return `This action updates a #${id} sandBlastingOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} sandBlastingOption`;
  }
}
