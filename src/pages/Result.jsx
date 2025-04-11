import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function Result() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/home")
    .then((response) => {
        if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [searchTerm]);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="bg-bg-color w-full h-screen relative">
        <div className="absolute">
          <img
            src="/icons/vector 12.svg"
            alt=""
            className="h-[115.18px] w-[132.75px] opacity-5 relative top-2"
          />
          <img
            src="/icons/vector 9.svg"
            alt=""
            className="h-[115.18px] w-[132.75px] opacity-5 relative right-60 top-20 "
          />
          <img
            src="/icons/vector 10.svg"
            alt=""
            className="h-[115.18px] w-[132.75px] opacity-5 relative top-100 right-15"
          />
          <img
            src="/icons/vector 11.svg"
            alt=""
            className="h-[115.18px] w-[132.75px] opacity-5 relative top-115 right-70"
          />
        </div>
        <div>
          <div className="flex space-x-2 mr-6 pt-16">
            <img
              src="/icons/class-yar.svg"
              alt="class-yar icon"
              className="w-[42px] h-[38px]"
            />
            <h2 className="text-custom-blue text-2xl font-bold">کلاس یار</h2>
          </div>
        </div>
        <div className="h-[50px] w-94 rounded-[31px] flex flex-row mt-[45px] mx-auto  justify-between bg-[#F3F3EE] shadow-slate-600 shadow-sm">
          <input
            type="text"
            placeholder="جستجو..."
            className="mr-5 border-none focus:outline-none 
          placeholder-custom-blue text-[16px] font-[500] placeholder:tracking-[0.4px] z-5"
          />
          <button className="pl-5 size-[50px] hover:cursor-pointer flex flex-row justify-center items-center">
            <img src="/icons\search-normal.svg" className="size-[20px]" />
          </button>
        </div>
        <div className="h-[655px] w-94  bg-[#F3F3EE] shadow-slate-600 shadow-md  mx-auto mt-[20px] rounded-md scale-z-200 overflow-auto">
          <table className="w-90 mx-auto ">
            <thead className="sticky top-0 bg-[#F3F3EE]">
              <tr className=" text-right flex flex-row items-center">
                <th className="py-3 px-4 text-[15px] font-[500] text-custom-blue basis-2/7">
                  نام درس
                </th>
                <th className="py-3 px-4 text-[15px] font-[500] text-custom-blue basis-2/7">
                  نام استاد
                </th>
                <th className="py-3 px-4 text-[15px] font-[500] text-custom-blue basis-2/7">
                  رشته
                </th>
                <th className="py-3 px-4 pt-4 basis-1/7">
                  <img src="/icons/dots.svg" />
                </th>
              </tr>
            </thead>
            <tbody className="*:even:bg-[#F3F3EE] *:odd:bg-bg-color **:truncate *:rounded-[4px]">
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
              <tr className=" text-right flex flex-row items-center justify-center h-[60px]">
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  یبلذرزر
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  دذدددد
                </th>
                <th className="py-3 px-4 text-[15px] font-[450] text-custom-blue basis-2/7">
                  لللغبیقببیب
                </th>
                <th className="basis-1/7 py-2">
                  <button
                    className=" shadow-slate-600 shadow-md  mx-auto h-[20px] w-[37px] rounded-[5px] bg-custom-blue flex flex-row items-center justify-center border border-[#F3F2EE]"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/icons/wDots.svg" />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 bg-black/50 h-dvh w-dvw z-50 ${
            showModal ? "" : "hidden"
          }`}
        >
          <div className="h-[510px] w-88 mt-52 mx-auto flex items-center justify-center rounded-[6px] bg-[#F3F3EE]">
            <div>
              <button onClick={() => setShowModal(false)} className="mt-3">
                <img src="/icons/close.svg" />
              </button>
              <div className="*:odd:bg-[#F3F3EE] *:even:bg-[#EAE8E1]">
                <div className="h-[65px] w-80 rounded-[4px] flex flex-row items-center">
                  <h1 className="text-[16px] font-[700] mr-3 text-custom-blue basis-1/2">
                    نام درس
                  </h1>
                  <h1 className="text-[16px] font-[450] mr-3 text-custom-blue basis-1/2">
                    طراحی الگوریتم
                  </h1>
                </div>
                <div className="h-[65px] w-80 rounded-[4px] flex flex-row items-center">
                  <h1 className="text-[16px] font-[700] mr-3 text-custom-blue basis-1/2">
                    نام استاد
                  </h1>
                  <h1 className="text-[16px] font-[450] mr-3 text-custom-blue basis-1/2">
                    رستمی
                  </h1>
                </div>

                <div className="h-[65px] w-80 rounded-[4px] flex flex-row items-center">
                  <h1 className="text-[16px] font-[700] mr-3 text-custom-blue basis-1/2">
                    کد درس
                  </h1>
                  <h1 className="text-[16px] font-[450] mr-3 text-custom-blue basis-1/2">
                    123456
                  </h1>
                </div>
                <div className="h-[65px] w-80 rounded-[4px] flex flex-row items-center">
                  <h1 className="text-[16px] font-[700] mr-3 text-custom-blue basis-1/2">
                    نام رشته
                  </h1>
                  <h1 className="text-[16px] font-[450] mr-3 text-custom-blue basis-1/2">
                    کامپیوتر
                  </h1>
                </div>
                <div className="h-[65px] w-80 rounded-[4px] flex flex-row items-center">
                  <h1 className="text-[16px] font-[700] mr-3 text-custom-blue basis-1/2">
                    تاریخ
                  </h1>
                  <h1 className="text-[16px] font-[450] mr-3 text-custom-blue basis-1/2">
                    03/12/15
                  </h1>
                </div>
                <div className="h-[65px] w-80 rounded-[4px] flex flex-row items-center">
                  <h1 className="text-[16px] font-[700] mr-3 text-custom-blue basis-1/2">
                    ساعت
                  </h1>
                  <h1 className="text-[16px] font-[450] mr-3 text-custom-blue basis-1/2">
                    15 - 17
                  </h1>
                </div>
                <div className="h-[65px] w-80 rounded-[4px] flex flex-row items-center">
                  <h1 className="text-[16px] font-[700] mr-3 text-custom-blue basis-1/2">
                    وضعیت
                  </h1>
                  <h1 className="text-[16px] font-[450] mr-3 text-custom-blue basis-1/2">
                    لغو شده
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function showCourseDetails(course) {
    alert(`
      کد درس: ${course.courseCode}
      تاریخ: ${course.date}
      ساعت: ${course.time}
      وضعیت: ${course.isActive ? "فعال" : "لغو شده"}
    `);
  }
}
export default Result;
