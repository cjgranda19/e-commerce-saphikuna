// src/pages/CustomsInfoPage.tsx

import React from 'react';

const CustomsInfoPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Información de Aduanas</h2>

      <p className="text-lg leading-relaxed mb-6 text-justify">
        <strong>Información de Aduanas Ecuador</strong>
        <br /><br />
        Esto es lo que debes saber para estar al día con la normativa de la aduana y que tu orden pueda llegar sin problema del mundo a tu puerta en Ecuador. En Sombreros Saphikuna puedes hacer tus compras a través de la categoría B (4x4) y la categoría C.
      </p>

      <p className="text-lg leading-relaxed mb-6 text-justify">
        <strong>1. El 4x4 (o categoría B)</strong>
        <br /><br />
        <strong>a. </strong>No paga impuestos ecuatorianos.
        <br />
        <strong>b. </strong>Tienes una cantidad ilimitada de órdenes en el régimen 4x4 siempre que cada una de estas esté dentro del peso máximo permitido (hasta 4 kg) y no superen los $400, además de cumplir con el cupo anual por persona.
        <br />
        <strong>c. </strong>El cupo anual máximo es de $1.600 al año para compras en el exterior a través del régimen 4x4.
        <br />
        <strong>d. </strong>Se puede comprar una gran variedad de productos dentro de esta categoría siempre y cuando cumplan con el 4x4 y no sean para fines comerciales. Por esa razón, se puede comprar máximo 3 productos iguales o similares de la misma categoría. Por ejemplo, puedes comprar hasta 3 perfumes, hasta 3 relojes y hasta 3 pares de zapatos. Si te excedes de esta cantidad, tu orden puede tener cargos extra por parte de la aduana.
      </p>

      <p className="text-lg leading-relaxed mb-6 text-justify">
        <strong>2. Las tablets, laptops y celulares se pueden comprar a través de la Categoría C.</strong>
        <br /><br />
        <strong>a. </strong>Esta categoría sí paga impuestos (IVA + Fodinfa).
        <br />
        <strong>b. </strong>Solo se puede comprar un celular nuevo al año; no se admiten refabricados, usados u “open box.”
      </p>

      <p className="text-lg leading-relaxed mb-6 text-justify">
        <strong>3. </strong>No tendrás que hacer trámites de aduana. Hacemos todo por ti.
        <br /><br />
        <strong>4. </strong>El monto de las compras se limita a una cédula, pero no a tu usuario de Tiendamia.
      </p>
    </div>
  );
}

export default CustomsInfoPage;
