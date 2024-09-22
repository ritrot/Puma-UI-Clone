import React from 'react'
import './footer.css'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiPuma } from "react-icons/si";

const Footer = () => {
    return (
        <div className='h-[30vw] mt-[10vw] w-full bg-black list-none text-white'>
            <div className="first h-[75%] bg-black p-[4vw] flex justify-between  pl-[10vw] pr-[10vw]">

                <div className='flex'>
                    <span>
                        <div className='name'>SUPPORT</div>
                        <li>Contact us</li>
                        <li>FAQs</li>
                        <li>Promotions & Sale</li>
                        <li>My Account</li>
                        <li>Track Order</li>
                        <li>Exchange & Return Policy</li>
                        <li>Shoe Care</li>
                    </span>

                </div>
                <span className='pt-6'>
                    <li>Privacy Policy</li>
                    <li>Tech Glossary</li>
                    <li>Terms & Conditions</li>
                    <li>Initiate Return / Exchange</li>
                    <li>Sneakers</li>
                    <li>Running Shoes</li>
                    <li>Cookie Settings</li>
                </span>

                <div>
                    <li className='name '>ABOUT</li>
                    <li>Company</li>
                    <li>Corporate News</li>
                    <li>Press Center</li>
                    <li>Investors</li>
                    <li>Sustainability</li>
                    <li>Careers</li>
                    <li>Store Locator</li>
                    <li>PUMA Articles</li>
                </div>
                <div>
                    <li className='name'>STAY UP TO DATE</li>
                    <li>Sign Up for Email</li>
                    <li className='flex text-3xl mt-10 mb-10 gap-10'><FaYoutube /><FaTwitter /><FaPinterest /><FaInstagram /><FaFacebook /></li>
                    
                    <li>EXPLORE</li>
                    <li className='flex gap-20 text-5xl'>< SiPuma className='p-1 border-2' /><SiPuma className='p-1 border-2'/></li>
                </div>

            </div>
            <div className='h-[1px] w-[90%] bg-white ml-[5%]'></div>
            <div className="second ml-[5%] mt-10">© PUMA INDIA LTD, 2024. ALL RIGHTS RESERVED.
IMPRINT AND LEGAL DATA
PUMA.COM | Forever Faster</div>

        </div>
    )
}

export default Footer
