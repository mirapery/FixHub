import { faqLinks } from "../data";

import FaqContent from "./FaqContent";
const About = () => {
  return (
    <>
      <div className="grid justify-center my-10 ">
        
        {faqLinks.map((item) => {
          return <FaqContent item = {item} key = {item.id}/>

        })}
      </div>
    </>
  );
};
export default About;
