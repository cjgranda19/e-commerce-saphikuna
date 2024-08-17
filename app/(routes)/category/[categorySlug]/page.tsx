"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState, useMemo } from "react";

export default function Page() {
  const params = useParams<{ categorySlug?: string }>(); // Definimos el tipo para los params
  const categorySlug = params?.categorySlug;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const router = useRouter();
  const [filterOrigin, setFilterOrigin] = useState('');

  // Si no hay un slug de categoría, podemos redirigir o mostrar un mensaje
  if (!categorySlug) {
    return <p>Error: No se ha especificado una categoría.</p>;
  }

  // Filtramos productos según el origen seleccionado
  const filteredProducts = useMemo(() => {
    if (!result || loading) return null;
    return filterOrigin === ''
      ? result
      : result.filter((product: ProductType) => product.attributes.origin === filterOrigin);
  }, [result, filterOrigin, loading]);

  if (loading) {
    return <SkeletonSchema grid={3} />;
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result?.[0]?.attributes?.category?.data && (
        <h1 className="text-3xl font-medium">
          {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No hay productos que mostrar :c</p>
          )}
        </div>
      </div>
    </div>
  );
}
