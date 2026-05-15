import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.car.createMany({
    data: [
      {
        title: "Mercedes-Benz 190E 2.3",
        year: 1988,
        priceCents: 8500000, // R$ 85.000,00
        mileageKm: 120000,
        engine: "2.3L M102",
        transmission: "Manual 5 velocidades",
        description: "Clássico 190E em excelente estado, motor original, manutenção completa.",
        status: "AVAILABLE",
      },
      {
        title: "Mercedes-Benz 190E 2.6",
        year: 1992,
        priceCents: 9500000,
        mileageKm: 95000,
        engine: "2.6L M103",
        transmission: "Automática 4 velocidades",
        description: "Versão esportiva com motor 2.6, interior impecável, pronta para uso.",
        status: "AVAILABLE",
      },
      {
        title: "Mercedes-Benz 190E Evolution",
        year: 1990,
        priceCents: 12000000,
        mileageKm: 78000,
        engine: "2.5L M102 EVO",
        transmission: "Manual 5 velocidades",
        description: "Modelo raro Evolution, com modificações originais da AMG.",
        status: "RESERVED",
      },
    ],
  });
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