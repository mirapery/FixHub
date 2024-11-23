import React from "react";
import { useState, useEffect, useRef } from "react";
import useTags from "./useTags";
import { categoryLinks } from "../data";
import datasetsFiPostalcodes from "datasets-fi-postalcodes";

const addItem = () => {

};


const NewItem = ({ isOpen, closeNewItem }) => {

    const categories = categoryLinks.map((c) => c.text);
    const postalCodes = datasetsFiPostalcodes;

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [tag, setTag] = useState("")
    const { list: tags, addTag, removeTag, resetTags } = useTags([]);
    const [description, setDescription] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [images, setImages] = useState([]);


    const [error, setError] = useState('');

    const numberRegex = /^\d+$/;

    const handleNumberChange = (e, setter, compareValue, compareSetter) => {
        const inputValue = e.target.value;

        const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
        setter(sanitizedValue);
    }

    const validatePriceRange = () => {
        if (priceFrom && priceTo && parseInt(priceTo) < parseInt(priceFrom)) {
            alert('"To" price must be greater than or equal to "From" price.');
            return false;
        }
        return true;
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const validFiles = files.filter((file) =>
            ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)
        );

        if (validFiles.length !== files.length) {
            setError('Only JPG and PNG images are allowed.');
        } else {
            setError('');
        }

        // Limit the total number of images
        const newImages = validFiles.slice(0, 5 - images.length);
        setImages((prev) => [...prev, ...newImages]);
    };

    const removeImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    // const handleSubmit = () => {
    //     const formData = new FormData();
    //     images.forEach((image, i) => {
    //         formData.append(`image${i}`, image);
    //     });

    //     // Make a POST request to upload images
    //     fetch('/api/upload-images', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.error('Error:', error));



    return (
        isOpen && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-fh_black bg-opacity-50 backdrop-blur-sm"
                onClick={closeNewItem}
            >
                <div
                    className="w-4/5 p-5 bg-fh_beige rounded-lg shadow-lg overflow-y-auto max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-center ">
                        <h2 className="text-2xl text-fh_black font-bold">Add New Item</h2>
                    </div>

                    <div className="flex flex-row m-2">

                        {/* Kuvan lisääminen */}
                        <div className="flex flex-col m-2 w-1/2">
                            <div className="flex flex-col m-2 space-y-2">

                                <label htmlFor="itemName" className="text-xl text-fh_black font-bold m-1">Add images:</label>


                                <input
                                    type="file"
                                    accept="image/*"
                                    id="fileInput"
                                    className="hidden"
                                    multiple
                                    onChange={handleFileChange}
                                />

                                <button
                                    className="px-4 py-2 border border-fh_dgreen rounded-lg bg-fh_white text-xl hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                                    onClick={() => document.getElementById('fileInput').click()} // Trigger file input click
                                >
                                    Choose Files
                                </button>

                                {error && <p className="text-lg text-fh_red font-bold m-1">{error}</p>}
                                <div>
                                    {images.map((image, index) => (
                                        <div key={index} style={{ display: 'inline-block', margin: '10px' }}>
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={`preview-${index}`}
                                                className='w-32 h-auto hover:brightness-75 hover:cursor-pointer transition duration-300 rounded-md m-2'
                                            />
                                            <div className=" flex w-32 p-0 border items-center justify-center border-fh_black-light m-2 rounded-md text-md bg-fh_white-dark hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                                            >
                                                <button

                                                    onClick={() => removeImage(index)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Muut kentät */}
                        <div className="flex flex-col m-2 w-1/2">

                            {/* Name Field*/}
                            <div className="flex flex-col m-2 space-y-2">
                                <label htmlFor="itemName" className="text-xl text-fh_black font-bold m-1">Item Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="itemName"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Item Name"
                                    className=" w-full h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div className="flex flex-col m-2 space-y-2">
                                <label htmlFor="category" className="text-xl text-fh_black font-bold m-1">Choose Category:</label>
                                <select
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className=" w-full h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                                >
                                    <option value="" disabled>
                                        Choose Category:
                                    </option>
                                    {categories.map((c, index) => (
                                        <option key={index} value={c}>
                                            {c}
                                        </option>
                                    ))};


                                </select>
                            </div>

                            {/* Tags 
                    - rajoita kentän merkkimäärä
                    - estä sama tagi
                    */}
                            <div className="flex flex-col m-2 space-y-2">
                                <label htmlFor="itemTags" className="text-xl text-fh_black font-bold m-1">Add Tags:</label>
                                <div className="flex flex-row mx-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="itemTags"
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
                                        placeholder="Give new tag:"
                                        className=" w-5/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light"
                                        required
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                addTag(tag)
                                                setTag("")
                                            }
                                        }}
                                    >
                                    </input>
                                    <button
                                        className="  h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                                        onClick={() => {
                                            addTag(tag)
                                            setTag("")
                                        }}
                                    >
                                        Add
                                    </button>

                                    <div className="w-1/2 flex flex-col items-center align-middle">
                                        <label className="text-xl text-fh_black-light m-1">Selected tags:</label>
                                        <ul className="m-1 w-1/2 flex flex-wrap justify-center">
                                            {tags.map((tag, index) => (
                                                <li key={index} className="m-1  flex flew-row border border-fh_black bg-fh_white rounded-md p-1">
                                                    <p className="my-1 mx-2 text-lg text-fh_dgreen font-bold">
                                                        {tag}
                                                    </p>
                                                    <button
                                                        className="w-7 p-0 border border-fh_black-light m-1 rounded-full text-md bg-fh_white-dark hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                                                        onClick={() => removeTag(index)}
                                                    >
                                                        <i className="fa-solid fa-xmark"></i>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col m-2 space-y-2">
                                <label htmlFor="itemDescription" className="text-xl text-fh_black font-bold m-1">Description of the Item:</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="itemDescription"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Describe what is wrong with the item. Give as much details as possible!"
                                    className=" w-full px-4 min-h-12 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                                    required
                                />
                            </div>

                            {/* Price range 
                    - halutaanko määritellä ylärajaa?
                    */}
                            <div className="flex flex-col m-2 space-y-2">
                                <label className="text-xl text-fh_black font-bold m-1">Give your price range:</label>
                                <div className="flex flex-row m-2">
                                    <label
                                        className="flex items-center w-1/12 text-xl text-fh_black-light m-2"
                                    >
                                        From:
                                    </label>
                                    <input
                                        type="text"
                                        name="from"
                                        id="priceFrom"
                                        value={priceFrom}
                                        onChange={(e) => handleNumberChange(e, setPriceFrom)}
                                        placeholder="0"
                                        maxLength={6}
                                        className=" w-1/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                                    />
                                    <label
                                        className="flex items-center w-1/12 text-xl text-fh_black-light m-2"
                                    >
                                        To:
                                    </label>
                                    <input
                                        type="text"
                                        name="to"
                                        id="priceTo"
                                        value={priceTo}
                                        onChange={(e) => handleNumberChange(e, setPriceTo)}
                                        placeholder="-"
                                        maxLength={6}
                                        className=" w-1/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                                    />
                                    <label
                                        className="flex items-center w-1/12 text-xl text-fh_black-light m-2"
                                    >
                                        €
                                    </label>
                                </div>

                            </div>

                            {/* Location */}
                            <div className="flex flex-col m-2 space-y-2">
                                <label className="text-xl text-fh_black font-bold m-1">Item Location:</label>
                                <div className="flex flex-row m-2">
                                    <label className="flex items-center text-xl text-fh_black-light m-2">
                                        Postal Code:
                                    </label>
                                    <input
                                        type="text"
                                        name="postalcode"
                                        id="postalCode"
                                        value={postalCode}
                                        onChange={(e) => handleNumberChange(e, setPostalCode)}
                                        placeholder="Postal Code"
                                        maxLength={5}
                                        className=" w-2/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                                        required
                                    />

                                    <div className="w-1/2 flex items-center align-middle justify-center text-xl text-fh_dgreen m-2">
                                        {postalCodes[postalCode] ? (postalCode + ', ' + postalCodes[postalCode]) : ''}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}


export default NewItem;