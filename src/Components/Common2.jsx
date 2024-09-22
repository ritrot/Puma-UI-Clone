// import React from 'react'

// const Common2 = (proms) => {
//     return (
//         <div className="relative  ">
//             <div className={`h-[35vw] w-full bg-[url("${proms.ig}")] bg-cover list-none`}>
//                 <div className={`relative flex justify-${proms.ptn} h-screen top-[12vw] p${proms.side}-[5vw] pl-[5vw] text-white`}>
//                     <div className={`flex flex-col items-${proms.align} text-${proms.clr}`}>
//                         <li className='text-[2.8vw] font-bold' >{proms.fl}</li>
//                         <li className='text-[2.8vw] font-bold relative bottom-3' >{proms.fl1}</li>
//                         <li className='text-2xl'>{proms.sl}</li>
//                         <li className='font-mono'>{proms.tl}</li>
//                         <span className='flex gap-5 relative top-[2vw] '>
//                             <li className={`bg-black text-${proms.clr2}  p-3 pl-7 pr-7 text-2sm`}>SHOP NOW</li>
//                             <li className={`bg-black text-white p-3 pl-7 pr-7 text-2sm ${proms.show} `}>{proms.btn}</li>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Common2


import { useRef, React, useState, useEffect } from 'react';
import { motion, transform, useInView, MotionConfig } from "framer-motion"
// import './ani.js';
// import './ani.css';


// import { motion, transform, useInView, MotionConfig } from "framer-motion"

// const App = () => {

//   const slwo = useRef(null)
//   const isInView = useInView(slwo, { once: true });

//   // useEffect(() => {
//   // slwo.current.style.color ="blue"
//   // }, [])

//   return (

//     <>

//       <MotionConfig

//         initial={{ opacity: 0,scale:0 }}
//         whileInView={{ opacity: 1 ,scale:1}}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
// ref={slwo}
//           className=' w-full mt-[150vh] h-[400px] bg-slate-500'>
//           i am king
//         </motion.div>
//         <motion.div
//           className=' w-full mt-[150vh] h-[400px] bg-red-500'
//         />
//       </MotionConfig>
//     </>


