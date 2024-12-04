import { faqLinks } from "../assets/data";
import FaqContent from "./FaqContent";

const FaqContents = () => {
  return (
    <div className="grid justify-center my-10 ">
      {faqLinks.map((item) => {
        return <FaqContent item={item} key={item.id} />;
      })}
    </div>
  );
};

export default FaqContents;
