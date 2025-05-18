-- CreateEnum
CREATE TYPE "Estatus" AS ENUM ('NUEVO', 'USADO', 'DESCOMPUESTO');

-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('MONITOR', 'MOUSE', 'TECLADO', 'LAPTOP', 'IMPRESORA', 'CAMARA', 'PC');

-- CreateTable
CREATE TABLE "Equipo" (
    "numeroSerie" TEXT NOT NULL,
    "estatus" "Estatus" NOT NULL,
    "tipo" "Tipo" NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "descripcion" TEXT,
    "stock" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Equipo_pkey" PRIMARY KEY ("numeroSerie")
);

-- CreateIndex
CREATE UNIQUE INDEX "Equipo_numeroSerie_key" ON "Equipo"("numeroSerie");
