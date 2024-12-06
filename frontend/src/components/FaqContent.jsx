import { useState } from "react";

const FaqContent = ({ item }) => {
  const [displayContent, setDisplayContent] = useState(false); // `false` tarkoittaa piilotettua sisällön tilaa

  const handleClick = () => {
    setDisplayContent(!displayContent); // Käännä tilaa
  };

  return (
    <div className="border flex flex-col justify-between w-[600px] px-4 py-4">
      <div className="flex justify-between">
        <p className="font-bold text-
        xl">{item.header}</p>
        <button onClick={handleClick}>
          <i
            className={`fa-solid ${displayContent ? "fa-minus" : "fa-plus"}`}
          ></i>{" "}
          {/* Muuttaa ikonista plus-miinus */}
        </button>
      </div>
      <p
        className={`transition-all duration-200 ease-in max-h-0 overflow-hidden ${
          displayContent ? "max-h-[200px]" : "" // Avaa max-height ja tekee sisällön näkyväksi
        }`}
      >
        {item.content}
      </p>
    </div>
  );
};

export default FaqContent;
