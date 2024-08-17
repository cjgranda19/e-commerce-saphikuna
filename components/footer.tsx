"use client";

import { useState } from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaCheck, FaFacebook, FaInstagram } from "react-icons/fa";

// Datos del footer
const dataFooter = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    name: "Sobre nosotros",
    link: "#",
  },
  {
    id: 3,
    name: "Términos y condiciones",
    link: "#",
  },
  {
    id: 4,
    name: "Información de aduanas",
    link: "#",
  },
  {
    id: 5,
    name: "Política de devolución de productos",
    link: "#",
  },
];

const socialIcons = [
  {
    id: 1,
    icon: <FaEnvelope />,
    link: "mailto:sombrerossaphikuna@gmail.com",
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    link: "https://wa.me/593962568895",
  },
  {
    id: 3,
    icon: <FaFacebook />,
    link: "https://www.facebook.com/your-profile",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/sombrerossaphikuna?igsh=NWdmcG1jNTZ6dXJo",
  },
];



const Footer = () => {
  const [isAboutUsModalOpen, setAboutUsModalOpen] = useState(false);
  const [isCustomsModalOpen, setCustomsModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);
  const [isReturnPolicyModalOpen, setReturnPolicyModalOpen] = useState(false);

  const handleAboutUsModalOpen = () => setAboutUsModalOpen(true);
  const handleAboutUsModalClose = () => setAboutUsModalOpen(false);

  const handleCustomsModalOpen = () => setCustomsModalOpen(true);
  const handleCustomsModalClose = () => setCustomsModalOpen(false);

  const handleTermsModalOpen = () => setTermsModalOpen(true);
  const handleTermsModalClose = () => setTermsModalOpen(false);

  const handleReturnPolicyModalOpen = () => setReturnPolicyModalOpen(true);
  const handleReturnPolicyModalClose = () => setReturnPolicyModalOpen(false);

  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">Sombreros Saphikuna</span> E-commerce
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id}>
                {data.name === "Información de aduanas" ? (
                  <button
                    onClick={handleCustomsModalOpen}
                    className="hover:underline me-4 md:me-6 text-left text-gray-500 dark:text-gray-400"
                  >
                    {data.name}
                  </button>
                ) : data.name === "Términos y condiciones" ? (
                  <button
                    onClick={handleTermsModalOpen}
                    className="hover:underline me-4 md:me-6 text-left text-gray-500 dark:text-gray-400"
                  >
                    {data.name}
                  </button>
                ) : data.name === "Política de devolución de productos" ? (
                  <button
                    onClick={handleReturnPolicyModalOpen}
                    className="hover:underline me-4 md:me-6 text-left text-gray-500 dark:text-gray-400"
                  >
                    {data.name}
                  </button>
                ): data.name === "Sobre nosotros" ? (
                  <button
                    onClick={handleAboutUsModalOpen}
                    className="hover:underline me-4 md:me-6 text-left text-gray-500 dark:text-gray-400"
                  >
                    {data.name}
                  </button>
                ): (
                  <Link
                    href={data.link}
                    className="hover:underline me-4 md:me-6"
                    target={data.link.startsWith("/") ? "_self" : "_blank"}
                    rel={data.link.startsWith("/") ? undefined : "noopener noreferrer"}
                  >
                    {data.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center space-x-4 mb-4">
          Contactanos:
          <br />
          {socialIcons.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <h4 className="font-bold">Todo en un solo lugar</h4>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>
                <FaCheck className="inline-block text-green-600" /> Envío
                asegurado
              </li>
              <li>
                <FaCheck className="inline-block text-green-600" /> Garantía de
                entrega
              </li>
              <li>
                <FaCheck className="inline-block text-green-600" /> Productos
                originales
              </li>
              <li>
                <FaCheck className="inline-block text-green-600" /> El mejor
                precio
              </li>
              <li>
                <FaCheck className="inline-block text-green-600" /> Comprá fácil,
                rápido y seguro
              </li>
            </ul>
          </div>
          <div>
  <h4 className="font-bold">Compra con tranquilidad</h4>
  <p className="text-gray-600 dark:text-gray-400">
    La tienda cuenta con todas las certificaciones pertinentes para garantizar la seguridad de la compra
  </p>
  <h4 className="font-bold">Contamos con las siguientes certificaciones:</h4>
  <div className="flex gap-2 mt-2">
      <a href="https://www.ambiente.gob.ec/punto-verde-sector-productivo-y-de-servicios/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://www.ambiente.gob.ec/wp-content/uploads/2012/08/LOGO-PUNTO-VERDE-3-scaled.jpg"
        alt="Trust Guard"
        className="w-24 h-24"
      />
    </a>
    <a href="https://www.fairtrade.net/about/key-benefits-of-fairtrade" target="_blank" rel="noopener noreferrer">
    <img
      src="https://new.unocace.com/wp-content/uploads/elementor/thumbs/logo-fairtrade-international-p060epgaqaigy5ck9k9wvhykgviy1nqsb6iu3hp0eu.png"
      alt="Trust Guard"
      className="w-24 h-24"
    />
    </a>

    <a href="https://www.controlsanitario.gob.ec/las-bpm-garantizan-la-inocuidad-en-la-cadena-de-produccion-de-los-alimentos-procesados/#:~:text=Las%20Buenas%20Pr%C3%A1cticas%20de%20Manufactura,de%20producci%C3%B3n%2C%20distribuci%C3%B3n%20y%20comercializaci%C3%B3n." target="_blank" rel="noopener noreferrer">
    <img
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc03sl-GuUEFw-KWiAapgV1YwV8mXjWc3FqhSXdD3_LqEIPPiVHUWt0Rm1nIjkMvee5v6kwfc-QyvCf7zS5tWt8BKiqGHAbOtu4q5WCA6FGOsDMBEjs28NNm5AykATIX7It_o9UUqnVW8/s1600/Certificaciones+de+calidad+e+inocuidad+%252B+BPM.jpg"
      alt="Trust Guard"
      className="w-25 h-20"
    />
    </a>
  </div>
</div>

        </div>

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-6">
          &copy; {new Date().getFullYear()}
          <Link href="#" target="_blank" rel="noopener noreferrer">
            {" "}
            Sombreros Saphikuna{" "}
          </Link>
          Todos los derechos reservados.
        </span>
      </div>


    </footer>
  );
};

export default Footer;