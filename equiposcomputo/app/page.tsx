'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const estatusOptions = ['NUEVO', 'USADO', 'DESCOMPUESTO'] as const;
const tipoOptions = ['MONITOR', 'MOUSE', 'TECLADO', 'LAPTOP', 'IMPRESORA', 'CAMARA', 'PC'] as const;

type Equipo = {
  numeroSerie: string;
  estatus: string;
  tipo: string;
  marca: string;
  modelo: string;
  descripcion?: string;
  stock: number;
  precio: number;
};

export default function EquiposCRUD() {
  const router = useRouter();

  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [form, setForm] = useState<Equipo>({
    numeroSerie: '',
    estatus: 'NUEVO',
    tipo: 'PC',
    marca: '',
    modelo: '',
    descripcion: '',
    stock: 1,
    precio: 0.0,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Carga inicial de equipos
  const fetchEquipos = async () => {
    try {
      const res = await fetch('/api');
      if (!res.ok) throw new Error('Error al cargar equipos');
      const data = await res.json();
      setEquipos(data);
    } catch (error) {
      alert('Error al cargar equipos');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEquipos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'stock' ? parseInt(value) : name === 'precio' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = isEditing ? 'PUT' : 'POST';
      // Para PUT, usamos la ruta con el numeroSerie en params
      const url = isEditing ? `/api/${form.numeroSerie}` : '/api/';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Error al guardar');

      const equipoGuardado = await res.json();
      console.log('Guardado:', equipoGuardado);

      setForm({
        numeroSerie: '',
        estatus: 'NUEVO',
        tipo: 'PC',
        marca: '',
        modelo: '',
        descripcion: '',
        stock: 1,
        precio: 0.0,
      });

      setIsEditing(false);

      fetchEquipos();
    } catch (error) {
      console.error(error);
      alert('Hubo un error al guardar el equipo.');
    }
  };

  const handleEditar = (numeroSerie: string) => {
    const equipo = equipos.find(e => e.numeroSerie === numeroSerie);
    if (equipo) {
      setForm(equipo);
      setIsEditing(true);
    }
  };

  const handleEliminar = async (numeroSerie: string) => {
    if (!confirm('¿Estás seguro de eliminar este equipo?')) return;

    try {
      const res = await fetch(`/api/${numeroSerie}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar');

      alert('Equipo eliminado');
      fetchEquipos();
    } catch (error) {
      console.error(error);
      alert('Error al eliminar equipo');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{isEditing ? 'Editar Equipo' : 'Registrar Equipo de Cómputo'}</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div>
          <label className="block font-medium mb-1">Número de serie</label>
          <input
            type="text"
            name="numeroSerie"
            value={form.numeroSerie}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            disabled={isEditing} // No permitir cambiar número de serie al editar
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Estatus</label>
          <select
            name="estatus"
            value={form.estatus}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            {estatusOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Tipo</label>
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            {tipoOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Marca</label>
          <input
            type="text"
            name="marca"
            value={form.marca}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Modelo</label>
          <input
            type="text"
            name="modelo"
            value={form.modelo}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Descripción (opcional)</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Stock</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            required
            min={0}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Precio</label>
          <input
            type="number"
            name="precio"
            value={form.precio}
            onChange={handleChange}
            required
            step="0.01"
            min={0}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {isEditing ? 'Guardar Cambios' : 'Agregar Equipo'}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setForm({
                numeroSerie: '',
                estatus: 'NUEVO',
                tipo: 'PC',
                marca: '',
                modelo: '',
                descripcion: '',
                stock: 1,
                precio: 0.0,
              });
            }}
            className="w-full mt-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Cancelar edición
          </button>
        )}
      </form>

      <h2 className="text-2xl font-semibold mb-4">Lista de Equipos</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Número de Serie</th>
            <th className="border border-gray-300 p-2">Estatus</th>
            <th className="border border-gray-300 p-2">Tipo</th>
            <th className="border border-gray-300 p-2">Marca</th>
            <th className="border border-gray-300 p-2">Modelo</th>
            <th className="border border-gray-300 p-2">Stock</th>
            <th className="border border-gray-300 p-2">Precio</th>
            <th className="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map(equipo => (
            <tr key={equipo.numeroSerie}>
              <td className="border border-gray-300 p-2">{equipo.numeroSerie}</td>
              <td className="border border-gray-300 p-2">{equipo.estatus}</td>
              <td className="border border-gray-300 p-2">{equipo.tipo}</td>
              <td className="border border-gray-300 p-2">{equipo.marca}</td>
              <td className="border border-gray-300 p-2">{equipo.modelo}</td>
              <td className="border border-gray-300 p-2">{equipo.stock}</td>
              <td className="border border-gray-300 p-2">${equipo.precio.toFixed(2)}</td>
              <td className="border border-gray-300 p-2 space-x-2 text-center">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  onClick={() => handleEditar(equipo.numeroSerie)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  onClick={() => handleEliminar(equipo.numeroSerie)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {equipos.length === 0 && (
            <tr>
              <td colSpan={8} className="text-center p-4">No hay equipos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}