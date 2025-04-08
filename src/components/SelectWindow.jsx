import React, { useEffect, useState } from "react";
import Selector from "./Selector";

function SelectWindow(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(props.name);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = props.name.filter((uni) => {
        return uni?.includes(searchTerm);
      });
      setFilteredOptions(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, props.name]);

  return (
    <>
      <div className="w-[269px] h-[40px] rounded-2xl ring-1 ring-custom-blue flex justify-between mt-[13px] mx-auto ">
        <input
          type="text"
          placeholder="جستجو..."
          className="p-2 text-custom-blue outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="src/icons/search-normal.svg"
          alt="search-icon"
          className="w-[14px] h-[14px] ml-4 my-auto"
        />
      </div>
      <div className="mt-3">
        <Selector options={filteredOptions} setPopup={props.setPopup} />
      </div>
    </>
  );
}
export default SelectWindow;
