import React from 'react'


import Slider from "react-slick";

import list from "../../public/list.json"
import Cards from './Cards';


const FreeBook = () => {

  const filterdBooks = list.filter((data) => data.category === "Free");
  console.log(filterdBooks)
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
              filterdBooks.map((item)=>
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