const Common2_1 = () => {
    return (
        <MotionConfig
            initial={{ opacity: 0, scale: 0.20 }}
            whileInView={{ opacity: 1, scale: 1 }}
            //viewport = {{once:"true"}}
            transition={{ duration: 1 }}
        >
            <div className="relative">
                <motion.div className="select slow h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url("https://cdn.sanity.io/images/qa41whrn/prod/5edc9960d1d9eb2a41d9f85dea96d705c481037e-6000x2167.jpg?w=1440&q=80&auto=format")` }}>
                    <div className="relative flex justify-START h-screen top-[12vw] pl-[5vw] ">
                        <motion.div 
                        initial={{ opacity: 0, transform:"translateY(0%)"}}
                        whileInView={{ opacity: 1, transform:"translateY(-30%)"}}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col items-center relative top-[30%]">
                            <li className="text-[2.8vw] font-bold">SEE SPAIN LIKE WE DO</li>
                            <li className="text-2xl">FOREVER . CHAMPIONS</li>
                            <span className="flex gap-5 relative top-[2vw]">
                                <motion.li 
                                whileHover={{ scale: 1.2,backgroundColor: "white", color: "black" }}
                                whileTap={{scale:0.5}}
                                transition={{ duration: 0.2 }}
                                className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div className="slow h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url(https://cdn.sanity.io/images/qa41whrn/prod/2fe347a0a97655fbcb8bb782f062e8522ecfebad-6000x2167.jpg)` }}>
                    <div className="relative flex justify-end h-screen top-[12vw] pr-[5vw] pl-[5vw] ">
                    <motion.div 
                        initial={{ opacity: 0, transform:"translateY(0%)"}}
                        whileInView={{ opacity: 1, transform:"translateY(-30%)"}}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col items-center relative text-white top-[30%]">
                            <li className="text-[2.8vw] font-bold">PLAY LOUD</li>
                            <li className="text-2xl">BREAK IT DOWN</li>
                            <span className="flex gap-5 relative top-[2vw]">
                                <motion.li
                                 whileHover={{ scale: 1.2, backgroundColor: "white", color: "black" }}
                                 whileTap={{scale:0.5}}
                                 transition={{ duration: 0.2 }}
                                className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                                <li className="bg-black text-white p-3 pl-7 pr-7 text-2sm hidden rounded-xl">SHOP NOW</li>
                            </span>
                        </motion.div >
                    </div>
                </motion.div>
                <motion.div  className="h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url(https://cdn.sanity.io/images/qa41whrn/prod/6c6c8eeb889e595ebe354186241b91049b87bb40-6000x2167.jpg)` }}>
                    <div className="relative flex justify-start h-screen top-[12vw] pl-[5vw] text-white">
                    <motion.div 
                        initial={{ opacity: 0, transform:"translateY(0%)"}}
                        whileInView={{ opacity: 1, transform:"translateY(-30%)"}}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col items-center relative top-[30%]">
                            <li className="text-[2.8vw] font-bold">BACK TO AZZURRO</li>
                            <li className="text-2xl">SCUDERIA FERRARI MIAMI LIMITED EDITION</li>
                            <span className="flex gap-5 relative top-[2vw]">
                                <motion.li
                                 whileHover={{ scale: 1.2,backgroundColor: "white", color: "black" }}
                                 whileTap={{scale:0.5}}
                                 transition={{ duration: 0.2 }}
                                className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                            </span>
                        </motion.div >
                    </div >
                </motion.div >
                <motion.div className="h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url(https://cdn.sanity.io/images/qa41whrn/prod/c95754a12cfb4ec610699e16fadb83290e2806b3-6000x2167.jpg)` }}>
                    <div className="relative flex justify-start h-screen top-[12vw] pl-[5vw] text-white">
                    <motion.div 
                        initial={{ opacity: 0, transform:"translateY(0%)"}}
                        whileInView={{ opacity: 1, transform:"translateY(-30%)"}}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col items-center relative top-[30%]">
                            <li className="text-[2.8vw] font-bold">PUMA x TROLLS</li>
                            <li className="text-2xl">THAT FUZY FEELING</li>
                            <span className="flex gap-5 relative top-[2vw]">
                                <motion.li
                                whileHover={{ scale: 1.2, backgroundColor: "white", color: "black" }}
                                whileTap={{scale:0.5}}
                                transition={{ duration: 0.2 }}
                                className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div className="h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url(https://cdn.sanity.io/images/qa41whrn/prod/33e1754f474d9d2896f724b524a51f2a023278b2-6000x2167.jpg)` }}>
                    <div className="relative flex justify-start h-screen top-[12vw] pl-[5vw] text-white">
                    <motion.div 
                        initial={{ opacity: 0, transform:"translateY(0%)"}}
                        whileInView={{ opacity: 1, transform:"translateY(-30%)"}}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col items-center relative top-[30%]">
                            <li className="text-[2.8vw] font-bold">PUMA x CARROTES</li>
                            <li className="text-2xl">BY ANWAR CARROTS</li>
                            <li className="font-mono">ORGANIC XL CARROTS</li>
                            <span className="flex gap-5 relative top-[2vw]">
                                <motion.li
                                 whileHover={{ scale: 1.2, backgroundColor: "white", color: "black" }}
                                 whileTap={{scale:0.5}}
                                 transition={{ duration: 0.2 }}
                                className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div className="h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url(https://cdn.sanity.io/images/qa41whrn/prod/05bc97b5db11fbd0ef483eb86caedd4c0ea5e73d-6000x2167.jpg)` }}>
                    <div className="relative flex justify-start h-screen top-[12vw] pl-[5vw] text-white">
                    <motion.div 
                        initial={{ opacity: 0, transform:"translateY(0%)"}}
                        whileInView={{ opacity: 1, transform:"translateY(-30%)"}}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col items-center relative top-[30%]">
                            <li className="text-[2.8vw] font-bold">MADE WITH</li>
                            <li className="text-[2.8vw] font-bold relative bottom-3">MLANIISMO</li>
                            <li className="text-2xl">24/25 AC MILAN HOME KIT</li>
                            <span className="flex gap-5 relative top-[2vw]">
                                <motion.li
                                 whileHover={{ scale: 1.2,backgroundColor: "white", color: "black" }}
                                 transition={{ duration: 0.2 }}
                                 whileTap={{scale:0.5}}
                                className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </MotionConfig>
    );
};

