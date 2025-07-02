import Link from "next/link";
import { businessConfig } from "../config/business";
import Image from "next/image";
import ContactForm from "../components/ContactForm";


export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Materiales de Construcción
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {businessConfig.tagline}
            </p>
            <div className="space-x-4">
              <Link href="/catalogo" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Ver Catálogo
              </Link>
              <Link href="#contacto" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {businessConfig.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {businessConfig.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon === "check" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {feature.icon === "clock" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {feature.icon === "users" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas Section */}
      <section id="marcas" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marcas con las que Trabajamos
            </h2>
            <p className="text-lg text-gray-600">
              Distribuimos las mejores marcas del mercado
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {businessConfig.brands.map((marca) => (
              <div key={marca.name} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 flex flex-col items-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <Image src={marca.image} alt={marca.name} width={48} height={48} className="object-contain w-12 h-12" />
                </div>
                <h3 className="font-semibold text-gray-800 mt-2">{marca.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Catálogo */}
      <section className="py-20 bg-blue-700 flex justify-center items-center">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Buscas materiales específicos?</h2>
          <p className="text-xl text-blue-100 mb-8">Explora nuestro catálogo completo de productos y encuentra justo lo que necesitas para tu proyecto.</p>
          <Link href="/catalogo" className="inline-block bg-white text-blue-700 font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-xl">Ir al Catálogo</Link>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-600">
              Estamos aquí para ayudarte con tu proyecto
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">{businessConfig.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">{businessConfig.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{businessConfig.contact.hours}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
