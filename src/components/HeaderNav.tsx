"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { businessConfig } from "../config/business";

export default function HeaderNav() {
  const pathname = usePathname();
  const isCatalogo = pathname === "/catalogo";
  const [open, setOpen] = useState(false);

  const links = [
    { href: isCatalogo ? "/#nosotros" : "#nosotros", label: "Nosotros" },
    { href: isCatalogo ? "/#marcas" : "#marcas", label: "Marcas" },
    { href: "/catalogo", label: "Catálogo" },
    { href: isCatalogo ? "/#contacto" : "#contacto", label: "Contacto" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/#inicio" className="text-2xl font-bold text-blue-600 hover:cursor-pointer focus:outline-none">
              {businessConfig.name}
            </Link>
          </div>
          {/* Desktop links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link key={link.label} href={link.href} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Burger menu button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none hover:bg-gray-100"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <Link
              href="/#inicio"
              className="text-2xl font-bold text-blue-600"
              onClick={() => setOpen(false)}
            >
              {businessConfig.name}
            </Link>
            <button
              className="text-gray-500 hover:text-blue-700 p-2"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Enlaces del menú alineados arriba */}
          <div className="flex-1 flex flex-col items-stretch px-2 pt-6 gap-2 overflow-y-auto">
            {links.map((link, idx) => (
              <>
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between text-xl font-medium text-gray-800 hover:text-blue-600 px-4 py-4 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                {idx < links.length - 1 && (
                  <hr className="border-t border-gray-200 mx-4" />
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}