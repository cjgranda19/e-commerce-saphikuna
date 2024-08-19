import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import categories from "@/data/categoryData"; // Importa las categorías

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                {categories.map(category => (
                    <Link
                        key={category.id}
                        href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} // Convierte el nombre en una URL amigable
                        className="block"
                    >
                        {category.name}
                    </Link>
                ))}
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;
