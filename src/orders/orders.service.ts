import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class OrdersService {
  async create(createOrderDto: CreateOrderDto, userId: string) {
    // CmsOrderDoors

    const newOrder = await prisma.cmsOrders.create({
      data: {
        customerName: createOrderDto.customerName,
        customerEmail: createOrderDto.customerEmail,
        finalPrice: createOrderDto.finalPrice,
        customerPhone: createOrderDto.customerPhone,
        customerAddress: createOrderDto.customerAddress,
        customerDeliveryAddress: createOrderDto.customerDeliveryAddress,
        customerDesiredDeliveryDate: createOrderDto.customerDesiredDeliveryDate,
        customerDiscountFrame: createOrderDto.customerDiscountFrame,
        customerDiscountFills: createOrderDto.customerDiscountFills,
        customerShowPriceBreakdown: createOrderDto.customerShowPriceBreakdown,
        customerLockedDiscounts: createOrderDto.customerLockedDiscounts,
        customerOwnOrderNumber: createOrderDto.customerOwnOrderNumber,
        notes: createOrderDto.notes,
        givenOrderNumber: createOrderDto.givenOrderNumber,
        orderDate: new Date(),
        extraElements: JSON.stringify(createOrderDto.extraElements),
        cmsMechanism: createOrderDto.mechanism
          ? {
              connect: {
                id: createOrderDto.mechanism,
              },
            }
          : undefined,
        cmsHandrail: createOrderDto.handrail
          ? {
              connect: {
                id: createOrderDto.handrail,
              },
            }
          : undefined,

        cmsHandrailDecoration: createOrderDto.handrailDecoration
          ? {
              connect: {
                id: createOrderDto.handrailDecoration,
              },
            }
          : undefined,
        cmsSupportedDecoration: createOrderDto.supportedDecoration
          ? {
              connect: {
                id: createOrderDto.supportedDecoration,
              },
            }
          : undefined,
        handrailDecorationCustomColor:
          createOrderDto.handrailDecorationCustomColor,
        cmsHandrailEnding: createOrderDto.handrailEnding
          ? {
              connect: {
                id: createOrderDto.handrailEnding,
              },
            }
          : undefined,
        cmsPvcProfile: createOrderDto.pvcProfile
          ? {
              connect: {
                id: createOrderDto.pvcProfile,
              },
            }
          : undefined,
        cmsHandrailEndingChild: createOrderDto.handrailEndingChild
          ? {
              connect: {
                id: createOrderDto.handrailEndingChild,
              },
            }
          : undefined,
        cmsHorizontalProfile: createOrderDto.horizontalProfile
          ? {
              connect: {
                id: createOrderDto.horizontalProfile,
              },
            }
          : undefined,
        openingHeight: createOrderDto.openingHeight,
        openingWidth: createOrderDto.openingWidth,
        openingDoors: createOrderDto.openingDoors,
        railsType: createOrderDto.railsType,
        railsLengthTopValue: createOrderDto.railsLengthTopValue,
        railsLengthTopManual: createOrderDto.railsLengthTopManual,
        railsLengthBottomValue: createOrderDto.railsLengthBottomValue,
        railsLengthBottomManual: createOrderDto.railsLengthBottomManual,
        handrailHeight: createOrderDto.handrailHeight,
        totalDeceleratorPairs: createOrderDto.totalDeceleratorPairs,
        servicesFrameName: createOrderDto.servicesFrameName,
        servicesFrameChosen: createOrderDto.servicesFrameChosen,
        servicesFillName: createOrderDto.servicesFillName,
        servicesFillChosen: createOrderDto.servicesFillChosen,
        servicesConfectionName: createOrderDto.servicesConfectionName,
        servicesConfectionChosen: createOrderDto.servicesConfectionChosen,
        servicesInstallationName: createOrderDto.servicesInstallationName,
        servicesInstallationChosen: createOrderDto.servicesInstallationChosen,
        doors: JSON.stringify(createOrderDto.doors),
        // issuedBy:
      },
    });

    // const doorIds = [];
    // // const newMech = await prisma.cmsMechanisms.create({
    // const doorsFrom = createOrderDto.doors;
    // for (let i = 0; i < doorsFrom.length; ++i) {
    //   const newOrderDoor = await prisma.cmsOrderDoors.create({
    //     data: {
    //       forceHeave: doorsFrom[i].forceHeave,
    //       profileLength: doorsFrom[i].profileLength,
    //       fillWidthGlass: doorsFrom[i].fillWidthGlass,
    //       fillWidthWood: doorsFrom[i].fillWidthWood,
    //       deceleratorsLeft: doorsFrom[i].deceleratorsLeft,
    //       deceleratorsRight: doorsFrom[i].deceleratorsRight,
    //       numberOfFields: doorsFrom[i].numberOfFields,
    //       confectionOnly: doorsFrom[i].confectionOnly,
    //       doorWidthValue: doorsFrom[i].width,
    //       doorWidthManual: doorsFrom[i].manualWidth,
    //       doorHandrailLeft: {
    //         connect: {
    //           id: doorsFrom[i].leftHandrail.id,
    //         },
    //       },
    //       doorHandrailRight: {
    //         connect: {
    //           id: doorsFrom[i].rightHandrail.id,
    //         },
    //       },
    //       cmsOrder: {
    //         connect: {
    //           id: newOrder.id,
    //         },
    //       },
    //     },
    //   });
    // }

    return newOrder;
  }

  async sendToCreate(id: string) {
    return await prisma.cmsOrders.update({
      where: {
        id: id,
      },
      data: {
        status: 'OBRADA',
      },
    });
  }

  async findAll() {
    return await prisma.cmsOrders.findMany({
      where: {
        isActive: true,
      },
      include: {
        cmsSupportedDecoration: {
          include: {
            cmsHandrail: true,
            cmsHandrailDecoration: true,
          },
        },
        cmsPvcProfile: true,
        cmsHandrail: {
          include: {
            cmsDoorMechanisms: {
              where: {
                isActive: true,
              },
            },
            cmsDoorMechanismsDeOpp: {
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
              where: {
                isActive: true,
              },
            },
            cmsMechanisms: {
              include: {
                cmsPvcProfiles: true,
              },
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
          },
        },
        cmsHandrailDecoration: true,
        cmsHandrailEnding: {
          include: {
            children: {
              where: {
                isActive: true,
              },
            },
          },
        },
        cmsHandrailEndingChild: {
          include: {
            children: {
              where: {
                isActive: true,
              },
            },
          },
        },
        cmsHorizontalProfile: true,
        cmsMechanism: {
          include: {
            cmsPvcProfiles: true,
          },
        },
        cmsOrderDoors: {
          include: {
            doorHandrailLeft: true,
            doorHandrailRight: true,
            cmsDoorMechanism: true,
            cmsOrder: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return prisma.cmsOrders.findUnique({
      where: { id: id },
      include: {
        cmsPvcProfile: true,
        cmsSupportedDecoration: {
          include: {
            cmsHandrail: true,
            cmsHandrailDecoration: true,
          },
        },
        cmsHandrail: {
          include: {
            cmsDoorMechanisms: {
              where: {
                isActive: true,
              },
            },
            cmsDoorMechanismsDeOpp: {
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
              where: {
                isActive: true,
              },
            },
            cmsMechanisms: {
              include: {
                cmsPvcProfiles: true,
              },
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
          },
        },
        cmsHandrailDecoration: true,
        cmsHandrailEnding: {
          include: {
            children: {
              where: {
                isActive: true,
              },
            },
          },
        },
        cmsHandrailEndingChild: {
          include: {
            children: {
              where: {
                isActive: true,
              },
            },
          },
        },
        cmsHorizontalProfile: true,
        cmsMechanism: {
          include: {
            cmsPvcProfiles: true,
          },
        },
        cmsOrderDoors: {
          include: {
            doorHandrailLeft: true,
            doorHandrailRight: true,
            cmsDoorMechanism: true,
            cmsOrder: true,
          },
        },
      },
    });
  }

  update(id: string, updateOrderDto: UpdateOrderDto, userId: string) {
    return `This action updates a #${id} order`;
  }

  async remove(id: string) {
    return await prisma.cmsOrders.update({
      where: {
        id: id,
      },
      data: {
        isActive: false,
        // isDeleted: true,
        deleted: new Date(),
      },
    });
  }
}
