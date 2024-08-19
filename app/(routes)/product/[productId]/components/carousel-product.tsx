// CarouselProduct.tsx
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Product } from "@/types/product";
import Image from "next/image";

interface CarouselProductProps {
  product: Product; // Acepta un producto completo
}

const CarouselProduct = ({ product }: CarouselProductProps) => {
  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          <CarouselItem key={product.id}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.origin}</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
