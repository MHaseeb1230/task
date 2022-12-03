import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoSearch } from "react-icons/go";
import Moveis from "./Moveis";
const SearchBar = () => {
  const [search,setSearch]=useState()
  const [title,setTitle]=useState('')
  
  const [data, setData] = useState({
    show: false,
    data: "",
  });
  const API_KEY = "26204fbb";

  const handleSearch=()=>{
    setTitle(search);
  }
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`)
        .then((res) => {
          if (res.data.Response === "True") {
            setData({
              show: true,
              data: res.data.Search
            });
          }
        });
    };
   title.length>=3 && fetchData();
  }, [title]);
  return (
    <>
      <div className="container py-3 mt-3 text-center serach_bg">
        <p className="fs-3  my-4">
          <GoSearch className="fs-2 me-3" /> Search for movies and T.V series
        </p>
        <div className="py-4 d-flex justify-content-center ">
          <div className="white  py-2 px-3  d-flex align-items-center">
            <GoSearch className="fs-2 me-3" />
            <input type="search" onChange={(e)=>setSearch(e.target.value)} className="w-100 search_inp" />
          </div>
          <button onClick={handleSearch} className="btn btn-primary px-4 ms-2">search</button>
        </div>
      </div>
      <Moveis data={data} />
    </>
  );
};

export default SearchBar;
