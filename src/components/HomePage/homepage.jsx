import React from "react";
import video from "../video/New Look.mp4";
import Card from "../card/card";
import style from "./homepage.module.css";
import Footer from "../footer/footer";

function Homepage() {
  return (
    <div className={style.home}>
      <video src={video} className={`${style.video} ${style.homeVideo}`} autoPlay loop />
      <Card />
      <Footer/>
    </div>
  );
}

export default Homepage;
