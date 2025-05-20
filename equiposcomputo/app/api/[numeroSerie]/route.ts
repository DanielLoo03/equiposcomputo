import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: { numeroSerie: string } }) {
  try {
    const numeroSerie = params.numeroSerie;
    const data = await request.json();

    const equipoActualizado = await prisma.equipo.update({
      where: { numeroSerie }, // Aquí busca por numeroSerie que es string y único
      data,
    });

    return NextResponse.json(equipoActualizado);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar equipo' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { numeroSerie: string } }) {
  try {
    const numeroSerie = params.numeroSerie;

    await prisma.equipo.delete({
      where: { numeroSerie },
    });

    return NextResponse.json({ message: 'Equipo eliminado' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar equipo' }, { status: 500 });
  }
}