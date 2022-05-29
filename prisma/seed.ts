import { PrismaClient } from '@prisma/client';
import tablEspeces from '../prisma/tableConvert.com_yglwbd.json';

const prisma = new PrismaClient();

async function seed() {
  await prisma.mvtTracabapp.deleteMany({});

  await prisma.especes.deleteMany({});

  tablEspeces.map(async (espece) => {
    return await prisma.especes.create({
      data: {
        codeEspece: espece.codeEspece,
        nomCommun: espece.nomComun,
        nomLatin: espece.nomLatin,
      },
    });
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
