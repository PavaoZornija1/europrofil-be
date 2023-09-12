import { Injectable } from '@nestjs/common';
import { CreateHandrailDto } from './dto/create-handrail.dto';
import { UpdateHandrailDto } from './dto/update-handrail.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HandrailsService {
  async create(createHandrailDto: CreateHandrailDto) {
    return await prisma.cmsHandrails.create({
      data: {
        name: createHandrailDto.name,
        roundingSteps: createHandrailDto.roundingSteps,
        doorWidth: createHandrailDto.doorWidth,
        profileLength: createHandrailDto.profileLength,
        fillWidthGlass: createHandrailDto.fillWidthGlass,
        fillWidthWood: createHandrailDto.fillWidthWood,
        cmsMechanismsId: createHandrailDto.mechanism?.id,
        cmsDoorMechanismsId: createHandrailDto.doorMechanism?.id,
      },
    });
  }

  async findAll() {
    return await prisma.cmsHandrails.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsHandrails.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateHandrailDto: UpdateHandrailDto) {
    return await prisma.cmsHandrails.update({
      where: {
        id: id,
      },
      data: {
        name: updateHandrailDto.name,
        roundingSteps: updateHandrailDto.roundingSteps,
        doorWidth: updateHandrailDto.doorWidth,
        profileLength: updateHandrailDto.profileLength,
        fillWidthGlass: updateHandrailDto.fillWidthGlass,
        fillWidthWood: updateHandrailDto.fillWidthWood,
        cmsMechanismsId: updateHandrailDto.mechanism?.id,
        cmsDoorMechanismsId: updateHandrailDto.doorMechanism?.id,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsHandrails.update({
      where: {
        id: id,
      },
      data: {
        isActive: false,
        isDeleted: true,
        deleted: new Date(),
      },
    });
  }
}
