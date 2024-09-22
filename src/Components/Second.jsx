import React from 'react'
import sneakers from "/sneakers.jpeg"

const Second = () => {
  return (
    <div className='w-full h-[29vw] bg-white text-black list-none flex flex-col justify-center items-center gap-5 relative'>
        <li className='text-4xl font-bold'>COOL STYLES AT HOT DISCOUNTS</li>
        <li className='text-lg'>FLAT 40% OFF | + EXTRA 5% OFF ON ALL ONLINE PAYMENTS</li>
        <span className=' flex gap-7'>
            <li className='h-[110px] w-[110px]  '><img src={sneakers} alt="" /></li>
            <li className='h-[110px] w-[110px]  '><img src={sneakers} alt="" /></li>
            <li className='h-[110px] w-[110px]  '><img src={sneakers} alt="" /></li>
            <li className='h-[110px] w-[110px]  '><img src={sneakers} alt="" /></li>
            <li className='h-[110px] w-[110px] '><img src={sneakers} alt="" /></li>
            <li className='h-[110px] w-[110px] '><img src={sneakers} alt="" /></li>
        </span>
        
    </div>
    
  )
}

export default Second
