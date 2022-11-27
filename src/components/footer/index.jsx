import React from 'react';
import Logo from "../../assets/logo-white.svg"
import Facebook from "../../assets/icon-facebook.svg"
import Twitter from "../../assets/icon-twitter.svg"
import Pinterest from "../../assets/icon-pinterest.svg"
import Instagram from "../../assets/icon-instagram.svg"


const Footer = () => {
  return (
    <div className="w-[100%] h-[100%] 4xs:px-12 sm:px-0 text-white bg-[#35323e] overflow-hidden ">
        <div className="w-[100%] h-[100%] py-12 gap-4 flex flex-wrap 4xs:flex-col sm:flex-row justify-evenly">
            <div className="4xs:w-[100%] sm:w-[30%] flex 4xs:items-center sm:items-start justify-center ">
                <img src={Logo} alt="logo" className="w-[100px] h-auto object-contain  " />
            </div>

            <div className="4xs:w-[100%] sm:w-[30%] gap-6 flex flex-wrap flex-row justify-between " >
                <div className="flex flex-col">
                    <h1 className="font-bold text-base mb-4">Features</h1>
                    <p>Link Shortening</p>
                    <p>Branded Links</p>
                    <p>Analytics</p>
                </div>

                <div className="flex flex-col">
                    <h1 className="font-bold text-base mb-4">Resources</h1>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>

                <div className="flex flex-col">
                    <h1 className="font-bold text-base mb-4">Company</h1>
                    <p>About</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
            </div>

            <div className="4xs:w-[100%] sm:w-[10%] gap-6 flex flex-wrap flex-row justify-between "  >
                <img src={Facebook} alt="facebook"  className="w-[30px] h-auto object-contain text-pink-900 " />
                <img src={Twitter} alt="twitter" className="w-[30px] h-auto object-contain" />
                <img src={Pinterest} alt="pinterest" className="w-[30px] h-auto object-contain" />
                <img src={Instagram} alt="instagram" className="w-[30px] h-auto object-contain" />
            </div>
        </div>
    </div>
  )
}

export default Footer