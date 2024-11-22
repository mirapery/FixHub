import React from "react";
import { useState, useEffect, useRef } from "react";
import useTags from "./useTags";
import { categoryLinks } from "../data";

const addItem = () => {

};


const NewItem = ({ isOpen, closeNewItem }) => {

    const categories = categoryLinks.map((c) => c.text);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [tag, setTag] = useState("")
    const [description, setDescription] = useState("");


    const { list: tags, addTag, removeTag, resetTags } = useTags([]);


    return (
        isOpen && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-fh_black bg-opacity-50 backdrop-blur-sm"
                onClick={closeNewItem}
            >
                <div
                    className="w-4/5 p-5 bg-fh_beige rounded-lg shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-center ">
                        <h2 className="text-2xl text-fh_black font-bold">Add New Item</h2>
                    </div>

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
                                placeholder="Item Name"
                                className=" w-5/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light"
                                required
                            >
                            </input>
                            <button
                                className=" w-1/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                                onClick={() => {
                                    addTag(tag)
                                    setTag("")
                                }}
                            >
                                Add
                            </button>

                            <div className="w-1/2 flex flex-col items-center align-middle">
                                <label htmlFor="activeTags" className="text-xl text-fh_black-light m-1">Selected tags:</label>
                                <ul className="m-1 flex flex-wrap justify-center">
                                    {tags.map((tag, index) => (
                                        <li key={index} className="m-1  flex flew-row border border-fh_black bg-fh_white-dark rounded-md p-1">
                                            <p className="m-1 text-lg text-fh_dgreen font-bold">
                                                {tag}
                                            </p>
                                            <button
                                                className=" px-4 p-0 border border-fh_black-light m-1 rounded-full text-md bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                                                onClick={() => removeTag(index)}
                                            >
                                                X
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
                            className=" w-full px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                            required
                        />
                    </div>

                    {/* Price range */}
                    <div className="flex flex-col m-2 space-y-2">
                        <label className="text-xl text-fh_black font-bold m-1">Give your price range:</label>

                    </div>

                    {/* Location */}
                    <div className="flex flex-col m-2 space-y-2">
                        <label className="text-xl text-fh_black font-bold m-1">Item Location:</label>

                    </div>


                </div>
            </div>

        )
    )
}


export default NewItem;