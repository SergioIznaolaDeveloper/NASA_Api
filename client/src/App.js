import React, {useState} from 'react';
import { PicContext } from "./Context/PicContext";
import { NavigatorContext } from './Context/NavigatorContext';
import { LandingContext } from './Context/LandingContext';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import "./Styles/Styles.scss";


export default function App() {
  const [pic, setPic] = useState([]); // Datos para la home
  const [navActive, setNavActive] = useState("home"); // Estado botón de navegacion
  const [landingInputs, setLandingInputs] = useState([""]); // texto del input
  const [pagination, setPagination] = useState({first: 0, last: 10}) // Paginación
  const [orderBy, setOrderBy] = useState(""); // Ordenar por
  const [create, setCreate] = useState(false)
  
// Funcion para cambiar el estado de la paginacion en PREV
  const prevPage = async (e) => {
    e.preventDefault()
    setPagination({first: pagination.first - 10, last: pagination.last - 10})
  }
// Funcion para cambiar el estado de la paginacion en NEXT
  const nextPage = async (e) => {
    e.preventDefault()
    setPagination({first: pagination.first + 10, last: pagination.last + 10})
  }
  // Obtencion de datos de la API para HOME
  const getPic = async () => {
    if (pic.length === 0) {
    const resp = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=SghyhGIE4leHawTWG85CIDKfT94zvIoQBOOwdIX5`);
    const data = await resp.data;
    setPic({pic: data.url, type: data.media_type, title: data.title, date: data.date, explanation: data.explanation, copyright: data.copyright}); //setPic(data);
    } 
  }
    // Cambia el estado de crear Landing
    const onChangeInputLCreate = async (e) => {
      e.preventDefault();
      create === false
      ? setCreate(true)
      : setCreate(false)
    };

  // Añadir busqueda por mass
  const onChangeInputLMass = async (e) => {
    e.preventDefault();
    setLandingInputs(["mass", e.target.value]);
  };
  // Añadir busqueda por class
  const onChangeInputLClass = async (e) => {
    e.preventDefault();
    setLandingInputs(["class", e.target.value]);
  };
  // Añadir busqueda from ...
  const onChangeInputLFrom = async (e) => {
    e.preventDefault();
    landingInputs[0] === "to"
    ? setLandingInputs([...landingInputs,"from", e.target.value])
    : setLandingInputs(["from", e.target.value]);
  };
   // Añadir busqueda to ...
  const onChangeInputLTo = async (e) => {
    e.preventDefault();
    landingInputs[0] === "from"
    ? setLandingInputs([...landingInputs,"to", e.target.value])
    : setLandingInputs(["to", e.target.value]);
  
  };
  // al volver a home borra los inputs de Landings
  const onClickToHome = () => {
    setLandingInputs([""]);
  };

  // Funcion para cambiar el orderBy
  const onChangeOrderBy = async (e) => {
    e.preventDefault();
    setOrderBy(e.target.value);
  }
  
  const infoPicture = {
  pic,
  getPic,
  };

  const nav = {
    navActive, 
    setNavActive,
    onClickToHome,
  };
  const landing = {
    create,
    orderBy,
    pagination,
    landingInputs,
    setCreate,
    onChangeOrderBy,
    setLandingInputs,
    onChangeInputLMass,
    onChangeInputLClass,
    onChangeInputLFrom,
    onChangeInputLTo,
    onChangeInputLCreate,
    prevPage,
    nextPage,
  }
    // funcion para recoger la mass de landing seleccionado desde input


  getPic()
  return (
    <div className="App">
      <NavigatorContext.Provider value={nav}>
      <Header />
      <LandingContext.Provider value={landing}>
      <PicContext.Provider value={infoPicture}>
      <Main />
      </PicContext.Provider>
      </LandingContext.Provider>
      </NavigatorContext.Provider>
      <Footer />
    </div>
  )
}
