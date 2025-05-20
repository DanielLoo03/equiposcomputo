import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const nuevoEquipo = await prisma.equipo.create({
      data,
    });

    return NextResponse.json(nuevoEquipo, { status: 201 });
  } catch (error: any) {
    console.error('❌ ERROR AL GUARDAR:', error);
    console.error('Detalle completo:', error.stack);
    return NextResponse.json({ error: error.message || 'Error al guardar el equipo' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const equipos = await prisma.equipo.findMany();
    return NextResponse.json(equipos);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener equipos' }, { status: 500 });
  }
}