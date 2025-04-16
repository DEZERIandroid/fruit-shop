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
    { id: 2, name: "Банан", price: 80 ,quantity:2,image:"",color:"yellow"},
    { id: 3, name: "Апельсин", price: 120 ,quantity:3,image:"",color:"orange"},
    { id: 4, name: "Виноград", price: 200 ,quantity:4,image:"",color:"purple"},
    { id: 5, name: "Клубника", price: 300 ,quantity:5,image:"",color:"red"},
    { id: 6, name: "Арбуз", price: 450 ,quantity:6,image:"",color:"red"},
    { id: 7, name: "Манго", price: 275 ,quantity:7,image:"",color:"rgb(218, 205, 31)"}
];