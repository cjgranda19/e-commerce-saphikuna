/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import categories, { Category } from "@/data/categoryData"; // Importa los datos de categorías

const ChooseCategory = () => {
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoría favorita</h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category: Category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`} // Cambia el slug por el id si no usas slug en las URLs
            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
            />
            <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
