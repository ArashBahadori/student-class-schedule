import React, { useState } from "react";

function Selector(props) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (option) => {
    if (selectedItems.includes(option))
      setSelectedItems(selectedItems.filter((items) => items !== option));
    else setSelectedItems([...selectedItems, option]);
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 overflow-y-auto px-4 mt-4 max-h-[330px]">
        <ul className="space-y-7">
          {props.options?.map((option, index) => (
            <li key={index} className="flex justify-between items-center">
              <label className=" text-custom-blue">{option}</label>
              <input
                type="checkbox"
                name="selectOption"
                className="hidden peer"
                value={option}
                id={option}
                checked={selectedItems.includes(option)}
                onChange={() => handleSelect(option)}
              />
              <span
                className="w-4 h-4 border-2 border-custom-blue rounded-full block peer-checked:bg-blue-200 transition-all ml-2 cursor-pointer"
                onClick={() => handleSelect(option)}
              ></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bg-custom-white h-8 mt-90 mr-27">
        <button
          onClick={() => props.setPopup(false)}
          className="bg-custom-white shadow-sm w-[64px] h-[25px] shadow-custom-blue text-custom-blue text-base rounded"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default Selector;
