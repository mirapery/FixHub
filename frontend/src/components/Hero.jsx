import React from "react";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className={`bg-[url('${hero}')] items-center  bg-center bg-cover bg-no-repeat flex justify-between h-[35vh]`}
      id="home"
    >
      
          <div
            className=" flex text-center items-center  bg-fh_dgreen-dark   bg-opacity-30 h-full md:h-auto rounded-md md:m-20 lg:mr-60 md:mr-40  
          "
          >
        <h1 className="text-4xl text-fh_beige  " >
            Korjauta tavarasi edullisesti
            <br />
            Tai
            <br />
            Ansaitse korjaamalla muiden rikkinäisiä tavaroita
        </h1>
          </div>
        <div className="hidden md:flex items-center text-center  ">
        <div className="  w-[30vh] h-[30vh] text-fh_beige bg-fh_dgreen bg-opacity-30 rounded-xl">
          <h1 className="text-3xl">BEST</h1>
          <p>most veri nise servise</p>
          <p className="mt-10 text-6xl">*****</p>
          </div>
        </div>
      
    </section>
  );
}

export default Hero;
