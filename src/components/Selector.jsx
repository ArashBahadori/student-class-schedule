import React from "react"

function Selector(props){
    return(
        <>
           <div className="flex justify-between items-center">
            <label htmlFor="" className="mr-[20px] text-custom-blue">{props.name}</label>
            <input type="radio"  name="selectOption"  className="ml-[23px] w-4 h-4"/>
           </div>
        </>
    )
}
export default Selector