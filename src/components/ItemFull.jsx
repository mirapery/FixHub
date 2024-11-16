import React from "react";
import { useState } from "react";

const ItemFull = ({ itemData }) => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className="bg-fh_beige flex align-middle rounded-md items-center flex-col justify-center min-h-screen w-full">
            <div className="my-6 ">
                <h1 className="text-fh_black font-bold font-serif text-6xl my-2">
                    {itemData.name}
                </h1>
                <p className='font-bold text-fh_black'>
                    {itemData.category}
                </p>
            </div>
            <div className="flex align-middle flex-col md:flex-row w-screen justify-center">
                <div className="flex flex-col items-center my-6">
                    <div className="min-h-80 align-middle">
                        <img
                            src={"src/assets/images/" + itemData.images[currentImage]}
                            alt={itemData.name}
                            className='w-80 h-auto m-4 rounded-md'
                        />
                    </div>
                    <div className="flex m-2">
                        {itemData.images.map((image, index) => {
                            return <img
                                key={index}
                                src={"src/assets/images/" + image}
                                alt={itemData.name + ' ' + index + '-pic-' + 1}
                                onClick={() => setCurrentImage(index)}
                                className='w-32 h-auto hover:brightness-75 hover:cursor-pointer transition duration-300 rounded-md m-2'
                            />
                        })}
                    </div>
                </div>
                <div className="flex flex-col m-8 items-center justify-evenly">
                    <div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Description:
                            </h3>
                            <p className="my-2 text-fh_black min-h-20">
                                {itemData.description}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Offer for fixing:
                            </h3>
                            <p className="my-2 text-fh_black text-lg">
                                {itemData.priceRange}
                            </p>
                            <button className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light drop-shadow-md my-4">
                                Message item owner
                            </button>
                        </div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Location:
                            </h3>
                            <p className="my-2 text-fh_black text-lg">
                                {itemData.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemFull;