//Este es un objeto que representa el estado y muestra los productos por defecto
//Devuelve los productos predeterminados y un arreglo vacío "cart"
//que es nuestro  estado inicial para el carro de compras
import M1 from "../../assets/m1.jpg"
import M2 from "../../assets/m2.jpg"
import M3 from "../../assets/m3.jpg"
import M4 from "../../assets/m4.jpg"
import M5 from "../../assets/m5.jpg"
import M6 from "../../assets/m6.jpg"
import M7 from "../../assets/m7.jpg"
import M8 from "../../assets/m8.jpg"
import M9 from "../../assets/m9.jpg"
import M10 from "../../assets/m10.jpg"

export default {
  cart: [],
  products: [
    {
      id: 1,
      name: "Special metalic",
      category:"meteorite",
      price: 52.5,
      image:M1
    },
    {
      id: 2,
      name: "Rocky metalic type 1",
      category:"meteorite",
      price: 33.0,
      image: M2
    },
    {
      id: 3,
      name: "Condrite type 1",
      category:"meteorite",
      price: 28.6,
      image: M3
    },
    {
      id: 4,
      name: "Condrite type 2",
      category:"meteorite",
      price: 27.9,
      image:M4
    },
    {
      id: 5,
      name: "Condrite type 3",
      category:"meteorite",
      price: 29.9,
      image:M5
    },
    {
      id: 6,
      name: "Metalic type 2",
      category:"meteorite",
      price: 35.5,
      image: M6
    },
    {
      id: 7,
      name: "Metalic type 2",
      category:"meteorite",
      price: 37.8,
      image: M7
    },
    {
      id: 8,
      name: "Acondrite",
      category:"meteorite",
      price: 45.2,
      image:M8
    },
    {
      id: 9,
      name: "Red Rock",
      category:"meteorite",
      price: 68.9,
      image: M9
    },
    {
      id: 10,
      name: "Rocky metalic type 2",
      category:"meteorite",
      price: 42.8,
      image:M10
    }
  ]
}