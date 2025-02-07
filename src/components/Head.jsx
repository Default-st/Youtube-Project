import { useEffect, useState } from "react";
import ytLogo from "../assets/ytLogo.svg";
import { useCachedData, useStore, useVideoStore } from "../utils/store";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_VIDEO_API,
} from "../utils/constants";
const Head = () => {
  const { toggleSidebar } = useStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const { cachedData, setCachedData } = useCachedData();
  const { videos, setVideos } = useVideoStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedData?.[searchQuery]?.length > 0) {
        setSearchSuggestions(cachedData?.[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchSearchedVideos = async (item) => {
    console.log("called " + item);
    const data = await fetch(
      YOUTUBE_SEARCH_VIDEO_API + item + "&key=" + GOOGLE_API_KEY
    );
    const jsonData = await data.json();
    setVideos(jsonData?.items);
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSearchSuggestions(jsonData[1]);
    setCachedData(searchQuery, jsonData[1]);
  };

  return (
    <div className="grid grid-flow-col p-5  shadow-lg">
      <div className="col-span-1 flex gap-4">
        <svg
          onClick={toggleSidebar}
          className="w-6 h-6 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>{" "}
          </g>
        </svg>{" "}
        <img src={ytLogo} className="w-22 h-6 " />
      </div>{" "}
      <div className="flex col-span-10 text-center relative">
        {" "}
        <div className="w-full flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className=" border border-gray-500  rounded-l-2xl w-3/4 px-5 py-2"
          />

          <button className="bg-gray-200 hover:cursor-pointer border border-gray-500 p-2 rounded-r-2xl">
            <svg
              className=" w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>{" "}
        {searchSuggestions.length > 0 && showSuggestions ? (
          <div className=" text-start absolute border border-gray-500 bg-white  rounded-2xl py-5 top-12 shadow-2xl w-3/4">
            <ul>
              {searchSuggestions.map((item) => (
                <li
                  key={item}
                  className="px-5 py-2 hover:bg-gray-100 hover:cursor-pointer"
                  onClick={() => fetchSearchedVideos(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="w-5 h-5  col-span-1">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
              fill="#000000"
            ></path>{" "}
            <path
              d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
              fill="#000000"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Head;
