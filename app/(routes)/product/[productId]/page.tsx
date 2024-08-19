"use client";

import { useParams } from "next/navigation";
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";
import products from "@/data/productsData";

export default function Page() {
  const params = useParams();
  const productId = params.productId as string; // Usa `productId` en lugar de `productSlug`

  // Verifica si `productId` es un número
  const id = parseInt(productId, 10);
  if (isNaN(id)) {
    return <p>Invalid Product ID</p>;
  }

  // Buscar el producto por ID en los datos estáticos
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <SkeletonProduct />;
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh]">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProduct product={product} /> {/* Pasa el producto completo */}
        </div>

        <div className="sm:px-12">
          <InfoProduct product={product} />
        </div>
      </div>
    </div>
  );
}
