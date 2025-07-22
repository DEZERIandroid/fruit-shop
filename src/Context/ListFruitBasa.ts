export type Fruit = {
    id: number;
    name: string;
    price: number;
    quantity:number;
    image:string,
    color?:string
};

export const fruitlist: Fruit[] = [
    { id: 1, name: "Яблоко", price: 100 ,quantity:1,image:"",color:"green"},
    { id: 2, name: "Банан", price: 64 ,quantity:2,image:"",color:"yellow"},
    { id: 3, name: "Апельсин", price: 120 ,quantity:3,image:"",color:"orange"},
    { id: 4, name: "Виноград", price: 200 ,quantity:4,image:"",color:"purple"},
    { id: 5, name: "Клубника", price: 300 ,quantity:5,image:"",color:"red"},
    { id: 6, name: "Арбуз", price: 450 ,quantity:6,image:"",color:"red"},
    { id: 7, name: "Манго", price: 275 ,quantity:7,image:"",color:"rgb(218, 205, 31)"},
    { id: 8, name: "Салак", price: 999 ,quantity:8,image:"",color:"rgb(255, 255, 255)"},
    { id: 9, name: "Киви", price: 150, quantity: 9, image: "", color: "green" },
    { id: 10, name: "Папайя", price: 180, quantity: 10, image: "", color: "orange" },
    { id: 11, name: "Рамбутан", price: 250, quantity: 11, image: "", color: "red" },
    { id: 12, name: "Лонган", price: 220, quantity: 12, image: "", color: "brown" },
    { id: 13, name: "Дуриан", price: 500, quantity: 13, image: "", color: "gold" },
    { id: 14, name: "Питахайя", price: 400, quantity: 14, image: "", color: "pink" },
    { id: 15, name: "Черимойя", price: 300, quantity: 15, image: "", color: "lightgreen" },
    { id: 16, name: "Гуава", price: 200, quantity: 16, image: "", color: "hotpink" },
    { id: 17, name: "Фейхоа", price: 270, quantity: 17, image: "", color: "#a0e17e" },
    { id: 18, name: "Джекфрут", price: 600, quantity: 18, image: "", color: "yellow" }
];