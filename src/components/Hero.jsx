import React from "react";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className={`md:bg-[url('${hero}')]  bg-center bg-cover bg-no-repeat flex justify-between min-h-[35vh]`}
      id="home"
    >
      
        <h1 className="text-4xl text-fh_beige m-20 lg:mr-60 md:mr-40 max-w-[25vw]" >
          <div
            className=" text-center bg-fh_dgreen-dark bg-opacity-30 rounded-xl
          "
          >
            Korjauta tavarasi edullisesti
            <br />
            Tai
            <br />
            Ansaitse korjaamalla muiden rikkinäisiä tavaroita
          </div>
        </h1>
        <div className="flex items-center ">
        <div className=" text-center mt-4 mx-32 w-[30vh] h-[30vh] text-fh_beige bg-fh_dgreen bg-opacity-30 rounded-xl">
          <h1 className="text-3xl mt-20">BEST</h1>
          <p>most veri nise servise</p>
          <p className="mt-10 text-6xl">*****</p>
          </div>
        </div>
      
    </section>
  );
}

export default Hero;
