import React from 'react'
import bookCover from '../../public/book.jpg'

const Cards = ({item}) => {
   
    return (
        <>
            <div className='w-full'>
                <div className="card bg-base-100 dark:bg-base-100 dark:border w-full shadow-sm hover:scale-102 duration-200 min-h-105">
                    <figure>
                        <img
                            src={bookCover}
                            alt="book" 
                            className='h-60 w-60 p-5'/>
                    </figure>
                    <div className="card-body text-base-content">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions items-center justify-between">
                            <div className="badge px-5 py-5 badge-outline bg-pink-500 font-bold text-white border-none cursor-pointer">${item.price}</div>
                            <div className="badge px-3 py-5 badge-outline bg-pink-500 font-bold text-white border-none cursor-pointer">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
