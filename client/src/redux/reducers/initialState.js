//Este es un objeto que representa el estado y muestra los productos por defecto
//Devuelve los productos predeterminados y un arreglo vacío "cart"
//que es nuestro  estado inicial para el carro de compras


export default {
  cart: [],
  products: [
    {
      id: 1,
      name: "Lover Meteoirite",
      category:"Love",
      price: 21990,
      image:"https://static2.elcomercio.es/www/pre2017/multimedia/noticias/201506/16/media/cortadas/icaro--575x323.jpg"
    },
    {
      id: 2,
      name: "Super Landing",
      category:"Ego",
      price: 30990,
      image:"https://estaticos-cdn.elperiodico.com/clip/4667e9f7-ed08-427d-a94a-84564a84f47a_alta-libre-aspect-ratio_default_0.jpg"
    },
    {
      id: 3,
      name: "Worlds destructor",
      category:"War",
      price: 32990,
      image:"https://imagenes.elpais.com/resizer/4EByFgldlsAlx9e_5LD7pbOuL8o=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/ULELZLPEAGH2Y5LGLI4L7MEC5Q.jpg"
    },
    {
      id: 4,
      name: "Mini-Meteor",
      category:"Cheeper",
      price: 10990,
      image:"https://img.freepik.com/foto-gratis/meteorito-rojo-espacio-oscuro-e-iluminacion-neon_124595-1275.jpg"
    }
  ]
}