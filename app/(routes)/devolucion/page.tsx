"use client"; // Asegúrate de que esta línea esté al inicio

import React from 'react';

const ReturnPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Política de Devolución de Productos</h2>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Política de devolución de Ecuador</strong>
          <br /><br />
          Sombreros Saphikuna ofrece a sus clientes la posibilidad de devolución para determinados productos a nuestras oficinas en Miami (EEUU). Dentro de cada publicación está especificado como “Producto con devolución” o “Producto sin devolución”.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Los productos sin devolución son:</strong>
          <br /><br />
          - Los productos que tienen un tiempo de entrega mayor a 20 días hábiles.
          <br />
          - Productos que por su naturaleza, no admiten devolución en EEUU y por ende Sombreros Saphikuna no puede ofrecer la devolución al cliente. Ejemplos: perfumes, cremas y medicamentos.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>¿Cómo solicitar una devolución?</strong>
          <br /><br />
          Para solicitar una devolución, el cliente debe realizarlo a través de su cuenta de Sombreros Saphikuna. Este proceso está sujeto a la aprobación del departamento de Devoluciones (lo cual puede demorar de 48hs a 72hs hábiles). En caso de no tener la opción en la web, el cliente debe contactarse con Atención al Cliente para iniciar la solicitud.
          <br /><br />
          Una vez que la devolución sea habilitada por Sombreros Saphikuna, el cliente tiene un plazo de 48hs para gestionarlo en la web. Las solicitudes de devolución deben realizarse de manera individual para cada ítem de la orden, contando cada uno con su propia etiqueta.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>En productos con devolución, existen dos tipos de devoluciones:</strong>
          <br /><br />
          <strong>1. Devoluciones responsabilidad de cliente:</strong>
          <br /><br />
          Estas devoluciones se pueden dar por iniciativa del cliente, es decir, si no le gustó el producto o eligió mal el talle. El cliente dispone de un plazo máximo de 7 días para solicitar este tipo de devolución, desde el momento en que recibe su paquete. En estos casos, el cliente debe hacer la devolución a Miami por su cuenta, utilizando el courier que más le convenga, el costo lo debe cubrir el cliente.
          <br /><br />
          <strong>2. Devoluciones responsabilidad de Sombreros Saphikuna:</strong>
          <br /><br />
          Estas devoluciones se pueden dar si el producto llegó roto, diferente o incompleto. El cliente dispone en un plazo máximo de 7 días, desde el momento en que recibe su paquete. En estos casos, el cliente debe elegir un courier para hacer la devolución a Miami. Tiendamia cubre hasta $30 USD del costo de envío*. * El cliente debe enviar foto del comprobante para que se pueda reembolsar el costo de envío.
          <br /><br />
          En ambos casos de devoluciones, el reembolso de dinero será realizado a crédito interno, a no ser que el cliente especifique lo contrario. Para que desde nuestras oficinas en Miami nos confirmen que el producto fue recibido, y de esta forma podamos realizar el reembolso al cliente, es necesario que el producto llegue en las condiciones que fue enviado y con la etiqueta enviada por el departamento de Devoluciones a la vista.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
