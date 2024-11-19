import aboutImage from "../assets/images/about.jpg";
import Hero from "./Hero";
import AboutText from "./AboutText";
import FaqContents from "./FaqContents";

import ContactUs from "./ContactUs";
const About = () => {
  return (
    <div>
      <Hero />
      <div className=" my-3 flex flex-col justify-center items-center ">
      <AboutText />
      <FaqContents />
      <ContactUs />
      </div>
    </div>
  );
};
export default About;
