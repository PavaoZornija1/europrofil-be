import { PrismaClient } from '@prisma/client';
import seedMechanism from './seeders/mechanism';
import { genSalt, hash } from 'bcrypt';

const hashPassword = async (data: string): Promise<string> => {
  const salt = await genSalt(10);
  return await hash(data, salt);
};

const prisma = new PrismaClient();

async function main() {
  const vanja = await prisma.user.upsert({
    where: { email: 'vanja@manageit.com' },
    update: {},
    create: {
      email: 'vanja@manageit.com',
      username: 'Vanja',
      password: await hashPassword('opatovo10'),
    },
  });
  const nemanja = await prisma.user.upsert({
    where: { email: 'nemanja@manageit.com' },
    update: {},
    create: {
      email: 'nemanja@manageit.com',
      username: 'nemanja',
      password: await hashPassword('opatovo10'),
    },
  });

  seedMechanism();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
