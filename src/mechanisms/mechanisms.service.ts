import { Injectable } from '@nestjs/common';
import { CreateMechanismDto } from './dto/create-mechanism.dto';
import { UpdateMechanismDto } from './dto/update-mechanism.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class MechanismsService {
  async create(
    createMechanismDto: CreateMechanismDto,
    userId: string,
    files: any,
  ) {
    const newMech = await prisma.cmsMechanisms.create({
      data: {
        name: createMechanismDto.name,
        ordering: Number(createMechanismDto.ordering),
        productCode: createMechanismDto.productCode,
        constantsHeight: Number(createMechanismDto.constantsHeight),
        constantsHandrailHeight: Number(
          createMechanismDto.constantsHandrailHeight,
        ),
        constantsDeceleratorHeight: Number(
          createMechanismDto.constantsDeceleratorHeight,
        ),
        constantsProfileTopWood: Number(
          createMechanismDto.constantsDeceleratorHeight,
        ),
        constantsProfileTopGlass: Number(
          createMechanismDto.constantsProfileTopGlass,
        ),
        constantsProfileBottomWood: Number(
          createMechanismDto.constantsProfileBottomWood,
        ),
        constantsProfileBottomGlass: Number(
          createMechanismDto.constantsProfileBottomGlass,
        ),
        constantsSeparatorThickness: Number(
          createMechanismDto.constantsSeparatorThickness,
        ),
        constantsSeparatorGlassGap: Number(
          createMechanismDto.constantsSeparatorGlassGap,
        ),
        constantsSeparatorWoodGap: Number(
          createMechanismDto.constantsSeparatorWoodGap,
        ),
        pvcProfileAvailable:
          createMechanismDto.pvcProfileAvailable === 'false' ? false : true,
        thinningAvailable:
          createMechanismDto.thinningAvailable === 'false' ? false : true,
        deceleratorSupport:
          createMechanismDto.deceleratorSupport === 'false' ? false : true,
        differentHandrails:
          createMechanismDto.differentHandrails === 'false' ? false : true,
        withoutTopAndBottomProfiles:
          createMechanismDto.withoutTopAndBottomProfiles === 'false'
            ? false
            : true,
        loadMin: Number(createMechanismDto.loadMin),
        loadMax: Number(createMechanismDto.loadMax),
        widthMin: Number(createMechanismDto.widthMin),
        heavyThreshold: Number(createMechanismDto.heavyThreshold),
        widthMax: Number(createMechanismDto.widthMax),
        heightMin: Number(createMechanismDto.heightMin),
        heightMax: Number(createMechanismDto.heightMax),
        fillThicknessMin: Number(createMechanismDto.fillThicknessMin),
        fillThicknessMax: Number(createMechanismDto.fillThicknessMax),
        fillTypes: createMechanismDto.fillTypes,
        detailsLink: createMechanismDto.detailsLink,
        confectionPricePerDoor: Number(
          createMechanismDto.confectionPricePerDoor,
        ),
        installationPricePerDoor: Number(
          createMechanismDto.installationPricePerDoor,
        ),
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

    const { pic, thinningPic } = files;
    if (pic) {
      const newPic = await prisma.files.create({
        data: {
          mimetype: pic.mimetype,
          path: `public/uploads/${pic[0].originalname}`,
          mechanismPic: {
            connect: {
              id: newMech.id,
            },
          },
        },
      });
    }
    if (thinningPic) {
      const thinningPic = await prisma.files.create({
        data: {
          mimetype: pic.mimetype,
          path: `public/uploads/${pic[0].originalname}`,
          mechanismThinningPic: {
            connect: {
              id: newMech.id,
            },
          },
        },
      });
    }
    return newMech;

    // locale    String?
    // file      String?
    // filename  String?
    // path      String?
    // filesize  Decimal?
    // extension String?
    // mimetype  String?
    // width     Int?
    // height    Int?
    // isImage   Boolean?
    // extra     String?
    // alt       String?
    // source    String?
    // meta      String?
    // modified  DateTime?

    // mechanismPic                CmsMechanisms?         @relation(fields: [mechanismPicId], references: [id], name: "MechanismPic")
    // mechanismPicId              String?                @unique
    // mechanismThinningPic        CmsMechanisms?         @relation(fields: [mechanismThinningPicId], references: [id], name: "MechanismThinningPic")
    // mechanismThinningPicId
  }

  async findAll() {
    return await prisma.cmsMechanisms.findMany({
      where: {
        isActive: true,
      },
      include: {
        pic: true,
        thinningpPic: true,
        cmsOrders: true,
        cmsHorizontalProfiles: {
          where: {
            isActive: true,
          },
        },
        cmsDoorMechanisms: {
          include: {
            deceleratorOpposites: {
              where: {
                isActive: true,
              },
            },
            DoorMechanismDeceleratorOpposites: {
              where: {
                isActive: true,
              },
            },
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
            cmsDoorMechanismsDeOpp: {
              where: {
                isActive: true,
              },
            },
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
        pic: true,
        thinningpPic: true,
        cmsOrders: true,
        cmsHorizontalProfiles: {
          where: {
            isActive: true,
          },
        },
        cmsDoorMechanisms: {
          include: {
            deceleratorOpposites: {
              where: {
                isActive: true,
              },
            },
            DoorMechanismDeceleratorOpposites: {
              where: {
                isActive: true,
              },
            },
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
            cmsDoorMechanismsDeOpp: {
              where: {
                isActive: true,
              },
            },
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
        pvcProfileAvailable:
          updateMechanismDto.pvcProfileAvailable === 'false' ? false : true,
        thinningAvailable:
          updateMechanismDto.thinningAvailable === 'false' ? false : true,
        deceleratorSupport:
          updateMechanismDto.deceleratorSupport === 'false' ? false : true,
        differentHandrails:
          updateMechanismDto.differentHandrails === 'false' ? false : true,
        withoutTopAndBottomProfiles:
          updateMechanismDto.withoutTopAndBottomProfiles === 'false'
            ? false
            : true,
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
