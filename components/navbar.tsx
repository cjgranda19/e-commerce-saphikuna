"use client"
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import Modal from "@/components/Modal";
import { useState } from "react";

const Navbar = () => {
    const router = useRouter()
    const cart = useCart()
    const { lovedItems } = useLovedProducts()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
        <div className="flex items-center">
          <img
            src="/icono.jpg" // Ajusta la ruta del ícono
            alt="Logo"
            className="w-12 h-12 cursor-pointer"
            onClick={() => router.push("/")} // Redirige a la página principal al hacer clic
          />
          <div className="relative ml-4">
            <h1
              className="text-3xl cursor-pointer"
              onClick={handleOpenModal}
            >
              Sombreros
              <span className="font-bold"> Saphikuna</span>
            </h1>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2 className="text-xl font-bold mb-4">Bienvenido a Sombreros Saphikuna</h2>
              <p className="text-sm text-gray-700">
              Los sombreros tradicionales de Ecuador están profundamente arraigados en la cultura
               y la identidad del país al igual que saphikuna se compone de saphiy que significa arraigar
                o echar raíces y kuna, que es un sufijo plural en quechua. Por lo tanto, saphikuna podría interpretarse
                 como los que echan raíces o los que se arraigan Estos sombreros no solo representan una herencia cultural,
                  sino que también son un símbolo de identidad para los ecuatorianos, especialmente en las regiones donde su fabricación 
                  ha sido una práctica ancestral, transmitida de generación en generación. Así, los sombreros son como Saphikuna,
                   porque están arraigados en la cultura y la tradición del Ecuador, llevando consigo una rica historia y un sentido
                    de pertenencia cultural que echa raíces en la identidad nacional.
              </p>
            </Modal>
          </div>
        </div>
        <div className="items-center justify-between hidden sm:flex">
          <MenuList />
        </div>
        <div className="flex sm:hidden">
          <ItemsMenuMobile />
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-7">
        <div className="relative group flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RegisteredTM.svg/640px-RegisteredTM.svg.png" // Ajusta la ruta de la imagen
          alt="Second Icon"
          className="w-8 h-8 cursor-pointer"
        />
        <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-sm text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Sello de Marca Registrada
        </span>
      </div>


          <div className="flex items-center gap-2">
            {cart.items.length === 0 ? (
              <ShoppingCart
                strokeWidth="1"
                className="cursor-pointer"
                onClick={() => router.push("/cart")}
              />
            ) : (
              <div className="flex gap-1" onClick={() => router.push("/cart")}>
                <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                <span className="text-xs font-bold">{cart.items.length}</span>
              </div>
            )}
            
          </div>
          <Heart
            strokeWidth="1"
            className={`cursor-pointer ${lovedItems.length > 0 && "fill-black dark:fill-white"}`}
            onClick={() => router.push("/loved-products")}
          />
          <User strokeWidth="1" className="cursor-pointer" />
          <ToggleTheme />
        </div>
      </div>
    </>
  );
}

export default Navbar;