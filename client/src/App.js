import React, {useState} from 'react';
import { PicContext } from "./Context/PicContext";
import { NavigatorContext } from './Context/NavigatorContext';
import { LandingContext } from './Context/LandingContext';
import { NeasContext } from './Context/NeasContext';

import { Post } from './Context/Post';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import "./Styles/Styles.scss";


export default function App() {
  const [pic, setPic] = useState([]); // Datos para la home
  const [navActive, setNavActive] = useState("home"); // Estado botón de navegacion
  // estados para LANDINGS
  const [landingInputs, setLandingInputs] = useState([""]); // texto del input
  // estados para NEAS
  const [neasInputs, setNeasInputs] = useState([""]); // texto del input
  const [pagination, setPagination] = useState({first: 0, last: 10}) // Paginación
  const [orderBy, setOrderBy] = useState(""); // Ordenar por
  const [create, setCreate] = useState(false)
  const [postCreate, setPostCreate] = useState([])  
  const [putEdit, setPutEdit] = useState([])  
  
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
    setPagination({first: 0, last: 10})
  };
  // Añadir busqueda por class
  const onChangeInputLClass = async (e) => {
    e.preventDefault();
    setLandingInputs(["class", e.target.value]);
    setPagination({first: 0, last: 10})
  };
  // Añadir busqueda from ...
  const onChangeInputLFrom = async (e) => {
    e.preventDefault();
    landingInputs[0] === "to"
    ? setLandingInputs([...landingInputs,"from", e.target.value])
    : setLandingInputs(["from", e.target.value]);
    setPagination({first: 0, last: 10})
  };
   // Añadir busqueda to ...
  const onChangeInputLTo = async (e) => {
    e.preventDefault();
    landingInputs[0] === "from"
    ? setLandingInputs([...landingInputs,"to", e.target.value])
    : setLandingInputs(["to", e.target.value]);
    setPagination({first: 0, last: 10})
  };
  // al volver a home borra los inputs de Landings
  const onClickToHome = () => {
    setLandingInputs([""]);
    setNeasInputs([""]);
  };

  // Funcion para cambiar el orderBy
  const onChangeOrderBy = async (e) => {
    e.preventDefault();
    setOrderBy(e.target.value);
  }
  // Funcion para registrar el post de create
  const onClickCreate = async (data) => {
    setPostCreate(data);
  }

//////////////////////////////NEAS

  // Añadir busqueda por orbit_class
  const onChangeInputNorbit_class = async (e) => {
    e.preventDefault();
    setNeasInputs(["orbit_class", e.target.value]);
    setPagination({first: 0, last: 10})
  };
// Añadir busqueda por mass
const onChangeInputNFilter = async (e) => {
  e.preventDefault();
  setNeasInputs(["h_mag", e.target.value]);
  setPagination({first: 0, last: 10})
};

  // Añadir busqueda from ...
  const onChangeInputNFrom = async (e) => {
    e.preventDefault();
    neasInputs[0] === "to"
    ? setNeasInputs([...neasInputs,"from", e.target.value])
    : setNeasInputs(["from", e.target.value]);
    setPagination({first: 0, last: 10})
  };
   // Añadir busqueda to ...
  const onChangeInputNTo = async (e) => {
    e.preventDefault();
    neasInputs[0] === "from"
    ? setNeasInputs([...neasInputs,"to", e.target.value])
    : setNeasInputs(["to", e.target.value]);
    setPagination({first: 0, last: 10})
  };
  const infoPicture = {
  pic,
  getPic,
  };
  const post = {
    putEdit, 
    postCreate,
    setPostCreate,
    setPutEdit,
  }
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
    onClickCreate,
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
  const neas = {
    create,
    pagination,
    neasInputs,
    orderBy,
    setCreate,
    nextPage, 
    prevPage,
    setNeasInputs,
    onChangeInputLCreate,
    onChangeOrderBy,
    onChangeInputNorbit_class,
    onChangeInputNFilter,
    onChangeInputNFrom,
    onChangeInputNTo,
  }
    // funcion para recoger la mass de landing seleccionado desde input


  getPic()
  return (
    <div className="App">
      <NavigatorContext.Provider value={nav}>
      <Header />
      <NeasContext.Provider value={neas}>
      <LandingContext.Provider value={landing}>
      <PicContext.Provider value={infoPicture}>
      <Post.Provider value={post}>
      <Main />
      </Post.Provider>
      </PicContext.Provider>
      </LandingContext.Provider>
      </NeasContext.Provider>
      </NavigatorContext.Provider>
      <Footer />
    </div>
  )
}
