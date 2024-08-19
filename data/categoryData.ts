export type Category = {
    id: number;
    name: string;
    imageUrl: string;
};

const categories: Category[] = [
    {
        id: 1,
        name: "Ruta Costera",
        imageUrl: "/montubio.jpg", // Asegúrate de tener esta imagen en tu proyecto
    },
    {
        id: 2,
        name: "Ruta Andina",
        imageUrl: "/saraguro.jpg", // Asegúrate de tener esta imagen en tu proyecto
    },
    {
        id: 3,
        name: "Ruta Amazónica",
        imageUrl: "/secoyas.jpg", // Asegúrate de tener esta imagen en tu proyecto
    },
];

export default categories;