const Common2_8 = () => {
    return (
        <div className="relative">
            <div className="h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url(https://cdn.sanity.io/images/qa41whrn/prod/3fe7386927ec3ba13893df6dd4fe8dcafb576b25-6000x2167.jpg)` }}>
                <div className="relative flex justify-start h-screen top-[12vw] pl-[5vw] text-white">
                    <div className="flex flex-col items-none text-white">
                        <li className="text-[2.8vw] font-bold">MANCHESTER CALLING</li>
                        <li className="text-2xl">24/25 MAN CITY HOME KIT</li>
                        <span className="flex gap-5 relative top-[2vw]">
                            <motion.li
                                          whileHover={{ scale: 1.2,backgroundColor: "white", color: "black" }}
                                          whileTap={{scale:0.5}}
                                          transition={{ duration: 0.2 }}
                            className="bg-black text-white p-3 pl-7 pr-7 text-2sm">SHOP COLLECTION</motion.li>
                            <motion.li
                                          whileHover={{ scale: 1.2,backgroundColor: "white", color: "black" }}
                                          whileTap={{scale:0.5}}
                                          transition={{ duration: 0.2 }}
                            className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url(https://cdn.sanity.io/images/qa41whrn/prod/ac3fc79415884460f1a7b3459b333ff091dee5a5-6000x2167.jpg)` }}>
                <div className="relative flex justify-end h-screen top-[12vw] pr-[5vw] pl-[5vw] text-white">
                    <div className="flex flex-col items-center text-black">
                        <li className="text-[2.8vw] font-bold">FOR ALL THE</li>
                        <li className="text-[2.8vw] font-bold relative bottom-3">SNEAKERHEADS</li>
                        <li className="text-2xl">YOUR ONE-TOP SNEAKER SHOP</li>
                        <span className="flex gap-5 relative top-[2vw]">
                            <motion.li
                             whileHover={{ scale: 1.2, backgroundColor: "white", color: "black" }}
                             whileTap={{scale:0.5}}
                            className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">EXPLORE MORE</motion.li>
                            <motion.li
                             whileHover={{ scale: 1.2, backgroundColor: "white", color: "black" }}
                             whileTap={{scale:0.5}}
                            className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-[35vw] w-full bg-cover list-none" style={{ backgroundImage: `url(https://cdn.sanity.io/images/qa41whrn/prod/80d92bdf064393dc36761e47b7b28c7e6addb3e5-2880x1000.jpg)` }}>
                <div className="relative flex justify-start h-screen top-[12vw] pl-[5vw] text-white">
                    <div className="flex flex-col items-center text-white">
                        <li className="text-[2.8vw] font-bold">PUMA x ATHLETICS</li>
                        <li className="text-[2.8vw] font-bold relative bottom-3">FEDERATION OF INDIA</li>
                        <li className="text-2xl">A NEW ERA OF SPEED, STRENGTH & SPIRIT</li>
                        <span className="flex gap-5 relative top-[2vw]">
                            <motion.li
                             whileHover={{ scale: 1.2, backgroundColor: "white", color: "black" }}
                             whileTap={{scale:0.5}}
                            className="bg-black text-white p-3 pl-7 pr-7 text-2sm rounded-xl">SHOP NOW</motion.li>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};



export { Common2_1, Common2_8 };