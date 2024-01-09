import React from 'react';
import "./layout.scss";
import bgImg from "../../assets/bg.png"

const Layout = (props) => {
  return (
    <div className="main_layout">
        <img className="cover-img" src={bgImg} alt="bgimg"></img>
        {props.children || ""}
    </div>
  )
}

export default Layout