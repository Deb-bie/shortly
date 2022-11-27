import React from 'react'
import HeroImage from "../../assets/illustration-working.svg"


const Hero = () => {
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
        <div className="w-[100%] gap-6 4xs:px-4 md:pl-6 lg:pl-32 sm:py-12 flex 4xs:flex-col-reverse sm:flex-row justify-between content-center items-center">
            <div className="4xs:w-[100%] sm:w-[40%] h-[100%] flex flex-col justify-between content-center 4xs:items-center sm:items-start  ">
                <h1 className="4xs:text-2xl sm:text-5xl 2xl:text-7xl font-black " >More than just shorter links</h1>
                <p className="text-lg mt-4 flex flex-row justify-start " >Build your brand's recognition and get detailed insights on how your links are performing</p>
                <button className="4xs:w-[50%] sm:w-[40%]  mt-6 px-4 py-2 rounded-[18px] bg-[#2acfcf] text-white hover:scale-90 hover:duration-700 ">Get Started</button>
            </div>

            <div className="4xs:w-[100%] sm:w-[50%] ">
                <img src={HeroImage} alt-="hero" />
            </div>
        </div>
    </div>
  )
}

export default Hero