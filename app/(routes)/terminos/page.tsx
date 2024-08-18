"use client"; // Asegúrate de que esta línea esté al inicio

import React, { useState } from 'react';

// Componente funcional para la página de historia
const TermsPage = () => {

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-8">Términos y Condiciones</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Acuerdo y Condiciones de Uso - Sombrero Saphikuna</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. ALCANCE</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Esta política de privacidad se aplica a todos los datos personales que recolectamos a través de nuestro sistema de facturación o en nuestra página web.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. INFORMACIÓN QUE RECOPILAMOS</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          En Sombrero Saphikuna, recolectamos información directamente de ti cuando usas nuestro sistema de facturación o visitas nuestro sitio web.
        </p>
        <p className="text-lg leading-relaxed text-justify mb-6">
          <strong>¿Qué datos personales recopilamos?</strong>
          <br />
          - Cédula/RUC
          <br />
          - Nombre completo
          <br />
          - Provincia, ciudad, dirección
          <br />
          - Teléfono
          <br />
          - Género y estado civil
          <br />
          - Fecha de nacimiento
          <br />
          - Correo electrónico
        </p>
        <p className="text-lg leading-relaxed text-justify mb-6">
          <strong>¿Por qué necesitamos estos datos?</strong>
          <br />
          Estos datos nos permiten ofrecerte un mejor servicio, garantizar que las transacciones se procesen correctamente, y asegurarnos de que la información que recibes sea relevante y personalizada.
          <br />
          Importante: Siempre debes proporcionar información veraz y actualizada. No está permitido proporcionar datos de otras personas sin su consentimiento.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. TUS DERECHOS</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          La Ley de Protección de Datos Personales te otorga varios derechos sobre tu información:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-justify mb-6">
          <li><strong>Derecho a la información:</strong> Puedes saber qué datos tuyos tenemos y cómo los usamos.</li>
          <li><strong>Derecho de acceso:</strong> Tienes derecho a ver y obtener una copia de tus datos.</li>
          <li><strong>Derecho de rectificación:</strong> Si tus datos son incorrectos o están desactualizados, puedes pedir que los corrijamos.</li>
          <li><strong>Derecho de eliminación:</strong> En algunos casos, puedes solicitar que eliminemos tus datos.</li>
          <li><strong>Derecho a la oposición:</strong> Puedes oponerte al uso de tus datos, especialmente para marketing.</li>
        </ul>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Para ejercer estos derechos o si quieres revocar tu consentimiento, contáctanos en <a href="mailto:semestreq4@gmail.com" className="text-blue-500">semestreq4@gmail.com</a>.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. FINALIDAD</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Usamos tus datos para:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-justify mb-6">
          <li>Enviar ofertas personalizadas y publicidad.</li>
          <li>Cumplir con obligaciones legales.</li>
          <li>Gestionar tus pagos y transacciones.</li>
          <li>Mejorar nuestros servicios y atención al cliente.</li>
        </ul>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Recuerda: Siempre respetamos tu privacidad y nos aseguramos de que estas actividades no sean invasivas.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">5. COMPARTIR TUS DATOS</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Compartimos tus datos personales solo en los siguientes casos:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-justify mb-6">
          <li>Si nos das tu autorización.</li>
          <li>Para cumplir con obligaciones legales.</li>
          <li>Con terceros que necesiten los datos para brindarte nuestros servicios asegurándonos de que usen tu información de manera segura.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">6. PROCESO PARA EJERCER TUS DERECHOS</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Si deseas acceder, rectificar, eliminar u oponerte al uso de tus datos, envíanos un correo a <a href="mailto:semestreq4@gmail.com" className="text-blue-500">semestreq4@gmail.com</a> con el asunto Derechos de datos y tus datos personales. Responderemos a tu solicitud lo antes posible.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">7. CAMBIOS EN NUESTRA POLÍTICA DE PRIVACIDAD</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Podemos actualizar esta política cuando sea necesario. Si hay cambios importantes, te notificaremos por correo electrónico o en nuestro sitio web antes de que entren en vigencia.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">8. USO DE COOKIES</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Usamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes revisar nuestra política de cookies para más detalles.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">9. SEGURIDAD DE TUS DATOS</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          En Sombrero Saphikuna, tomamos medidas de seguridad para proteger tu información personal. Usamos el protocolo HTTPS para asegurar las transacciones en línea.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">10. BASE LEGAL</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Tratamos tus datos de acuerdo con la Ley Orgánica de Protección de Datos Personales y la Ley de Comercio Electrónico de Ecuador.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">11. TÉRMINOS Y CONDICIONES</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Al utilizar nuestro sitio web o cualquiera de nuestros servicios, aceptas estos términos y condiciones de uso.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">12. RESPONSABILIDAD</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          Sombrero Saphikuna solo es responsable del tratamiento de los datos que recolecta directamente a través de su sistema de facturación o página web. Al aceptar estos términos, confirmas que tienes la capacidad legal para hacerlo y que has leído y aceptado todas las condiciones sin ninguna limitación.
        </p>
      </section>
    </div>
  );
};

export default TermsPage;
