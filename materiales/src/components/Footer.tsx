import Link from "next/link";
import { businessConfig } from "../config/business";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">{businessConfig.name}</h3>
          <p className="text-gray-300 mb-0">
            Tu proveedor confiable de materiales de construcción en Querétaro.
          </p>
        </div>
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-2">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="#nosotros" className="text-gray-300 hover:text-white">Nosotros</Link></li>
            <li><Link href="#marcas" className="text-gray-300 hover:text-white">Marcas</Link></li>
            <li><Link href="/catalogo" className="text-gray-300 hover:text-white">Catálogo</Link></li>
            <li><Link href="#contacto" className="text-gray-300 hover:text-white">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-300">
          © 2025 {businessConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}