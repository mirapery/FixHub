import { useState } from "react";

const useTags = (initialList = []) => {

    const [list, setList] = useState(initialList);

    const addTag = (t) => {
        setList((prevList) => [...prevList, t]);
    }

    const removeTag = (index) => {
        setList((prevList) => prevList.filter((_, i) => i !== index));
    }

    const resetTags = () => {
        setList([]);
    }

    const addTagList = (t) => {
        list.forEach(() => {addTag(t)});
    }

    return { list, addTag, removeTag, resetTags, addTagList };
}

export default useTags;