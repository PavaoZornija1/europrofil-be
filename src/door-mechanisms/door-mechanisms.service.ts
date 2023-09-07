import { Injectable } from '@nestjs/common';
import { CreateDoorMechanismDto } from './dto/create-door-mechanism.dto';
import { UpdateDoorMechanismDto } from './dto/update-door-mechanism.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DoorMechanismsService {
  create(createDoorMechanismDto: CreateDoorMechanismDto) {
    return prisma.cmsDoorMechanisms.findMany({ where: { isActive: true } });
  }

  findAll() {
    return prisma.cmsDoorMechanisms.findMany({ where: { isActive: true } });
  }

  findOne(id: string) {
    return prisma.cmsDoorMechanisms.findMany({
      where: { id: id, isActive: true },
    });
  }

  async update(id: string, updateDoorMechanismDto: UpdateDoorMechanismDto) {
    return await prisma.cmsDoorMechanisms.update({
      where: {
        id: id,
      },
      data: {
        name: updateDoorMechanismDto.name,
        productCode: updateDoorMechanismDto.productCode,
        deceleratorSupport: updateDoorMechanismDto.deceleratorSupport,
        deceleratorOpposites: updateDoorMechanismDto.deceleratorOpposites,
        cmsMechanismsId: updateDoorMechanismDto.mechanism?.id,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsDoorMechanisms.update({
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
