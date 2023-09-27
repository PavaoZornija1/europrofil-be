import { Injectable } from '@nestjs/common';
import { CreateBevelOptionDto } from './dto/create-bevel-option.dto';
import { UpdateBevelOptionDto } from './dto/update-bevel-option.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class BevelOptionsService {
  create(createBevelOptionDto: CreateBevelOptionDto) {
    return 'This action adds a new bevelOption';
  }

  async findAll() {
    return await prisma.cmsAluBevelOptions.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} bevelOption`;
  }

  update(id: string, updateBevelOptionDto: UpdateBevelOptionDto) {
    return `This action updates a #${id} bevelOption`;
  }

  remove(id: string) {
    return `This action removes a #${id} bevelOption`;
  }
}
