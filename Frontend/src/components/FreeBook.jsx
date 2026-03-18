import React from 'react'
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState, useEffect } from 'react';

const FreeBook = () => {

  const[book,setBook]=useState([]);

  useEffect(()=>{
    const getBooks = async() =>{
      try {
       const response = await axios.get("http://localhost:4001/book");
       console.log(response.data);
       const freeBooks = response.data.filter((data) => data.category === "Free");
       setBook(freeBooks);
       console.log(freeBooks);
      } catch (error) {
        console.log("Error freeBook",error);
      }
    }
    getBooks();
  },[])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  py-4'>

        <div className='p-2'>
          <h1 className='font-semibold text-xl'>Free Offered Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dolorem esse eius corporis asperiores deserunt!
          </p>
        </div>

        <div className='mt-6 w-full py-5 px-5'>
          <Slider {...settings}>
            {
              book.map((item)=>
              ( 
                 <div key={item.id} className='px-3 py-2'>
                     <Cards
                    item={item}
                   />
                 </div>
              )
              )
            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FreeBook
