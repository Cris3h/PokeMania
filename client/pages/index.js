import React from "react";
import Link from "next/link";
import Image from "next/image";
import pokeHeading from "../images/pokeHeading.png";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-image">
        <Image src={pokeHeading} className="image-landing-heading"></Image>
      </div>
      <div className="landing-header">
        <h1> welcome to pokemania! </h1>
      </div>
      <div className="link-landing-container">
        <Link href="/pokemon" className="link-landing">start</Link>
      </div>
    </div>
  );
}

export default Landing;
