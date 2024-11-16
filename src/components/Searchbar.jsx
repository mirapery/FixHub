import vehicle from "../assets/images/vehicles.png";
import clothes from "../assets/images/clothes.png";
import furnitures from "../assets/images/furnitures.png";
import electronics from "../assets/images/electronics.png";
import guitar from "../assets/images/guitar.png";
import sports from "../assets/images/sports.png";

function Searchbar() {
  return (
    <div className="flex justify-center m-4">
      <div className="w-2/3">
      <div className=" flex border-gray-900 rounded border-2">
        <input
            className="w-full p-4  focus:outline-none"

          type="text"
          placeholder="Search item"
        />
<button className=" bg-white
"> <i className=" mr-3 fa-solid fa-magnifying-glass scale-150"></i></button>
        </div>
        
        
        

        <div className="flex  justify-center mt-4">
          <ul className="flex justify-center w-full gap-6">
            <li className="flex flex-col items-center mx-6 hover:opacity-50">
              <img
                src={sports}
                className="w-1/3 h-auto"
                alt="Hobby accessories"
              />
              <p className="text-center   mt-2">Hobby accessories</p>
            </li>
            <li className="flex flex-col items-center mx-6 hover:opacity-50">
              <img
                src={clothes}
                className="w-1/3 h-auto"
                alt="Clothes and accessories"
              />
              <p className="text-center mt-2">Clothes and accessories</p>
            </li>
            <li className="flex flex-col items-center mx-6 hover:opacity-50">
              <img
                src={furnitures}
                className="w-1/3 h-auto"
                alt="Furniture and decoration"
              />
              <p className="text-center mt-2">Furniture and decoration</p>
            </li>
            <li className="flex flex-col items-center mx-6 hover:opacity-50">
              <img
                src={electronics}
                className="w-1/3 h-auto"
                alt="Electronics and household appliances"
              />
              <p className="text-center mt-2">
                Electronics and household appliances
              </p>
            </li>
            <li className="flex flex-col items-center mx-6 hover:opacity-50">
              <img src={vehicle} className="w-1/3 h-auto" alt="Vehicles" />
              <p className="text-center mt-2">Vehicles</p>
            </li>
            <li className="flex flex-col items-center mx-6 hover:opacity-50">
              <img src={guitar} className="w-1/3 h-auto" alt="Instruments" />
              <p className="text-center mt-2">Instruments</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
