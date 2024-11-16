
import React from "react";
import styles from "./Hero.module.css"; // Import the CSS module

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className= "flex text-center ">
        <h1 className="text-4xl text-fh_beige left-20 top-20">
        Get Your Items Repaired Easily For the Best Price 
        <br/>or<br/> Fix Someone
        Else's Broken Items and Earn Money
        </h1>
        <div className="ml-60  w-[30vh] h-[30vh] text-fh_beige bg-fh_dgreen bg-opacity-20 rounded-xl"> <h1 className="text-3xl mt-7">
          BEST
        </h1>
        <p>
          most veri nise servise
        </p>
        <p className="mt-10 text-6xl">*****</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
