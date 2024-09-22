import React from 'react'
import './scroll.css'
const Scrollitems = (proms) => {
  return (
      <div className='scrollitem'>
          <img className='w-full h-full object-cover' src={`${proms.link}`} alt="" />
          <div className="footext flex justify-between  font-semibold">
            <span className='w-[70%]'>{proms.fl}</span>
            <span className='text-red-700'>{proms.sl}</span>
          </div>
        </div>
  )
}

export default Scrollitems