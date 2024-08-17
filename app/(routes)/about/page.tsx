/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';

const HistoryPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Sobre Nosotros</h2>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">¿Quiénes somos?</h3>
          <p className="text-lg leading-relaxed">
          Somos una empresa online dedicada a compartir y preservar la rica tradición ecuatoriana a través de la venta de sombreros tradicionales. Nos apasiona ofrecer productos de alta calidad que representan la artesanía ancestral de las comunidades ecuatorianas, conectando a nuestros clientes con la autenticidad y el valor cultural de cada sombrero. Nuestro objetivo es llevar la historia, el arte y la identidad de Ecuador a todo el mundo, proporcionando un puente entre las manos que tejen estas obras maestras y quienes las aprecian.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Historia</h3>
          <p className="text-lg leading-relaxed">
            En el siglo XVI, los sombreros llegaron a Ecuador con los colonizadores españoles, quienes los utilizaban como símbolo de estatus y para protegerse del clima. Aunque inicialmente ajenos a la cultura local, las comunidades indígenas comenzaron a adoptar este accesorio, transformándolo mediante el uso de materiales locales como la lana de oveja y el pelo de conejo. Lo que comenzó como una imposición extranjera se convirtió con el tiempo en un símbolo de identidad cultural, enriquecido por la sabiduría y las tradiciones ancestrales.
          </p>
          <p className="text-lg leading-relaxed">
            Desde los sombreros de paja toquilla, mundialmente conocidos como "sombreros Panamá", hasta los sombreros andinos de culturas como los Salasaka, Kayambi, Otavalo, el Chulla Quiteño y la Chola Cuencana, cada estilo refleja una historia de adaptación y orgullo cultural. Es importante destacar que, aunque se les conoce como "sombreros Panamá", su origen es ecuatoriano, específicamente de las provincias de Manabí y Azuay, donde son elaborados artesanalmente a partir de la fibra de la paja toquilla, un material que crece en estas regiones.
          </p>
          <p className="text-lg leading-relaxed">
            Adicionalmente, los sombreros se confeccionan con otros materiales como el paño y la lana, los cuales son igualmente representativos de la diversidad cultural y geográfica del Ecuador. Estos sombreros, elaborados por manos artesanas en diversas provincias del país, no solo son distintivos de cada cultura, sino que también responden a las particularidades climáticas de cada región. Así, cada sombrero no solo es un accesorio, sino una expresión viva de la identidad ecuatoriana.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Objetivo</h3>
          <p className="text-lg leading-relaxed">
            Ofrecer una plataforma en línea que no solo comercialice sombreros típicos ecuatorianos, sino que también promueva y potencie la rica cultura, las tradiciones ancestrales y las historias de los pueblos de Ecuador, apoyando prácticas sostenibles, comercio justo y preservación del patrimonio cultural.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Misión</h3>
          <p className="text-lg leading-relaxed">
            Ser un puente entre las raíces ancestrales de Ecuador y el mundo, ofreciendo sombreros típicos de alta calidad elaborados por artesanos locales, mientras fomentamos la sostenibilidad, el respeto por el medio ambiente, y el comercio justo. Buscamos que cada compra no solo represente un producto, sino una experiencia cultural auténtica y significativa.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Visión</h3>
          <p className="text-lg leading-relaxed">
            Convertirnos en la principal plataforma de referencia mundial para la venta de sombreros típicos ecuatorianos, reconocidos no solo por la calidad y autenticidad de nuestros productos, sino también por nuestro compromiso con la preservación cultural, la sostenibilidad y la mejora de las condiciones de vida de las comunidades artesanales del Ecuador.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Nuestros Valores</h3>
          <ul className="list-disc pl-5 text-lg leading-relaxed">
            <li><strong>Calidad:</strong> Solo ofrecemos productos que cumplen con los más altos estándares de calidad.</li>
            <li><strong>Servicio al Cliente:</strong> Estamos aquí para ayudarte en cada paso del proceso de compra y para resolver cualquier duda que puedas tener.</li>
            <li><strong>Innovación:</strong> Nos mantenemos a la vanguardia de las tendencias para ofrecerte lo último en moda y tecnología para sombreros.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">¿Por qué elegirnos?</h3>
          <p className="text-lg leading-relaxed">
            En Sombrero Saphikuna, no solo vendemos productos, sino que ofrecemos una experiencia. Nuestro equipo está dedicado a brindarte un servicio excepcional y a asegurarse de que cada compra sea una experiencia agradable. Con nuestro compromiso con la calidad y la atención al detalle, puedes confiar en que estás haciendo una excelente elección al elegirnos.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HistoryPage;
