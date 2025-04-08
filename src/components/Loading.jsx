import React from "react";

function Loading() {
  return (
    <>
      <div className="bg-bg-color w-full h-screen">
        <div>
          <img
            src="src/icons/vector 12.svg"
            alt=""
            className="h-[115.18px] w-[132.75px] opacity-5 relative top-2"
          />
          <img
            src="src/icons/vector 9.svg"
            alt=""
            className="h-[115.18px] w-[132.75px] opacity-5 relative right-60 top-20 "
          />
          <img
            src="src/icons/vector 10.svg"
            alt=""
            className="h-[115.18px] w-[132.75px] opacity-5 relative top-100 right-15"
          />
          <img
            src="src/icons/vector 11.svg"
            alt=""
            className="h-[115.18px] w-[132.75px] opacity-5 relative top-115 right-70"
          />
        </div>
        <div className="grid place-items-center gap-10 relative bottom-28">
          <p className="text-xl text-custom-blue">
            لطفا چند لحظه منتظر بمانید...
          </p>
          <img
            src="src/icons/up.svg"
            alt="loading icon"
            className="animate-spin"
          />
        </div>
      </div>
    </>
  );
}
export default Loading;
