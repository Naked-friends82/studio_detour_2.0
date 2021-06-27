import React, { useRef } from "react";
import Hein from "../component/Fineart_hein";
import Barrada from "../component/Fineart_barrada";
import Moon from "../component/Fineart_moon";
import Parr from "../component/Fineart_parr";
import Hirst from "../component/Fineart_hirst";
import fineArtBack from "../mainImg/fineArtBack.jpg";
import "../css/fineArt.css";
import "../css/fineArtComp.css";
import "../css_mobile/fineArt_mobile.css";
import "../css_mobile/fineArtComp_mobile.css";


const FineArt = () => {
  const hein = useRef();
  const barrada = useRef();
  const moon = useRef();
  const parr = useRef();
  const hirst = useRef();
  const scrollToSec = (e) => {
    const {target:{value}} = e;
    if(value === "hein"){
      hein.current.scrollIntoView({ behavior: 'smooth' })
    } else if(value === "barrada"){
      barrada.current.scrollIntoView({ behavior: 'smooth' })
    } else if(value === "moon"){
      moon.current.scrollIntoView({ behavior: 'smooth' })
    } else if(value === "parr"){
      parr.current.scrollIntoView({ behavior: 'smooth' })
    } else if(value === "hirst"){
      hirst.current.scrollIntoView({ behavior: 'smooth' })
    }
  };

  const scrollToTop= () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };
  return(
    <main className="fineArtBox">
      <img className="fineArtBack" src={fineArtBack} alt="background color" />
      <div className="fineArtNav">
          <button className="fineArtNavBtn" onClick={scrollToSec} value="hein" >All Your Wishes(2020)<br />.  Jeppe Hein</button>
          <button className="fineArtNavBtn" onClick={scrollToSec} value="barrada" >Palissade de Chantier(2009)<br />.   Yto Barrada</button>
          <button className="fineArtNavBtn" onClick={scrollToSec} value="moon" >Beautiful, Strange, Dirty (2019)<br />.   Sungsic Moon</button>
          <button className="fineArtNavBtn" onClick={scrollToSec} value="parr" >Life is a Beach(2013)<br />.   Martin Parr</button>
          <button className="fineArtNavBtn" onClick={scrollToSec} value="hirst" >In and Out of Love(1991)<br />.   Damien Hirst</button>
      </div>
      <div className="fineArtComp">
        <Hein  scrollToTop={scrollToTop} hein={hein} />
        <Barrada scrollToTop={scrollToTop} barrada={barrada} />
        <Moon scrollToTop={scrollToTop} moon={moon} />
        <Parr scrollToTop={scrollToTop} parr={parr} />
        <Hirst scrollToTop={scrollToTop} hirst={hirst}/>
      </div>
    </main>
  )
};

export default FineArt;