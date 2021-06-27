import React from "react";
import CVImg from "../mainImg/cv.jpg";
import cvBack from "../mainImg/cvBack.jpeg";
// import "../css/cv.css";
// import "../css_mobile/cvs_mobile.css";

const Cv = () => {
  return(
  <main className="cvBox">
    <img className="cvBack" src={cvBack} alt="background color" />
    <div className="cvEmpt">
            
    </div>
    <div className="cvIntr">
      <h2 >
        Kim Youngdong
      </h2>
      <div className="eachIntr">
        <h3>
          Date of birth:    
        </h3>
        <p>
          1995.02.16.
        </p>
      </div>
      <div className="eachIntr">
        <h3>
          Education background:
        </h3>
        <p>
        <span>
          2019 – Present Chung-ang University, Korea (Master’s degree) <br />
          2013 – 2019 Chung-ang University, Korea. <br />
          2010 – 2013 Kaywon Art High School, Korea. <br />
        </span>
        </p>
      </div>
      <div className="eachIntr">
        <h3>
          About work:
        </h3>
        <p>
        <span>
          Since 2018 Kim has been working on the “Question of the Modernity”. There are various media in his works. He works with a Word which is “Find correct media for representing your own thought, Do not use only one media by the inertia.” According to that, he always considers and selects media for his work.
        </span>
        </p>
      </div>
      <div className="eachIntr">
        <h3>
          Group Shows:
        </h3>
        <p>
        <span>
          <br />
          2020 <br /> <br />
          Ask and Answer, ARKO Art Center, Seoul, Korea <br /> <br />
          2019 <br /> <br />
          SEEA2019, Seongnam Art Center, Seongnam, Korea <br /> <br />
          The Rainy Season, Yeongwol Art Center, Yeongwol, Korea <br /> <br />
          HIP-A SEOUL, CICA Museum, Gimpo, Korea <br /> <br />
          The Moment Of The Reflect and Take Off, Seorabol Gallery, Anseong, Korea <br />
        </span>   
        </p>
      </div>
    </div>
    <div className="cvImgBox">
      <img className="cvImg" src={CVImg} alt="hand" />
    </div>
  </main>
  )
};

export default Cv;