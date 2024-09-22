import React from 'react'

const Common3 = (proms) => {
    return (
        <div className="relative  ">
            <div className={`h-[35vw] w-full bg-[url("${proms.ig}")] bg-cover list-none`}>
                {/* <div className={`relative flex justify-${proms.ptn} h-screen top-[12vw] p${proms.side}-[5vw] pl-[5vw] text-white`}>
                    <div className={`flex flex-col items-${proms.align} text-${proms.clr}`}>
                        <li className='text-[2.8vw] font-bold' >{proms.fl}</li>
                        <li className='text-[2.8vw] font-bold relative bottom-3' >{proms.fl1}</li>
                        <li className='text-2xl'>{proms.sl}</li>
                        <li className='font-mono'>{proms.tl}</li>
                        <span className='flex gap-5 relative top-[2vw] '>
                            <li className={`bg-black text-${proms.clr2}  p-3 pl-7 pr-7 text-2sm`}>SHOP NOW</li>
                            <li className={`bg-black text-white p-3 pl-7 pr-7 text-2sm ${proms.show} `}>{proms.btn}</li>
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Common3
