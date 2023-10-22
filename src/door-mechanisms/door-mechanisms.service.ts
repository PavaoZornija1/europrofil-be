import { Injectable } from '@nestjs/common';
import { CreateDoorMechanismDto } from './dto/create-door-mechanism.dto';
import { UpdateDoorMechanismDto } from './dto/update-door-mechanism.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DoorMechanismsService {
  async create(createDoorMechanismDto: CreateDoorMechanismDto, userId: string) {
    return await prisma.cmsDoorMechanisms.create({
      data: {
        name: createDoorMechanismDto.name,
        productCode: createDoorMechanismDto.productCode,
        price: createDoorMechanismDto.price,
        deceleratorSupport: createDoorMechanismDto.deceleratorSupport,
        deceleratorOpposites: {
          connect: createDoorMechanismDto.deceleratorOpposites.map((dopp) => ({
            id: dopp,
          })),
        },
        // deceleratorOpposites: createDoorMechanismDto.deceleratorOpposites,
        cmsMechanisms: {
          connect: createDoorMechanismDto.mechanism.map((mechanism) => ({
            id: mechanism,
          })),
        },
        // createdBy: userId
        //   ? {
        //       connect: {
        //         id: userId,
        //       },
        //     }
        //   : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsDoorMechanisms.findMany({
      where: { isActive: true },
      include: {
        deceleratorOpposites: {
          where: {
            isActive: true,
          },
        },
        cmsMechanisms: true,
        cmsOrderDoors: true,
        cmsHandrails: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return prisma.cmsDoorMechanisms.findUnique({
      where: { id: id },
      include: {
        deceleratorOpposites: {
          where: {
            isActive: true,
          },
        },
        cmsMechanisms: true,
        cmsOrderDoors: true,
        cmsHandrails: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async update(
    id: string,
    updateDoorMechanismDto: UpdateDoorMechanismDto,
    userId: string,
  ) {
    await prisma.cmsDoorMechanisms.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
        deceleratorOpposites: {
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
        // deceleratorOpposites: updateDoorMechanismDto.deceleratorOpposites,
        deceleratorOpposites: {
          connect: updateDoorMechanismDto.deceleratorOpposites.map((dopp) => ({
            id: dopp,
          })),
        },
        modified: new Date(),
        cmsMechanisms: {
          connect: updateDoorMechanismDto.mechanism.map((mechanism) => ({
            id: mechanism,
          })),
        },
        // modifiedBy: userId
        //   ? {
        //       connect: {
        //         id: userId,
        //       },
        //     }
        //   : undefined,
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
