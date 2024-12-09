
import Hero from "../components/Hero";
import AboutText from "../components/AboutText";
import FaqContents from "../components/FaqContents";

import ContactUs from "../components/ContactUs";
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
