// app/routes/comprar-productos.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { useCart } from "@/hooks/use-cart";

export default function ComprarProductosPage() {
  const { items = [] } = useCart(); // Obtener los artículos del carrito
  const [formData, setFormData] = useState({
    nombres: "",
    correo: "",
    pais: "",
    ciudad: "",
    calle: "",
    numeroTarjeta: ""
  });

  const router = useRouter();

  const prices = items.map((product) => product.price || 0);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCancel = () => {
    router.push("/successError"); // Redirigir a la página principal
  };

  const handleCompra = () => {
    router.push("/success"); // Redirigir a la página principal
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías hacer la lógica de envío del formulario, como una solicitud POST
    console.log("Form Data:", formData);
    // Redirigir o mostrar mensaje de éxito
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:min-h-[80vh]">
      <h1 className="mb-5 text-3xl font-bold">Comprar Productos</h1>
      <div className="max-w-xl mx-auto">
        <div className="p-6 rounded-lg bg-slate-100 mb-6">
          <p className="mb-3 text-lg font-semibold">Order Summary</p>
          <Separator />
          <div className="flex justify-between gap-5 my-4">
            <p>Order total</p>
            <p>{formatPrice(totalPrice)}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombres" className="block font-semibold">Nombres</label>
            <input
              id="nombres"
              name="nombres"
              type="text"
              value={formData.nombres}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="correo" className="block font-semibold">Correo Electrónico</label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="pais" className="block font-semibold">País</label>
            <input
              id="pais"
              name="pais"
              type="text"
              value={formData.pais}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="ciudad" className="block font-semibold">Ciudad</label>
            <input
              id="ciudad"
              name="ciudad"
              type="text"
              value={formData.ciudad}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="calle" className="block font-semibold">Calle Principal</label>
            <input
              id="calle"
              name="calle"
              type="text"
              value={formData.calle}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="numeroTarjeta" className="block font-semibold">Número de Tarjeta</label>
            <input
              id="numeroTarjeta"
              name="numeroTarjeta"
              type="text"
              value={formData.numeroTarjeta}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex gap-4">
            <Button type="button" onClick={handleCancel} className="w-full">
              Cancelar
            </Button>
            <Button type="submit" onClick={handleCompra} className="w-full">
              Comprar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
