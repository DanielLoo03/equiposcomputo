import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Modelos disponibles en prisma:', Object.keys(prisma));
  console.log('Métodos disponibles en prisma.equipo:', prisma.equipo ? Object.keys(prisma.equipo) : 'prisma.equipo es undefined');

  await prisma.equipo.createMany({
    data: [
      {
        numeroSerie: 'PC001MX',
        estatus: 'NUEVO',
        tipo: 'PC',
        marca: 'HP',
        modelo: 'EliteDesk 800 G6',
        descripcion: 'PC de escritorio con procesador Intel i5',
        stock: 5,
        precio: 14500,
      },
      {
        numeroSerie: 'LT002MX',
        estatus: 'USADO',
        tipo: 'LAPTOP',
        marca: 'Lenovo',
        modelo: 'ThinkPad E14',
        descripcion: 'Laptop empresarial con SSD de 512GB',
        stock: 2,
        precio: 9800,
      },
      {
        numeroSerie: 'MN003MX',
        estatus: 'NUEVO',
        tipo: 'MONITOR',
        marca: 'Samsung',
        modelo: 'LF24T350FHLXZX',
        descripcion: 'Monitor LED de 24 pulgadas',
        stock: 8,
        precio: 2800,
      },
      {
        numeroSerie: 'MS004MX',
        estatus: 'USADO',
        tipo: 'MOUSE',
        marca: 'Logitech',
        modelo: 'M185',
        descripcion: 'Mouse inalámbrico compacto',
        stock: 12,
        precio: 300,
      },
      {
        numeroSerie: 'TC005MX',
        estatus: 'NUEVO',
        tipo: 'TECLADO',
        marca: 'Microsoft',
        modelo: 'Wired 600',
        descripcion: 'Teclado con cable USB',
        stock: 10,
        precio: 450,
      },
      {
        numeroSerie: 'IM006MX',
        estatus: 'DESCOMPUESTO',
        tipo: 'IMPRESORA',
        marca: 'Epson',
        modelo: 'L3250',
        descripcion: 'Impresora multifuncional con sistema de tinta continua',
        stock: 1,
        precio: 3200,
      },
      {
        numeroSerie: 'CA007MX',
        estatus: 'NUEVO',
        tipo: 'CAMARA',
        marca: 'Logitech',
        modelo: 'C920',
        descripcion: 'Cámara web HD para videollamadas',
        stock: 4,
        precio: 2100,
      },
      {
        numeroSerie: 'PC008MX',
        estatus: 'USADO',
        tipo: 'PC',
        marca: 'Dell',
        modelo: 'OptiPlex 7070',
        descripcion: 'PC de oficina con procesador Intel i7',
        stock: 3,
        precio: 11200,
      },
      {
        numeroSerie: 'LT009MX',
        estatus: 'NUEVO',
        tipo: 'LAPTOP',
        marca: 'Asus',
        modelo: 'VivoBook 15',
        descripcion: 'Laptop para estudiantes con Ryzen 5',
        stock: 6,
        precio: 13450,
      },
      {
        numeroSerie: 'IM010MX',
        estatus: 'USADO',
        tipo: 'IMPRESORA',
        marca: 'Brother',
        modelo: 'HL-L2370DW',
        descripcion: 'Impresora láser monocromática con WiFi',
        stock: 2,
        precio: 2900,
      },
    ],
  });

  console.log('✅ Se insertaron 10 equipos correctamente.');
}

main()
  .catch(e => {
    console.error('❌ Error en el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });