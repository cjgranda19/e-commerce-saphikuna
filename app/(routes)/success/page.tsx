"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter()

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">

                <div>
                <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                <p className="my-3">Tu pedido ha sido procesado con éxito.</p>
                <p className="my-3">¡Gracias por confiar en nosotros y por ser parte de nuestra comunidad! Esperamos que disfrutes de tu compra tanto como nosotros disfrutamos preparándola para ti.</p>
                <p className="my-3">Recuerda en Sombreros Saphikuna te vendemos tradiciones</p>
                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;