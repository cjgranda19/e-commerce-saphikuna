"use client";

import { useParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import products, { Product } from "@/data/productsData";
import categories from "@/data/categoryData";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const categoryId = parseInt(params.categoryId as string, 10);

  console.log("Received Category ID:", categoryId); // Agrega este log para verificar el ID recibido

  if (isNaN(categoryId)) {
    return <p>Invalid Category ID</p>;
  }

  // Busca la categoría correspondiente usando el id
  const category = categories.find((cat) => cat.id === categoryId);

  console.log("Found Category:", category); // Agrega este log para verificar la categoría encontrada

  if (!category) {
    return <p>Category not found</p>; // Manejo si la categoría no se encuentra
  }

  // Filtrar productos por categoría usando categoryId
  const filteredProducts: Product[] = products.filter(
    (product: Product) => product.categoryId === categoryId
  );

  const [filterOrigin, setFilterOrigin] = useState("");

  // Filtrar productos por origen además de la categoría
  const displayedProducts: Product[] = filterOrigin === ""
    ? filteredProducts
    : filteredProducts.filter(
        (product: Product) => product.origin === filterOrigin
      );

  console.log("Filtered Products:", displayedProducts); // Agrega este log para verificar los productos filtrados

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-medium">
        {category.name}
      </h1>
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {filteredProducts.length === 0 && <SkeletonSchema grid={3} />}
          {displayedProducts.length > 0 &&
            displayedProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {displayedProducts.length === 0 && (
            <p>No hay productos con este filtro.</p>
          )}
        </div>
      </div>
    </div>
  );
}
