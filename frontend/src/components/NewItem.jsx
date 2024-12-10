import React, {  useState } from "react";
import useTags from "../hooks/useTags";
import { categoryLinks } from "../assets/data";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";


const NewItem = ({ isOpen, setIsNewItemOpen }) => {
  const categories = categoryLinks.map((c) => c.text);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const { list: tags, addTag, removeTag, resetTags, addTagList } = useTags([]);
  const [description, setDescription] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [images, setImages] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState([]);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const openAlert = () => {
    setIsAlertOpen(true);
    console.log("alert open");
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
    setAlertMessage([]);
  };

  // for number fields, allows only numbers
  const handleNumberChange = (e, setter) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");
    setter(sanitizedValue);
  };

  const validatePriceRange = () => {
    if (priceFrom && priceTo && parseInt(priceTo) < parseInt(priceFrom)) {
      //alert('"To" price must be greater than or equal to "From" price.');
      return false;
    }
    return true;
  };

  // check image type
  const handleFileChange = (e) => {
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
    const files = Array.from(e.target.files);

    const validFiles = files.filter((file) => {
      if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
        setError("Only JPG and PNG images are allowed.");
        return false;
      }

      if (file.size > maxSizeInBytes) {
        setError(
          `File size should not exceed ${maxSizeInBytes / (1024 * 1024)} MB.`
        );
        return false;
      }

      return true;
    });

    if (validFiles.length === 0) return; // Stop if no valid files

    // Limit the number of images
    const newImages = validFiles.slice(0, 4 - images.length);
    if (newImages.length < validFiles.length) {
      setError(`You can upload up to 4 images only.`);
    }

    // Rename images
    const renamedFiles = newImages.map((file, index) => {
      const timestamp = Date.now();
      const newFileName = `image_${timestamp}_${index + 1}.${file.name
        .split(".")
        .pop()}`; //tähän alkuun vielä itemin id sit jostain
      return new File([file], newFileName, { type: file.type });
    });

    // Update images
    setImages((prev) => [...prev, ...renamedFiles]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // for selecting main image
  const moveImageToFirst = (index) => {
    // itemdata modaus
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      const [selectedImage] = updatedImages.splice(index, 1);
      updatedImages.unshift(selectedImage);
      return updatedImages;
    });
  };

  // for alerts
  const showAlert = (type, msg) => {
    setAlertConfig({ isVisible: true, message: msg, alertType: type });

    setTimeout(() => {
      setAlertConfig({ ...alertConfig, isVisible: false });
    }, 3000);
  };

  // form submit
  const addItem = async () => {
    if (
      !name ||
      !category ||
      !description ||
      !postalCode ||
      !city ||
      !validatePriceRange()
    ) {
      setAlertMessage((prev) => {
        const newMessages = [];
        if (!name) newMessages.push("Item must have a Name!");
        if (!category) newMessages.push("Item must have a Category");
        if (!description) newMessages.push("Please add a Description of the item.");
        if (!postalCode) newMessages.push("Please add the location of your item.");
        if (!city || !postalCode) newMessages.push("Please add the address info.");
        if (!validatePriceRange())
          newMessages.push('"To" price must be greater than or equal to "From" price.');
        return [...prev, ...newMessages];
      });
  
      openAlert();
      return;
    }
  
    const newItem = new FormData();
  
    // Append primitive values
    newItem.append("userId", user._id);
    newItem.append("name", name);
    newItem.append("tags", JSON.stringify(tags)); // Convert tags array to JSON string
    newItem.append("description", description);
    newItem.append("category", category);
  
    // Append nested object
    newItem.append("location", JSON.stringify({ province, city, postalCode }));
  
    // Append array
    newItem.append("priceRange", JSON.stringify([priceFrom, priceTo]));
  
    // Append images
    images.forEach((file) => {
      newItem.append("images", file); // Append files under the "images" key
    });
  
    // Append other fields
    newItem.append("isFixed", false);
    newItem.append("interested", 0);
  
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      const response = await fetch("/api/items", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: newItem,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const addedItem = await response.json();
      console.log("Item added:", addedItem);
      navigate(`/item/${addedItem._id}`);
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item");
    }
  
    clearItem();
  };

  // clear fields and images
  const clearItem = () => {
    setName("");
    resetTags();
    setDescription("");
    setCategory("");
    setPostalCode("");
    setPriceFrom("");
    setPriceTo("");
    setImages([]);
    setCity("");
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-fh_black bg-opacity-50 backdrop-blur-sm "
        onClick={() => setIsNewItemOpen(false)}
      >
        <Alert
          isOpen={isAlertOpen}
          closeAlert={closeAlert}
          message={alertMessage}
        />
        <div
          className="w-4/5 p-5 bg-fh_beige rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-0 right-0 m-4 bg-fh_white rounded-full border border-fh_black px-2 hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
            onClick={() => setIsNewItemOpen(false)}
          >
            <i className="fa-solid fa-xmark text-3xl text-fh_black"></i>
          </button>

          <div className="flex items-center justify-center ">
            <h2 className="text-2xl text-fh_black font-bold">Add New Item</h2>
          </div>

          <div className="flex flex-row m-2">
            {/* Kuvan lisääminen */}
            <div className="flex flex-col m-2 w-1/2">
              <div className="flex flex-col m-2 space-y-2">
                <label
                  htmlFor="itemName"
                  className="text-xl text-fh_black font-bold m-1"
                >
                  Add images (max 4):
                </label>

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
                  onClick={() => document.getElementById("fileInput").click()} // Trigger file input click
                >
                  Choose Files
                </button>

                {error && (
                  <p className="text-lg text-fh_red font-bold m-1">{error}</p>
                )}
                <div className="flex flex-col items-center my-6">
                  <label
                    htmlFor="itemName"
                    className="text-xl text-fh_black font-bold m-1"
                  >
                    Main image:
                  </label>

                  <div className="min-h-80 align-middle">
                    {/*|| itemData tämä otettu pois images[0] jälkeen*/}

                    {images[0] && (
                      <img
                        src={URL.createObjectURL(images[0])}
                        alt={`preview-main`}
                        className="w-80 h-auto m-4 rounded-md"
                      />
                    )}
                  </div>

                  <label
                    htmlFor="itemName"
                    className="text-xl text-fh_black font-bold m-1"
                  >
                    Additional images:
                  </label>

                  <div className="">
                    {images.map((image, index) => {
                      if (index === 0) {
                        return;
                      }
                      return (
                        <div
                          key={index}
                          className="justify-center inline-block m-2"
                        >
                          <div className="flex w-32 h-32 items-center justify-center">
                            <img
                              src={URL.createObjectURL(image)}
                              className="max-w-32 max-h-32 h-auto w-auto hover:brightness-75 mb-1 hover:cursor-pointer transition duration-300 rounded-md m-2"
                              onClick={() => moveImageToFirst(index)}
                            />
                          </div>
                          <div className=" flex w-32 p-0 mt-2 border items-center justify-center border-fh_black-light rounded-md text-md bg-fh_white-dark hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95">
                            <button onClick={() => removeImage(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Muut kentät */}
            <div className="flex flex-col m-2 w-1/2">
              {/* Name Field*/}
              <div className="flex flex-col m-2 space-y-2">
                <label
                  htmlFor="itemName"
                  className="text-xl text-fh_black font-bold m-1"
                >
                  Item Name:
                </label>

                <input
                  type="text"
                  //name="name"
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
                <label
                  htmlFor="category"
                  className="text-xl text-fh_black font-bold m-1"
                >
                  Choose Category:
                </label>
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
                  ))}
                  ;
                </select>
              </div>

              {/* Tags 
                            - rajoita kentän merkkimäärä ja rajaa yhteen sanaan
                            - estä sama tagi
                            */}
              <div className="flex flex-col m-2 space-y-2">
                <label
                  htmlFor="itemTags"
                  className="text-xl text-fh_black font-bold m-1"
                >
                  Add Tags:
                </label>
                <div className="flex flex-row mx-1">
                  <input
                    type="text"
                    //name="name"
                    id="itemTags"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="Give new tag:"
                    className=" w-5/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light"
                    required
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addTag(tag);
                        setTag("");
                      }
                    }}
                  ></input>
                  <button
                    className="  h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                    onClick={() => {
                      addTag(tag);
                      setTag("");
                    }}
                  >
                    Add
                  </button>

                  <div className="w-1/2 flex flex-col items-center align-middle">
                    <label className="text-xl text-fh_black-light m-1">
                      Selected tags:
                    </label>
                    <ul className="m-1 w-1/2 flex flex-wrap justify-center">
                      {tags.map((tag, index) => (
                        <li
                          key={index}
                          className="m-1  flex flew-row border border-fh_black bg-fh_white rounded-md p-1"
                        >
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
                <label
                  htmlFor="itemDescription"
                  className="text-xl text-fh_black font-bold m-1"
                >
                  Description of the Item:
                </label>
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

              {/* Price range */}
              <div className="flex flex-col m-2 space-y-2">
                <label className="text-xl text-fh_black font-bold m-1">
                  Give your price range:
                </label>
                <div className="flex flex-row m-2">
                  <label className="flex items-center w-1/12 text-xl text-fh_black-light m-2">
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
                    className="w-1/3 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                  />

                  <label className="flex items-center w-1/12 text-xl text-fh_black-light m-2">
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
                    className="w-1/3  h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                  />

                  <label className="flex items-center w-1/12 text-xl text-fh_black-light m-2">
                    €
                  </label>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col m-2 space-y-2">
                <label className="text-xl text-fh_black font-bold m-1">
                  Item Location:
                </label>

                <div className="flex flex-row m-2">
                  <label className="w-1/5 flex items-center text-xl text-fh_black-light m-2">
                    Postal Code:
                  </label>
                  <input
                    type="text"
                    name="postalcode"
                    id="postalCode"
                    value={postalCode}
                    onChange={(e) => {
                      handleNumberChange(e, setPostalCode);

                      setCity("");
                    }}
                    placeholder="Postal Code"
                    maxLength={5}
                    className=" w-3/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                    required
                  />

                  <label className="w-1/5 flex items-center text-xl text-fh_black-light m-2">
                    Province
                  </label>
                  <input
                    type="text"
                    name="province"
                    id="province"
                    value={province}
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                    placeholder="City"
                    className=" w-3/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                    required
                  />

                  <label className="w-1/5 flex items-center text-xl text-fh_black-light m-2">
                    City:
                  </label>
                  <input
                    type="text"
                    name="postalcode"
                    id="postalCode"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    placeholder="City"
                    className=" w-3/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light invalid:border-fh_yellow"
                    required
                  />
                </div>
              </div>

              {/* Varmistusnapit */}
              <div className="flex flex-row justify-evenly mt-4">
                <div className=" w-1/5 flex flex-col m-2">
                  <button
                    className=" w-full px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                    onClick={() => addItem()}
                  >
                    "Add item"
                  </button>
                </div>
                <div className="w-1/5 flex flex-col m-2">
                  <button
                    className=" w-full px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                    onClick={() => clearItem()}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default NewItem;
