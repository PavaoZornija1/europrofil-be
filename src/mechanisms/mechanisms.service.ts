import { Injectable } from '@nestjs/common';
import { CreateMechanismDto } from './dto/create-mechanism.dto';
import { UpdateMechanismDto } from './dto/update-mechanism.dto';
import { PrismaClient } from '@prisma/client';

export const mechanism = [
  {
    id: 1,
    src: '/images/EP10.webp',
    alt: 'Picture 1',
    title: 'Mehanizam EP 10 nosivosti od 25kg do 70kg',
    filler: 'Staklo 4mm, drvo 10 ili 18mm',
    thickness: '-',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 2,
    src: '/images/EP18.webp',
    alt: 'Picture 2',
    title: 'Mehanizam EP 18 N nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '-',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 3,
    src: '/images/EP04.webp',
    alt: 'Picture 3',
    title: 'Mehanizam EP 04 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 10 ili 18mm',
    thickness: '-',
    doorWidth: '50cm - 120cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 4,
    src: '/images/PKM80.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 5,
    src: '/images/EP18.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 6,
    src: '/images/PKM80.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 7,
    src: '/images/EP10.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 8,
    src: '/images/PKM80.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 9,
    src: '/images/EP18.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 10,
    src: '/images/EP10.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 11,
    src: '/images/PKM80.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
  {
    id: 12,
    src: '/images/EP18.webp',
    alt: 'Picture 4',
    title: 'Mehanizam PKM 80 nosivosti od 15kg do 60kg',
    filler: 'Staklo 4mm, drvo 18mm',
    thickness: '18mm',
    doorWidth: '50cm - 140cm',
    doorHeight: '30cm - 320cm',
  },
];

const prisma = new PrismaClient();

@Injectable()
export class MechanismsService {
  async create(createMechanismDto: CreateMechanismDto, userId: string) {
    return await prisma.cmsMechanisms.create({
      data: {
        name: createMechanismDto.name,
        ordering: createMechanismDto.ordering,
        productCode: createMechanismDto.productCode,
        constantsHeight: createMechanismDto.constantsHeight,
        constantsHandrailHeight: createMechanismDto.constantsHandrailHeight,
        constantsDeceleratorHeight:
          createMechanismDto.constantsDeceleratorHeight,
        constantsProfileTopWood: createMechanismDto.constantsDeceleratorHeight,
        constantsProfileTopGlass: createMechanismDto.constantsProfileTopGlass,
        constantsProfileBottomWood:
          createMechanismDto.constantsProfileBottomWood,
        constantsProfileBottomGlass:
          createMechanismDto.constantsProfileBottomGlass,
        constantsSeparatorThickness:
          createMechanismDto.constantsSeparatorThickness,
        constantsSeparatorGlassGap:
          createMechanismDto.constantsSeparatorGlassGap,
        constantsSeparatorWoodGap: createMechanismDto.constantsSeparatorWoodGap,
        pvcProfileAvailable: createMechanismDto.pvcProfileAvailable,
        thinningAvailable: createMechanismDto.thinningAvailable,
        deceleratorSupport: createMechanismDto.deceleratorSupport,
        differentHandrails: createMechanismDto.differentHandrails,
        withoutTopAndBottomProfiles:
          createMechanismDto.withoutTopAndBottomProfiles,
        loadMin: createMechanismDto.loadMin,
        loadMax: createMechanismDto.loadMax,
        widthMin: createMechanismDto.widthMin,
        heavyThreshold: createMechanismDto.heavyThreshold,
        widthMax: createMechanismDto.widthMax,
        heightMin: createMechanismDto.heightMin,
        heightMax: createMechanismDto.heightMax,
        fillThicknessMin: createMechanismDto.fillThicknessMin,
        fillThicknessMax: createMechanismDto.fillThicknessMax,
        fillTypes: createMechanismDto.fillTypes,
        detailsLink: createMechanismDto.detailsLink,
        confectionPricePerDoor: createMechanismDto.confectionPricePerDoor,
        installationPricePerDoor: createMechanismDto.installationPricePerDoor,
        confectionProductCode: createMechanismDto.confectionProductCode,
        installationProductCode: createMechanismDto.installationProductCode,
        createdBy: userId
          ? {
              connect: {
                id: userId,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsMechanisms.findMany({
      where: {
        isActive: true,
      },
      include: {
        cmsOrders: true,
        cmsHorizontalProfiles: {
          where: {
            isActive: true,
          },
        },
        cmsDoorMechanisms: {
          include: {
            cmsOrderDoors: true,
            cmsHandrails: {
              where: {
                isActive: true,
              },
            },
          },
        },
        cmsHandrails: {
          where: {
            isActive: true,
          },
          include: {
            cmsDoorMechanisms: {
              where: {
                isActive: true,
              },
            },
            cmsSupportedDecorations: {
              include: {
                cmsHandrail: {
                  where: {
                    isActive: true,
                  },
                },
                cmsHandrailDecoration: {
                  where: {
                    isActive: true,
                  },
                },
              },
              where: {
                isActive: true,
              },
            },
            cmsHandrailEndings: {
              include: {
                children: {
                  where: {
                    isActive: true,
                  },
                },
              },
            },
          },
        },
        cmsHandrailEndings: {
          where: {
            isActive: true,
          },
        },
        cmsHandrailDecorations: {
          where: {
            isActive: true,
          },
        },
        cmsPvcProfiles: {
          where: {
            isActive: true,
          },
        },
        cmsFills: {
          include: {
            children: {
              where: {
                isActive: true,
              },
            },
          },
          where: {
            isActive: true,
          },
        },
        cmsExtras: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return prisma.cmsMechanisms.findUnique({
      where: { id: id },
      include: {
        cmsOrders: true,
        cmsHorizontalProfiles: {
          where: {
            isActive: true,
          },
        },
        cmsDoorMechanisms: {
          include: {
            cmsOrderDoors: true,
            cmsHandrails: {
              where: {
                isActive: true,
              },
            },
          },
        },
        cmsHandrails: {
          where: {
            isActive: true,
          },
          include: {
            cmsDoorMechanisms: {
              where: {
                isActive: true,
              },
            },
            cmsSupportedDecorations: {
              include: {
                cmsHandrail: {
                  where: {
                    isActive: true,
                  },
                },
                cmsHandrailDecoration: {
                  where: {
                    isActive: true,
                  },
                },
              },
              where: {
                isActive: true,
              },
            },
            cmsHandrailEndings: {
              include: {
                children: {
                  where: {
                    isActive: true,
                  },
                },
              },
            },
          },
        },
        cmsHandrailEndings: {
          where: {
            isActive: true,
          },
          include: {
            children: {
              where: {
                isActive: true,
              },
            },
          },
        },
        cmsHandrailDecorations: {
          where: {
            isActive: true,
          },
        },
        cmsPvcProfiles: {
          where: {
            isActive: true,
          },
        },
        cmsFills: {
          include: {
            children: {
              where: {
                isActive: true,
              },
            },
          },
          where: {
            isActive: true,
          },
        },
        cmsExtras: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async update(
    id: string,
    updateMechanismDto: UpdateMechanismDto,
    userId: string,
  ) {
    return await prisma.cmsMechanisms.update({
      where: {
        id: id,
      },
      data: {
        name: updateMechanismDto.name,
        modified: new Date(),
        ordering: updateMechanismDto.ordering,
        productCode: updateMechanismDto.productCode,
        constantsHeight: updateMechanismDto.constantsHeight,
        constantsHandrailHeight: updateMechanismDto.constantsHandrailHeight,
        constantsDeceleratorHeight:
          updateMechanismDto.constantsDeceleratorHeight,
        constantsProfileTopWood: updateMechanismDto.constantsDeceleratorHeight,
        constantsProfileTopGlass: updateMechanismDto.constantsProfileTopGlass,
        constantsProfileBottomWood:
          updateMechanismDto.constantsProfileBottomWood,
        constantsProfileBottomGlass:
          updateMechanismDto.constantsProfileBottomGlass,
        constantsSeparatorThickness:
          updateMechanismDto.constantsSeparatorThickness,
        constantsSeparatorGlassGap:
          updateMechanismDto.constantsSeparatorGlassGap,
        constantsSeparatorWoodGap: updateMechanismDto.constantsSeparatorWoodGap,
        pvcProfileAvailable: updateMechanismDto.pvcProfileAvailable,
        thinningAvailable: updateMechanismDto.thinningAvailable,
        deceleratorSupport: updateMechanismDto.deceleratorSupport,
        differentHandrails: updateMechanismDto.differentHandrails,
        withoutTopAndBottomProfiles:
          updateMechanismDto.withoutTopAndBottomProfiles,
        loadMin: updateMechanismDto.loadMin,
        loadMax: updateMechanismDto.loadMax,
        widthMin: updateMechanismDto.widthMin,
        heavyThreshold: updateMechanismDto.heavyThreshold,
        widthMax: updateMechanismDto.widthMax,
        heightMin: updateMechanismDto.heightMin,
        heightMax: updateMechanismDto.heightMax,
        fillThicknessMin: updateMechanismDto.fillThicknessMin,
        fillThicknessMax: updateMechanismDto.fillThicknessMax,
        fillTypes: updateMechanismDto.fillTypes,
        detailsLink: updateMechanismDto.detailsLink,
        confectionPricePerDoor: updateMechanismDto.confectionPricePerDoor,
        installationPricePerDoor: updateMechanismDto.installationPricePerDoor,
        confectionProductCode: updateMechanismDto.confectionProductCode,
        installationProductCode: updateMechanismDto.installationProductCode,
        modifiedBy: userId
          ? {
              connect: {
                id: userId,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsMechanisms.update({
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
