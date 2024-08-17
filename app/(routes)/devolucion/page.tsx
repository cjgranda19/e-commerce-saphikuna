// src/pages/ReturnPolicyPage.tsx

import React from 'react';

const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Política de Devolución de Productos</h2>

      <p className="text-lg leading-relaxed mb-6">
        <strong>Política de devolución de Ecuador</strong>
        <br /><br />
        En Sombreros Saphikuna, ofrecemos la opción de devolución para ciertos productos en nuestras oficinas en Miami (EEUU). Los productos se clasifican como “Producto con devolución” o “Producto sin devolución” en cada publicación.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <strong>Los productos sin devolución son:</strong>
        <br /><br />
        - Productos con un tiempo de entrega superior a 20 días hábiles.
        <br />
        - Productos cuya naturaleza impide su devolución en EEUU, como perfumes, cremas y medicamentos.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <strong>¿Cómo solicitar una devolución?</strong>
        <br /><br />
        Para solicitar una devolución, el cliente debe hacerlo a través de su cuenta en Sombreros Saphikuna. Esta solicitud estará sujeta a la aprobación del departamento de Devoluciones (que puede demorar entre 48 y 72 horas hábiles). Si la opción no está disponible en la web, el cliente debe contactar a Atención al Cliente para iniciar el proceso.
        <br /><br />
        Una vez aprobada la devolución por Sombreros Saphikuna, el cliente tiene un plazo de 48 horas para gestionarla en la web. Las solicitudes de devolución deben hacerse de manera individual para cada ítem de la orden, cada uno con su propia etiqueta.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <strong>En productos con devolución, existen dos tipos de devoluciones:</strong>
        <br /><br />
        <strong>1. Devoluciones responsabilidad del cliente:</strong>
        <br /><br />
        Estas devoluciones pueden ser por iniciativa del cliente, por ejemplo, si el producto no le gustó o el talle fue mal elegido. El cliente tiene un plazo máximo de 7 días para solicitar este tipo de devolución desde la recepción del paquete. En estos casos, el cliente debe gestionar la devolución a Miami por su cuenta, utilizando el courier de su elección y cubriendo el costo.
        <br /><br />
        <strong>2. Devoluciones responsabilidad de Sombreros Saphikuna:</strong>
        <br /><br />
        Estas devoluciones son para productos que llegaron rotos, diferentes o incompletos. El cliente tiene un plazo máximo de 7 días desde la recepción del paquete para solicitar esta devolución. En estos casos, el cliente debe elegir un courier para enviar el producto de vuelta a Miami. Sombreros Saphikuna cubre hasta $30 USD del costo de envío*. *El cliente debe enviar una foto del comprobante para que se reembolse el costo del envío.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        En ambos casos de devolución, el reembolso se realizará como crédito interno, salvo que el cliente indique lo contrario. Para confirmar la recepción del producto y realizar el reembolso, el producto debe llegar en las mismas condiciones en que fue enviado, con la etiqueta proporcionada por el departamento de Devoluciones visible.
      </p>
    </div>
  );
}

export default ReturnPolicyPage;
