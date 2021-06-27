import React from "react";
import {Link} from 'react-router-dom'
import logo from "../mainImg/LOGO.png";
import nameLogo from "../mainImg/studioDETOUR_logo.png";
// import "../css/nav.css";
// import "../css_mobile/nav_mobile.css";


const Navig = () => {
  return(
    <nav className="navBox">
      <div className="navBox_1">
        <div className="navBox_1_parent">
          <Link to="/" className="eachNav">Home</Link>
        </div>
        <div className="navBox_1_parent">
            <Link to="/artwork" className="eachNav">Artwork</Link>
        </div>
        <div className="navBox_1_parent">
          <Link to="/talk_about_good_thing/movie" className="eachNav">Talk about Good things</Link>
            <div className="navBox_1_hide">
                <Link to="/talk_about_good_thing/fine_Art" className="eachNav">Fine Art</Link>
                <Link to="/talk_about_good_thing/movie" className="eachNav">Movie</Link>
            </div>
        </div>
        <div className="navBox_1_parent">
          <Link to="/cv" className="eachNav">CV</Link>
        </div>
      </div>
      <div className="navBox_2">
        <img className="nameLogo" src={nameLogo} alt="name logo" />
      </div>
      <div>
        <img className="navBox_3" src={logo} alt="LOGO" />
      </div>
    </nav>
  )
}



export default Navig;