import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';
const Course = () => {

    const paidBooks = list.filter(item => item.category !== "Free");
    console.log(paidBooks)
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-5'>
         <div className='mt-32 flex flex-col items-center justify-center text-center gap-5 '>
            <h1 className='text-2xl
             md:text-4xl font-semibold'>We're delighted to have you
              <span className='text-pink-500'> Here :)</span> </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam voluptate illum voluptas magnam voluptatum error, unde earum porro. Libero incidunt soluta et quasi nostrum.</p>
              <Link to="/">
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer'>Back</button>
              </Link>
         </div>
         <div className=' grid lg:grid-cols-3 md:grid-cols-2 w-full mt-5 gap-10 py-5 '>
            {
                paidBooks.map(item =>
                    (
                        <div key={item.id}>
                            <Cards
                            item={item}/>
                        </div>
                    )
                )
            }
         </div>
      </div>
    </>
  )
}

export default Course;
