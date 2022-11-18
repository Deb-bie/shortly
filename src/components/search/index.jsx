import React from 'react'

import Brand from "../../assets/icon-brand-recognition.svg"
import Detail from "../../assets/icon-detailed-records.svg"
import Customizable from "../../assets/icon-fully-customizable.svg"




import "./search.css"


const Search = () => {
  return (
    <div className="w-[100%] h-[100%] mt-32 bg-[#d3f3f3] ">
        <div className="w-[100%] flex flex-col " >
            
            
            <div className=" w-[100%] flex flex-row justify-center">
                <div className="shorten-bg 4xs:w-[90%] sm:w-[70%] -mt-[65px] 4xs:py-4 sm:py-12 flex flex-row justify-between content-center items-center  z-20">
                    <form className="w-[100%] gap-4 flex 4xs:flex-col sm:flex-row justify-evenly px-4 ">
                        <input type="text" placeholder="Shorten a link here...." 
                            className="4xs:w-[100%] sm:w-[60%] py-2 px-4 rounded-[5px] outline-none  " />

                        <button className="4xs:w-[100%] sm:w-[20%] py-2 rounded-[5px] text-white bg-[#2acfcf]">Shorten it!</button>
                    </form>
                </div>
            </div>

            <div className="w-[100%] h-[100%] my-32 flex flex-col">
                <h1 className="w-[100%] mb-6 px-4 sm:px-0 4xs:text-xl sm:text-4xl font-black flex justify-center ">Advanced Statistics</h1>
                <div className="w-[100%] flex justify-center">
                    <div className="w-[40%]">
                        <p className="4xs:text-base sm:text-lg text-[#bfbfbf]   " >Track how your links are performing across the web with our advanced statistics dashboard</p>
                    </div>
                </div>


                <div className="w-[100%] 4xs:px-2 sm:px-12 4xs:mt-12 sm:mt-32 gap-4 flex flex-wrap flex-row justify-evenly">

                    <div className="4xs:w-[100%] sm:w-[50%] md:w-[30%] h-[100%] px-4 pb-12 rounded-lg bg-white flex flex-col">
                        <div className="w-[70px] h-[70px] -mt-[30px] rounded-[50%] flex flex-row justify-center items-center bg-[#3b3054] ">
                            <img src={Brand} alt="brand" />
                        </div>
                        <div className="w-[100%] mt-8 4xs:text-base sm:text-3xl font-bold ">Brand Recognition</div>
                        <p className="mt-6 4xs:text-base sm:text-xl font-semibold text-[#bfbfbf]   ">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>


                    <div className="4xs:w-[100%] sm:w-[50%] md:w-[30%] h-[100%] px-4 pb-12 mt-12 rounded-lg bg-white flex flex-col">
                        <div className="w-[70px] h-[70px] -mt-[30px] rounded-[50%] flex flex-row justify-center items-center bg-[#3b3054] ">
                            <img src={Detail} alt="brand" />
                        </div>
                        <div className="w-[100%] mt-8 4xs:text-base sm:text-3xl font-bold ">Brand Recognition</div>
                        <p className="mt-6 4xs:text-base sm:text-xl font-semibold text-[#bfbfbf]   ">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>

                    <div className="4xs:w-[100%] sm:w-[50%] md:w-[30%] h-[100%] px-4 pb-12 mt-24 rounded-lg bg-white flex flex-col">
                        <div className="w-[70px] h-[70px] -mt-[30px] rounded-[50%] flex flex-row justify-center items-center bg-[#3b3054] ">
                            <img src={Customizable} alt="brand" />
                        </div>
                        <div className="w-[100%] mt-8 4xs:text-base sm:text-3xl font-bold ">Brand Recognition</div>
                        <p className="mt-6 4xs:text-base sm:text-xl font-semibold text-[#bfbfbf]   ">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>



            </div>

            <div className="boost-bg w-[100%] h-[100%] 4xs:mt-12 sm:mt-32 4xs:px-4 sm:px-0  bg-[#3b3054] py-12">
                <h1 className="4xs:text-2xl sm:text-5xl font-black text-white flex justify-center " >Boost your links today</h1>

                <div className="w-[100%] flex justify-center ">
                    <button className="4xs:w-[90%] sm:w-[20%] py-2 my-12 rounded-[15px] flex justify-center bg-[#2acfcf] " >Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search