import React, {useState} from 'react';
import { PicContext } from "./Context/PicContext";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import axios from "axios";


export default function App() {
  
  const [pic, setPic] = useState([]);

  const getPic = async () => {
    if (pic.length === 0) {
    const resp = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=SghyhGIE4leHawTWG85CIDKfT94zvIoQBOOwdIX5`);
    const data = await resp.data;
    setPic({pic: data.url, type: data.media_type, title: data.title, date: data.date, explanation: data.explanation, copyright: data.copyright}); //setPic(data);
    } 
  }
  const infoPicture = {
  pic,
  getPic,
  };
  getPic()
  return (
    <div className="App">
      <Header />
      <PicContext.Provider value={infoPicture}>
      <Main />
      </PicContext.Provider>
      <Footer />
    </div>
  )
}
