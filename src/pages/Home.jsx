import React, { useState } from "react";
import Select from "../components/Select";
import SelectWindow from "../components/SelectWindow";

function Home() {
  const [uni, setUni] = useState(false); 
  const onClickuni = () => {
    setUni(true);
  };
  const [major, setMajor] = useState(false);
  const onClickmajor = () => {
    setMajor(true);
  };
  const [professor, setProfessor] = useState(false);
  const onClickprofessor = () => {
    setProfessor(true);
  };
  const [course, setCourse] = useState(false);
  const onClickcourse = () => {
    setCourse(true);
  };
  const universities = [
    "خلیج فارس ",
    "تهران",
    "شیراز ",
   "اصفهان",
    "صنعتی شریف",
    "علم و صنعت ایران",
    "صنعتی امیرکبیر",
    "شهید بهشتی",
    "شیراز",
    "فردوسی مشهد",
    "تبریز",
    "صنعتی اصفهان",
    "علامه طباطبایی",
    "خواجه نصیرالدین طوسی",
    "بوعلی سینا",
    "گیلان",
    "مازندران",
    "الزهرا",
    "یزد",
    "رازی کرمانشاه",
    "چمران اهواز",
    "زنجان",
    "کردستان",

  ];
  const majors = ["کامپیوتر", "مکانیک", "شیمی", "عمران", "دریا", "معماری", "شهرسازی", "نفت"];
  const courses = ["طراحی الگوریتم", "ساختمان داده", "مدار منطقی", "داده کاوی", "معماری کامپیوتر", "سیستم عامل", "شبکه", "نظریه زبان ها و ماشین"];
  const professors = ["گل حبیب", "گل سعید", " گل ابی", "بانو رضوان", "عمو سجاد", "دویی امین"];

  return (
    <>
      <div className="bg-bg-color w-full h-screen">
        <div className="absolute">
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
        <div>
          <div className="flex space-x-2 mr-6 pt-16">
            <img
              src="src/icons/class-yar.svg"
              alt="class-yar icon"
              className="w-[42px] h-[38px]"
            />
            <h2 className="text-custom-blue text-2xl font-bold">کلاس یار</h2>
          </div>
          <p className="text-custom-blue  text-lg font-bold w-[320px] mx-auto mt-10">
            فیلد های مورد نظر را برای فیلتر کردن انتخاب کنید:
          </p>
        </div>
        <img
          src="src/icons/Rectangle 35.svg"
          alt="linear-gradient"
          className="mx-auto mt-10"
        />
        <div>
          <Select
            icon="src/icons/hugeicons_university.svg"
            name="نام دانشگاه"
            onClick={onClickuni}
          />

          {uni && (
            <div className="fixed inset-0 flex justify-center items-center ">
              <div className="bg-custom-white  rounded-lg shadow-lg w-[283px] h-[463px]">
                <SelectWindow
                  name={universities}
                  setPopup={setUni}
                />
              </div>
            </div>
          )}

          <Select
            icon="src/icons/ph_graduation-cap-light.svg"
            name="نام رشته"
            onClick={onClickmajor}
          />
          {major && (
            <div className="fixed inset-0 flex justify-center items-center">
              <div className="bg-custom-white  rounded-lg shadow-lg w-[283px] h-[463px]">
                <SelectWindow name={majors} setPopup={setMajor} />
              </div>
            </div>
          )}
          <Select
            icon="src/icons/emojione-monotone_orange-book.svg"
            name="نام درس"
            onClick={onClickcourse}
          />
          {course && (
            <div className="fixed inset-0 flex justify-center items-center ">
              <div className="bg-custom-white  rounded-lg shadow-lg w-[283px] h-[463px]">
                <SelectWindow
                  name={courses}
                  setPopup={setCourse}
                />
              </div>
            </div>
          )}
          <Select icon="src/icons/hugeicons_teacher.svg" name="نام استاد" onClick={onClickprofessor} />
          {professor && (
            <div className="fixed inset-0 flex justify-center items-center ">
              <div className="bg-custom-white  rounded-lg shadow-lg w-[283px] h-[463px]">
                <SelectWindow
                  name={professors}
                  setPopup={setProfessor}
                />
              </div>
            </div>
          )}
          <Select icon="src/icons/clarity_date-line.svg" name="تاریخ" />
        </div>
        <img
          src="src/icons/Rectangle 35.svg"
          alt="linear-gradient"
          className="mx-auto mt-10"
        />
        <div className="flex justify-center">
          <button className="bg-custom-white text-custom-blue w-[161px] h-[44px] mt-15 shadow-sm shadow-custom-blue border border-custom-blue rounded-md font-bold">
            جستجو
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
