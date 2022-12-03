import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const DetailsPage = () => {
  const params=useParams()
  console.log('title',params.id)
  const [data,setData]=useState('')
  useEffect(()=>{
    const fetchData=async()=>{
    await axios.get(`https://www.omdbapi.com/?i=${params.id}&apikey=8dcbc850`).then((res)=>{
       setData(res.data)
     })
    }
    fetchData()
   },[params.id])
  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-column align-items-center" style={{height:'100vh'}}>
        <div className="row border pt-1">
          <div className="col-4">
            <img
              src={data?.Poster}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-8">
            <div>
              <h5>Harry poter and movies</h5>
              <div className="d-flex gap-3 p-2 my-1  border align-items-center">
                <strong>Genre:</strong>
                <p className="mb-0">{data?.Genre}</p>
              </div>
              <div className="d-flex gap-3 p-2 my-1  border align-items-center">
                <strong>Relase:</strong>
                <p className="mb-0">{data?.Released}</p>
              </div>
              <div className="d-flex gap-3 p-2 my-1  border align-items-center">
                <strong>Rated:</strong>
                <p className="mb-0">{data?.Rated}</p>
              </div>
              <div className="d-flex gap-3 p-2 my-1  border align-items-center">
                <strong>IMDB rating:</strong>
                <p className="mb-0">{data?.imdbRating}</p>
              </div>
              <div className="d-flex gap-3 p-2 my-1  border align-items-center">
                <strong>Director:</strong>
                <p className="mb-0">{data?.Director}</p>
              </div>
              <div className="d-flex gap-3 p-2 my-1  border align-items-center">
                <strong>Writer:</strong>
                <p className="mb-0">{data?.Writer}</p>
              </div>
              <div className="d-flex gap-3 p-2 my-1  border align-items-center">
                <strong>Actors:</strong>
                <p className="mb-0">{data?.Actors}</p>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  );
};

export default DetailsPage;
