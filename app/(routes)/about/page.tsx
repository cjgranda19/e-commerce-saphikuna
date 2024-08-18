"use client"; // Asegúrate de que esta línea esté al inicio

import React, { useState } from 'react';


// Componente funcional para la página de historia
const AboutPage = () => {

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quiénes Somos</h2>
        <p className="text-lg leading-relaxed text-justify mb-6">
          En Sombrero Saphikuna, somos una empresa dedicada a ofrecer los mejores sombreros y accesorios para protegerte del sol. Fundada con el objetivo de proporcionar productos de alta calidad y diseñados para cada ocasión, nos enorgullece ofrecer una amplia variedad de opciones que combinan estilo, comodidad y funcionalidad.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Historia</h2>
        <p className="text-lg leading-relaxed text-justify mb-6">
          En el siglo XVI, los sombreros llegaron a Ecuador con los colonizadores españoles, quienes los utilizaban como símbolo de estatus y para protegerse del clima. Aunque inicialmente ajenos a la cultura local, las comunidades indígenas comenzaron a adoptar este accesorio, transformándolo mediante el uso de materiales locales como la lana de oveja y el pelo de conejo. Lo que comenzó como una imposición extranjera se convirtió con el tiempo en un símbolo de identidad cultural, enriquecido por la sabiduría y las tradiciones ancestrales.
        </p>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Con la independencia de Ecuador en el siglo XIX, los sombreros se consolidaron como una parte esencial de la vestimenta regional. Desde los sombreros de paja toquilla, mundialmente conocidos como sombreros Panamá, hasta los sombreros andinos de culturas como los Salasaka, Kayambi, Otavalo, el Chulla Quiteño y la Chola Cuencana, cada estilo refleja una historia de adaptación y orgullo cultural. Es importante destacar que, aunque se les conoce como sombreros Panamá, su origen es ecuatoriano, específicamente de las provincias de Manabí y Azuay, donde son elaborados artesanalmente a partir de la fibra de la paja toquilla, un material que crece en estas regiones.
        </p>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Adicionalmente, los sombreros se confeccionan con otros materiales como el paño y la lana, los cuales son igualmente representativos de la diversidad cultural y geográfica del Ecuador. Estos sombreros, elaborados por manos artesanas en diversas provincias del país, no solo son distintivos de cada cultura, sino que también responden a las particularidades climáticas de cada región. Así, cada sombrero no solo es un accesorio, sino una expresión viva de la identidad ecuatoriana.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Objetivo</h2>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Ofrecer una plataforma en línea que no solo comercialice sombreros típicos ecuatorianos, sino que también promueva y potencie la rica cultura, las tradiciones ancestrales y las historias de los pueblos de Ecuador, apoyando prácticas sostenibles, comercio justo y preservación del patrimonio cultural.
        </p>
      </section>

      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Misión</h2>
          <p className="text-lg leading-relaxed text-justify mb-6">
            Ser un puente entre las raíces ancestrales de Ecuador y el mundo, ofreciendo sombreros típicos de alta calidad elaborados por artesanos locales, mientras fomentamos la sostenibilidad, el respeto por el medio ambiente, y el comercio justo. Buscamos que cada compra no solo represente un producto, sino una experiencia cultural auténtica y significativa.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Visión</h2>
          <p className="text-lg leading-relaxed text-justify mb-6">
            Convertirnos en la principal plataforma de referencia mundial para la venta de sombreros típicos ecuatorianos, reconocidos no solo por la calidad y autenticidad de nuestros productos, sino también por nuestro compromiso con la preservación cultural, la sostenibilidad y la mejora de las condiciones de vida de las comunidades artesanales del Ecuador.
          </p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-justify mb-6">
          <li><strong>Calidad:</strong> Sólo ofrecemos productos que cumplen con los más altos estándares de calidad.</li>
          <li><strong>Servicio al Cliente:</strong> Estamos aquí para ayudarte en cada paso del proceso de compra y para resolver cualquier duda que puedas tener.</li>
          <li><strong>Innovación:</strong> Nos mantenemos a la vanguardia de las tendencias para ofrecerte lo último en moda y tecnología para sombreros.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
        <p className="text-lg leading-relaxed text-justify mb-6">
          En Sombrero Saphikuna, no solo vendemos productos, sino que ofrecemos una experiencia. Nuestro equipo está dedicado a brindarte un servicio excepcional y a asegurarse de que cada compra sea una experiencia agradable. Con nuestro compromiso con la calidad y la atención al detalle, puedes confiar en que estás haciendo una excelente elección al elegirnos.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
