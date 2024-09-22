import React from 'react'
import { motion ,MotionConfig} from "framer-motion"

const First = () => {
  return (
    <div className="relative top-10">
      <div className=' h-[35vw] w-full bg-[url("https://cdn.sanity.io/images/qa41whrn/prod/09646d25a041fa5bb063844eaad9fdae3af30fde-2880x1040.jpg?w=2160&q=80&auto=format")] bg-cover list-none'>
        <div className="relative flex justify-end h-screen top-[10vw] pr-[5vw] text-white">
          <div className='flex flex-col items-center'>
            <li className='text-4xl font-bold' >END OF SEASON SALE</li>
            <li className='text-2xl'>NEW STYLES ADDED</li>
            <li>+ EXTRA 5% OFF ON ALL ONLINE PAYMENTS</li>
            <span className='flex gap-5 relative top-[2vw] '>
              <MotionConfig
                whileHover={{ scale: 1.2, rotate: 360, backgroundColor: "white", color: "black" }}
              >
                <motion.li className='bg-black p-3 pl-5 pr-5 text-sm rounded-xl'>FOR HIM</motion.li>
                <motion.li className='bg-black p-3 pl-5 pr-5 text-sm rounded-xl'>FOR HER</motion.li>
                <motion.li className='bg-black p-3 pr-5 pl-5 text-sm rounded-xl'>FOR KIDS</motion.li>
              </MotionConfig>
            </span>
          </div>
        </div>

      </div>
    </div>

  )
}
export default First
