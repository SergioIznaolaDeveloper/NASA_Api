import React, { useEffect, useContext } from 'react'
import { PicContext } from "../../../Context/PicContext";
import { NavigatorContext } from "../../../Context/NavigatorContext";

export default function Home() {
  const { pic } = useContext(PicContext);
  const {setNavActive, onClickToHome} = useContext(NavigatorContext);
  useEffect(() => {
    setNavActive("home");
    onClickToHome();
  } , [])
  return (
    <div className="home">
      <p className="home__title">{pic.title}</p>
      <p className="home__explanation">{pic.explanation}</p>
      {pic.type === "video"?(
      <div className="home__video"><iframe title="picOfTheDay" width="100%" height="100%" src={pic.pic}></iframe></div>
      ):(<img className="home__picture" src={pic.pic} alt=""/>)}
      <p className="home__author-date">{pic.copyright} {pic.date}</p>
    </div>
    );
}
