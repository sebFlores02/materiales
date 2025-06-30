"use client";

import { useState } from "react";
import { products } from "../../data/products";

function formatPrice(value?: number) {
  if (value === undefined) return null;
  return value.toLocaleString("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 2 });
}

const categorias = Array.from(new Set(products.map(p => p.categoria)));

export default function CatalogoPage() {
  const [selectedCat, setSelectedCat] = useState(categorias[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar de categorías */}
        <aside className="md:w-1/4 mb-6 md:mb-0">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Categorías</h2>
            <ul className="space-y-2">
              {categorias.map((cat) => (
                <li key={cat}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition border border-transparent ${selectedCat === cat ? "bg-blue-600 text-white" : "bg-white text-blue-700 hover:bg-blue-100"}`}
                    onClick={() => setSelectedCat(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {/* Productos de la categoría seleccionada */}
        <main className="flex-1">
          <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center md:text-left">{selectedCat}</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {products.filter(p => p.categoria === selectedCat).map((prod, idx) => (
              <div key={prod.material + idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2 border border-gray-100 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-lg text-blue-700">{prod.material}</span>
                </div>
                {prod.marca && (
                  <div className="mb-2">
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded">
                      Marca: {prod.marca}
                    </span>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 text-sm">
                  {prod.precioPorTonelada !== undefined && (
                    <span className="bg-gray-100 px-2 py-1 rounded">Tonelada: <b>{formatPrice(prod.precioPorTonelada)}</b></span>
                  )}
                  {prod.precioPorBulto !== undefined && (
                    <span className="bg-gray-100 px-2 py-1 rounded">Bulto: <b>{formatPrice(prod.precioPorBulto)}</b></span>
                  )}
                  {prod.precioPorPieza !== undefined && (
                    <span className="bg-gray-100 px-2 py-1 rounded">Pieza: <b>{formatPrice(prod.precioPorPieza)}</b></span>
                  )}
                  {prod.precioPorCaja !== undefined && (
                    <span className="bg-gray-100 px-2 py-1 rounded">Caja: <b>{formatPrice(prod.precioPorCaja)}</b></span>
                  )}
                  {prod.precioPorKg !== undefined && (
                    <span className="bg-gray-100 px-2 py-1 rounded">Kg: <b>{formatPrice(prod.precioPorKg)}</b></span>
                  )}
                  {prod.precioPorRollo !== undefined && (
                    <span className="bg-gray-100 px-2 py-1 rounded">Rollo: <b>{formatPrice(prod.precioPorRollo)}</b></span>
                  )}
                  {prod.precioPorBolsa !== undefined && (
                    <span className="bg-gray-100 px-2 py-1 rounded">Bolsa: <b>{formatPrice(prod.precioPorBolsa)}</b></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}