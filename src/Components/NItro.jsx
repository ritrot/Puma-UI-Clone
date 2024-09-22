import React from 'react'

const NItro = () => {
    return (
        <>
        <div className="relative">
            <div className="h-[33vw] mb-[14vw] w-full bg-slate-400   bg-cover list-none mt-[6vw]">
                <div className="relative top-[10%] flex h-screen pl-[2vw] ">
                    <div className="flex flex-col  ">
                        <li className="text-[2.8vw] font-bold">PLAY LOUD</li>
                        <li className="text-2xl">BREAK IT DOWN</li>
                        <span className="flex gap-5 relative top-[1vw]">
                            <li className="bg-black text-white p-2 pl-7 pr-7 text-2sm">SHOP NOW</li>
                            <li className="bg-black text-white p-2 pl-7 pr-7 text-2sm">SHOP NOW</li>
                        </span>
                    <video className='relative z-20 w-[46vw]  top-[3vw]' muted autoPlay loop src="https://cdn.sanity.io/files/qa41whrn/prod/4a3026279df3bdb8eac79fcd2d37c6df1a4313e1.mp4"></video>
                    </div>                
                <div className='bg-[ur("https://cdn.sanity.io/images/qa41whrn/prod/57b628c688021950aac02b0eae07b9bdb81de7f5-1536x1536.jpg")] bg-cover absolute left-[46vw] z-10 w-[48vw] bottom-[100px]'><img src="https://cdn.sanity.io/images/qa41whrn/prod/57b628c688021950aac02b0eae07b9bdb81de7f5-1536x1536.jpg" alt=""  /></div>
                </div>
            </div>
        </div>
        </>
    )

}

export default NItro



