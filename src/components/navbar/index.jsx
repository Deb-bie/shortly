import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import {FaBars} from "react-icons/fa"

import Logo from "../../assets/logo.svg"

const Navbar = () => {
    const activeStyle = {
        color: "red",
    };

    const [mobile, setMobile] = useState(false)

    const handleMobile = () => {
        setMobile(!mobile)
    }


  return (
    <div className="w-[100%] h-[100px] overflow-hidden">
        <div className="w-[100%] h-full 4xs:px-4 md:px-6 lg:px-32 flex flex-row justify-between content-center items-center ">
            <div className="w-[50%] flex flex-row">
                <img src={Logo} alt="logo"/>

                <div className="4xs:ml-0 sm:ml-12 4xs:hidden sm:flex flex-row justify-between items-center content-center text-[#bfbfbf] " >
                    <NavLink 
                        className="mr-4"
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                        to="#">Features</NavLink>

                    <NavLink 
                        className="mr-4"
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                        to="#">Pricing</NavLink>

                    <NavLink 
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    to="#">Resources</NavLink>
                </div>
            </div>


            <div className="4xs:hidden sm:flex flex-row content-center items-center ">
                <button className="text-[#bfbfbf]">Login</button>

                <button className="ml-4 px-4 py-2 rounded-[18px] bg-[#2acfcf] text-white ">Sign Up</button>
            </div>

            <div onClick={()=> handleMobile()} className="4xs:flex sm:hidden">
                <FaBars className="text-[#bfbfbf]" />
            </div>

            {
                (mobile) ? 
                
                <div className="absolute w-[100%] top-[100px] flex flex-row justify-center ">
                    <div className="w-[80%] h-[100%] flex flex-col bg-[#3b3054]  pb-12    " >
                        <div className="my-4 border-[1px] border-x-transparent border-t-transparent flex flex-col justify-center content-center items-center" >
                            <NavLink className="text-xl font-bold text-white mt-8" to="#">Features</NavLink>
                            <NavLink className="text-xl font-bold text-white mt-8" to="#">Pricing</NavLink>
                            <NavLink className="text-xl font-bold text-white my-8" to="#">Resources</NavLink>
                        </div>
                        
                        <NavLink className="text-xl font-bold text-white mt-8 flex flex-row justify-center content-center items-center" to="#">Login</NavLink>

                        <div className="flex flex-row justify-center mt-8  ">
                            <button className="w-[70%] flex flex-row justify-center content-center items-center px-4 py-2 rounded-[18px] bg-[#2acfcf] text-white">Sign Up</button>
                        </div>
                    </div>
                </div>


                : ""
            }

        </div>
    </div>
  )
}

export default Navbar