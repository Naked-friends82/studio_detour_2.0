import React, { useRef } from "react";
import Bennett from "../component/Movie_bennett";
import Sam from "../component/Movie_sam";
import Lasse from "../component/Movie_lasse";
import Lee from "../component/Movie_lee";
import movieBack from "../mainImg/movieBack.jpg";
// import "../css/movie.css";
// import "../css/movieComp.css";
// import "../css_mobile/movie_mobile.css";
// import "../css_mobile/movieComp_mobile.css";


const Movie = () => {
  const bennett = useRef();
  const sam = useRef();
  const lasse = useRef();
  const lee = useRef();
  const scrollToSec = (e) => {
    const {target: {value}} = e;
    if (value === "bennett"){
      bennett.current.scrollIntoView({behavior: "smooth"});
    }else if(value === "sam"){
      sam.current.scrollIntoView({behavior: "smooth"});
    } else if(value === "lasse"){
      lasse.current.scrollIntoView({behavior: "smooth"});
    } else if(value === "lee"){
      lee.current.scrollIntoView({behavior: "smooth"});
    }
  };
 
  const scrollToTop= () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    // top.current.scrollIntoView({behavior: "smooth"});
  };
  return(
    <main className="movieBox">
      <img className="movieBack" src={movieBack} alt="background color" />
      <div className="movieNav">
          <button className="movieNavBtn" onClick={scrollToSec} value="bennett">Moneyball<br />.   Bennett Miller</button>
          <button className="movieNavBtn" onClick={scrollToSec} value="sam">1917<br />.   Sam Mendes</button>
          <button className="movieNavBtn" onClick={scrollToSec} value="lasse">What's Eating Gilbert Grape <br />.   Lasse Hallström</button>
          <button className="movieNavBtn" onClick={scrollToSec} value="lee">Burning<br />.   Lee Chang-dong</button>
      </div>
    <div className="movieComp">
      <Bennett scrollToTop={scrollToTop} bennett={bennett}/>
      <Sam scrollToTop={scrollToTop} sam={sam}/>
      <Lasse scrollToTop={scrollToTop} lasse={lasse} />
      <Lee scrollToTop={scrollToTop} lee={lee}/>
    </div>
  </main>
  )
};

export default Movie;