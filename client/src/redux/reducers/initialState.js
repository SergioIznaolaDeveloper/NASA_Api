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
      name: "MUONIONALUSTA",
      category:"METEORITO",
      price: 21990,
      image:M1
    },
    {
      id: 2,
      name: "Super Landing",
      category:"METEORITO",
      price: 30990,
      image: M2
    },
    {
      id: 3,
      name: "Worlds destructor",
      category:"METEORITO",
      price: 32990,
      image: M3
    },
    {
      id: 4,
      name: "Mini-Meteor",
      category:"METEORITO",
      price: 10990,
      image:M4
    },
    {
      id: 5,
      name: "Lover Meteoirite",
      category:"METEORITO",
      price: 21990,
      image:M5
    },
    {
      id: 6,
      name: "Super Landing",
      category:"METEORITO",
      price: 30990,
      image: M6
    },
    {
      id: 7,
      name: "Worlds destructor",
      category:"METEORITO",
      price: 32990,
      image: M7
    },
    {
      id: 8,
      name: "Mini-Meteor",
      category:"METEORITO",
      price: 10990,
      image:M8
    },
    {
      id: 9,
      name: "Worlds destructor",
      category:"METEORITO",
      price: 32990,
      image: M9
    },
    {
      id: 10,
      name: "Mini-Meteor",
      category:"METEORITO",
      price: 10990,
      image:M10
    }
  ]
}