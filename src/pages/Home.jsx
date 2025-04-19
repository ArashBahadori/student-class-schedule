import { useEffect, useState } from "react";
import Select from "../components/Select";
import SelectWindow from "../components/SelectWindow";
import { useNavigate } from "react-router-dom";
import React from "react";
import Calendar from "../components/Calender";
import axios from "axios";
import Loading from "../components/Loading";

function Home({ fadeIn }) {
  const icons = {
    uni: "/icons/hugeicons_university.svg",
    major: "/icons/ph_graduation-cap-light.svg",
    course: "/icons/emojione-monotone_orange-book.svg",
    professor: "/icons/hugeicons_teacher.svg",
  };

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [popupType, setPopupType] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedItems, setSelectedItems] = useState({
    uni: [],
    major: [],
    course: [],
    professor: [],
  });
  const [data, setData] = useState({
    uni: [],
    major: [],
    course: [],
    professor: [],
  });
  const names = {
    uni: "نام دانشگاه",
    major: "نام رشته",
    course: "نام درس",
    professor: "نام استاد",
  };
  const handleSelectedItems = () => {
    const selectedItemsToSend = {};
    Object.keys(selectedItems).forEach((item) => {
      if (selectedItems[item].length == 0) {
        const error = setTimeout(() => {
          setError("پر کردن فیلد ها الزامی است");
        }, 2000);
        clearTimeout(error);
      }
      if (selectedItems[item] && selectedItems[item].length > 0) {
        selectedItemsToSend[item] = selectedItems[item];
      }
    });
    return selectedItemsToSend;
  };
  const handleSearch = async () => {
    const newSelected = { ...selectedItems };
    newSelected.university = selectedItems.uni;
    newSelected.courseName = selectedItems.course;
    newSelected.courseProf = selectedItems.professor;
    delete newSelected.uni;
    delete newSelected.course;
    delete newSelected.professor;

    // const selected = handleSelectedItems();

    let test = "";
    for (let key in newSelected) {
      if (newSelected[key].length == 0) {
        continue;
      }
      let query = key + "=";

      newSelected[key].map((selected) => {
        query += selected + ",";
      });
      test += query + "&";
    }

    // const query = new URLSearchParams();
    // console.log({query});

    // Object.entries(selected).forEach(([key, values]) => {
    //   values.forEach((val) => query.append(key, val));
    // });
    // console.log({query});

    try {
      setIsLoading(true);
      const response = await axios.get(`/api/home?${test.toString()}`);
      setIsLoading(false);
      navigate("/result", { state: { filteredData: response.data } });
    } catch (error) {
      console.error("Error sending filters:", error);
    }
  };

  useEffect(() => {
    axios
      .get("/api/home")
      .then((response) => {
        const fetchedData = response.data;
        setData({
          uni: fetchedData?.map((item) => item.university),
          major: fetchedData?.map((item) => item.major),
          course: fetchedData?.map((item) => item.courseName),
          professor: fetchedData?.map((item) => item.courseProf),
        });
      })
      .catch((err) => {
        console.error("Data not fetched", err);
      });
  }, []);

  const closePopup = (event) => {
    if (event.target === event.currentTarget) {
      setPopupType(null);
    }
  };
  if (isLoading) return <Loading />;
  return (
    <div
      className={`bg-bg-color w-full h-screen transition-opacity duration-400 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute">
        <img
          src="/icons/Vector 12.svg"
          alt=""
          className="h-[115.18px] w-[132.75px] opacity-5 relative top-2"
        />
        <img
          src="/icons/Vector 9.svg"
          alt=""
          className="h-[115.18px] w-[132.75px] opacity-5 relative right-60 top-20 "
        />
        <img
          src="/icons/Vector 10.svg"
          alt=""
          className="h-[115.18px] w-[132.75px] opacity-5 relative top-100 right-15"
        />
        <img
          src="/icons/Vector 11.svg"
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
        <p className="text-custom-blue text-lg font-bold w-[320px] mx-auto mt-10">
          فیلد های مورد نظر را برای فیلتر کردن انتخاب کنید:
        </p>
      </div>
      <img
        src="/icons/Rectangle 35.svg"
        alt="linear-gradient"
        className="mx-auto mt-10"
      />

      <div>
        {Object.keys(data).map((key) => (
          <Select
            key={key}
            icon={icons[key]}
            name={names[key]}
            onClick={() => setPopupType(key)}
          />
        ))}
        <Select
          icon="/icons/clarity_date-line.svg"
          name="تاریخ"
          onClick={() => setShowCalendar(!showCalendar)}
        />
        {showCalendar && (
          <div
            className="fixed inset-0 flex items-center justify-center"
            onClick={(e) => {
              // Check if the click is on the backdrop, not inside the calendar itself
              if (e.target === e.currentTarget) {
                setShowCalendar(false);
              }
            }}
          >
            <Calendar setPopup={() => setShowCalendar(false)} />
          </div>
        )}
      </div>

      {popupType && (
        <div
          onClick={closePopup} // Added click event to close popup when clicked outside
          className="fixed inset-0 flex justify-center items-center"
        >
          <div className="bg-custom-white rounded-lg shadow-lg w-[283px] h-[463px]">
            <SelectWindow
              name={data[popupType]}
              selectedValue={selectedItems[popupType]}
              onSelect={(value) =>
                setSelectedItems((prev) => ({ ...prev, [popupType]: value }))
              }
              setPopup={() => setPopupType(null)}
            />
          </div>
        </div>
      )}

      <img
        src="/icons/Rectangle 35.svg"
        alt="linear-gradient"
        className="mx-auto mt-10"
      />
      <div className="flex justify-center">
        <button
          className="bg-custom-white text-custom-blue w-[161px] h-[44px] mt-15 shadow-sm shadow-custom-blue border border-custom-blue rounded-md font-bold"
          onClick={handleSearch}
          aria-label="Search for results"
        >
          جستجو
        </button>
      </div>
    </div>
  );
}

export default Home;
