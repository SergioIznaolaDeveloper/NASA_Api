import React, {useEffect, useState} from 'react';
import { PicContext } from "./Context/PicContext";
import { NavigatorContext } from './Context/NavigatorContext';
import { LandingContext } from './Context/LandingContext';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import Styles from "./Styles/Styles.scss";



export default function App() {
  const [pic, setPic] = useState([]);
  const [navActive, setNavActive] = useState("home");
  const [landingInputs, setLandingInputs] = useState([""]); // state para almacenar el texto del input
  const [pagination, setPagination] = useState({first: 0, last: 10})
  

  const prevPage = async (e) => {
    e.preventDefault()
    setPagination({first: pagination.first - 10, last: pagination.last - 10})
  }

  const nextPage = async (e) => {
    e.preventDefault()
    setPagination({first: pagination.first + 10, last: pagination.last + 10})
  }




  const getPic = async () => {
    if (pic.length === 0) {
    const resp = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=SghyhGIE4leHawTWG85CIDKfT94zvIoQBOOwdIX5`);
    const data = await resp.data;
    setPic({pic: data.url, type: data.media_type, title: data.title, date: data.date, explanation: data.explanation, copyright: data.copyright}); //setPic(data);
    } 
  }
  const onChangeInputLMass = async (e) => {
    e.preventDefault();
    setLandingInputs(["mass", e.target.value]);
  };
  const onChangeInputLClass = async (e) => {
    e.preventDefault();
    setLandingInputs(["class", e.target.value]);
  };
  const onChangeInputLFrom = async (e) => {
    e.preventDefault();
    landingInputs[0] === "to"
    ? setLandingInputs([...landingInputs,"from", e.target.value])
    : setLandingInputs(["from", e.target.value]);
  };
  const onChangeInputLTo = async (e) => {
    e.preventDefault();
    landingInputs[0] === "from"
    ? setLandingInputs([...landingInputs,"to", e.target.value])
    : setLandingInputs(["to", e.target.value]);

  };
  const onClickToHome = () => {
    setLandingInputs([""]);
  };
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
    pagination,
    landingInputs,
    setLandingInputs,
    onChangeInputLMass,
    onChangeInputLClass,
    onChangeInputLFrom,
    onChangeInputLTo,
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
