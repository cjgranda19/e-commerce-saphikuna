"use client"

import * as React from "react"
import Link from "next/link"
import categories, { Category } from "@/data/categoryData" // Importar categorías
import products from "@/data/productsData" // Asegúrate de que esta ruta sea correcta

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
    // Obtener productos por categoría
    const getProductsByCategory = (categoryId: number) => {
        return products.filter(product => product.categoryId === categoryId)
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Sombreros Saphikuna
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Bienvenido a mi tienda electronica, sumergete en el mundo de la tradición y cultura.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/" title="Tienda">
                                Accede a toda tu información, tus pedidos y mucho más.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Ropa</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {categories.map((category: Category) => (
                                <ListItem
                                    key={category.id}
                                    title={category.name}
                                    href={`/category/${category.id}`}
                                >
                                    {getProductsByCategory(category.id).map(product => (
                                        <div key={product.id}>
                                            <h4 className="text-sm font-medium">{product.name}</h4>
                                            <p className="text-sm leading-snug text-muted-foreground">
                                                {product.description}
                                            </p>
                                        </div>
                                    ))}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Historia sombreros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                            <ListItem href="/history" title="Historia de los sombreros">
                                Explora la rica historia y tradición detrás de nuestros sombreros.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MenuList

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
