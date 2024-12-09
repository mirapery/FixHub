import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState(type === "checkbox" ? false : "");
  const onChange = (e) => {
    if (type === "checkbox") {
      setValue(e.target.checked);
    } else {
      setValue(e.target.value);
    }
  };
  return { type, value, onChange };
};
export default useField;
