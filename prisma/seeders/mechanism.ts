import { PrismaClient } from '@prisma/client';

import { mechanism } from '../mockData/mechanism';

const prisma = new PrismaClient()

const seedMechanism = async () => {
  await prisma.mechanism.createMany({
    data: mechanism,
    skipDuplicates: true,
  });
}

export default seedMechanism;
