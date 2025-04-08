import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Loading from "../components/Loading";

function Result() {
  const [isLoading, setIsLoading] = useState(false);

  console.log("loading ...", isLoading);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // setData(response.data); // You can use this to store and show response
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="text-center mt-10 text-xl font-bold text-custom-blue">
      نتیجه با موفقیت دریافت شد
    </div>
  );
}

export default Result;
