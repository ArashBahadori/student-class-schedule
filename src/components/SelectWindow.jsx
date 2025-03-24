import React from "react";
import Selector from "./Selector";

function SelectWindow(props) {
  return (
    <>
      <div className="w-[269px] h-[40px] rounded-2xl ring-1 ring-custom-blue flex justify-between mt-[13px] mx-auto ">
        <input
          type="text"
          placeholder="جستجو..."
          className="p-2 text-custom-blue outline-none"
        />
        <img
          src="src/icons/search-normal.svg"
          alt="search-icon"
          className="w-3.5 h-3.5 ml-4 my-auto"
        />
      </div>
      <div className="mt-7">
        <Selector name= {props.name}/>
      </div>
    </>
  );
}
export default SelectWindow;
