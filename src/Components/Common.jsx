import React from 'react'

const Common = () => {
  return (
    <>
      <div className="relative">
        <div className=' h-[35vw] w-full bg-[url("https://cdn.sanity.io/images/qa41whrn/prod/35b6f7f51046e4e860050711a6cc7c6ddfb10322-6000x2167.jpg")] bg-cover list-none'>
          <div className="relative flex  h-screen top-[11vw] pl-[4vw] text-white">
            <div className='flex flex-col items-center'>
              <li className='text-[2.8vw] font-bold' >SEE THE GAME LIKE WE DO</li>
              <li className='text-2xl'>PUMA x INDIAN OLYMPIC ASSOCIATION</li>
              <li className='font-mono'>Official Footwear Partner</li>
              <span className='flex gap-5 relative top-[2vw] '>
                <li className='bg-black p-3 pl-7 pr-7 text-2sm'>LEARN MORE</li>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Common

