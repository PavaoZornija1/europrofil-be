import { Injectable } from '@nestjs/common';
import { CreateDoorMechanismDto } from './dto/create-door-mechanism.dto';
import { UpdateDoorMechanismDto } from './dto/update-door-mechanism.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DoorMechanismsService {
  async create(createDoorMechanismDto: CreateDoorMechanismDto) {
    return await prisma.cmsDoorMechanisms.create({
      data: {
        name: createDoorMechanismDto.name,
        productCode: createDoorMechanismDto.productCode,
        price: createDoorMechanismDto.price,
        deceleratorSupport: createDoorMechanismDto.deceleratorSupport,
        deceleratorOpposites: createDoorMechanismDto.deceleratorOpposites,
        cmsMechanisms: {
          connect: createDoorMechanismDto.mechanism.map((mechanism) => ({
            id: mechanism,
          })),
        },
      },
    });
  }

  async findAll() {
    return await prisma.cmsDoorMechanisms.findMany({
      where: { isActive: true },
      include: {
        cmsMechanisms: true,
        cmsOrderDoors: true,
        cmsHandrails: true,
      },
    });
  }

  findOne(id: string) {
    return prisma.cmsDoorMechanisms.findUnique({
      where: { id: id },
      include: {
        cmsMechanisms: true,
        cmsOrderDoors: true,
        cmsHandrails: true,
      },
    });
  }

  async update(id: string, updateDoorMechanismDto: UpdateDoorMechanismDto) {
    await prisma.cmsDoorMechanisms.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
      },
    });

    return await prisma.cmsDoorMechanisms.update({
      where: {
        id: id,
      },
      data: {
        name: updateDoorMechanismDto.name,
        productCode: updateDoorMechanismDto.productCode,
        price: updateDoorMechanismDto.price,
        deceleratorSupport: updateDoorMechanismDto.deceleratorSupport,
        deceleratorOpposites: updateDoorMechanismDto.deceleratorOpposites,
        cmsMechanisms: {
          connect: updateDoorMechanismDto.mechanism.map((mechanism) => ({
            id: mechanism,
          })),
        },
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
