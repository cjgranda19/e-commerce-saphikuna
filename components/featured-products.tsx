"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import products, { Product } from "@/data/productsData"; // Importa productos

const FeaturedProducts = () => {
  const router = useRouter();
  const { addItem } = useCart();

  // Filtrar productos destacados (por ejemplo, por ID o por alguna condición específica)
  const featuredProducts: Product[] = products.filter(product => [1, 2, 3].includes(product.id)); // Aquí puedes especificar los IDs de los productos destacados

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {featuredProducts.map((product) => {
            const { id, name, description, origin, price, imageUrl } = product;

            return (
              <CarouselItem
                key={id}
                className="md:basis-1/2 lg:basis-1/3 group"
              >
                <div className="p-1">
                  <Card className="py-4 border border-gray-200 shadow-none">
                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                      <img
                        src={imageUrl} // Muestra la imagen del producto
                        alt={`Image of ${name}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                        <div className="flex justify-center gap-x-6">
                          <IconButton
                            onClick={() => router.push(`/product/${id}`)} // Asume que tienes una ruta para el producto
                            icon={<Expand size={20} />}
                            className="text-gray-600"
                          />
                          <IconButton
                            onClick={() => addItem(product)}
                            icon={<ShoppingCart size={20} />}
                            className="text-gray-600"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <div className="flex justify-between gap-4 px-8">
                      <h3 className="text-lg font-bold">{name}</h3>
                      <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                          {origin}
                        </p>
                        <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
                          ${price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
