import React, { useState } from "react";
import mainBack from "../mainImg/background.png";
import mainImg1 from "../mainImg/mainImage2_1.webp";
import mainImg2 from "../mainImg/mainImage3.webp";
import "../css/main.css";
import "../css_mobile/main_mobile.css";

const Main = () => {
  const [main, setMain] = useState(false);

  const changeMain = () => {
    setMain((prev) => !prev);
  };

  return(
    <main className="mainBox">
      {/* <div className="hello typo1">Hello this is typo Test plese say anything</div>
      <div className="hello typo2">Hello this is typo Test plese say anything</div>
      <div className="hello typo3">Hello this is typo Test plese say anything</div>
      <div className="hello typo4">Hello this is typo Test plese say anything</div>
      <div className="hello typo5">Hello this is typo Test plese say anything</div>
      <div className="hello typo6">Hello this is typo Test plese say anything</div>
      <div className="hello typo7">Hello this is typo Test plese say anything</div>
      <div className="hello typo8">Hello this is typo Test plese say anything</div> */}
      <img className="mainBack" src={mainBack} alt="background" />
      {main ? (
        <img className="mainImg" onClick={changeMain} src={mainImg2} alt="Detour sign in the road" />
      ):(
      <img className="mainImg" onClick={changeMain} src={mainImg1} alt="Detour sign in the road" />
      )}
      <div className="copy">
        Copyright© 2020. Kim Young Dong.  All rights reserved.
      </div>
    </main>
  )
};

export default Main;