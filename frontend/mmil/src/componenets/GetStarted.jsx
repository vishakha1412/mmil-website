import React from "react";
import PopUp from "./PopUp";
export const GetStarted = () => {
    const handlechange=(e)=>{
        
        PopUp("Get Started Successfully!");
    }
  return (
    <section className="px-6 md:px-20 py-24">
      <div
        className="
          w-full max-w-[1280px] mx-auto  bg-gradient-to-r from-[rgba(113,218,43,1)] via-[rgba(26,47,108,0)] to-[rgba(31,210,255,1)] rounded-[12px] shadow-lg flex flex-col items-center gap-6 px-[20px] md:px-20 py-[71px] gap-[12px] h-[450px] rounded-[12px] 
        "
      >
        <img src="/logo/logo.png" alt="PracAI Logo" className="w-[96px] h-[97px]" />
         
        <h2 className="font-['Baloo_2'] text-[28px] sm:text-[36px] md:text-[48px] font-semibold  text-center font-[700] font-bold text-[56px] text-[rgba(168,218,220,1)] tracking-[-0.02em]">
          Get Started
        </h2>

        
       <input
  type="text"
  placeholder="Sign Up for a free trial today"
  className="
    w-full max-w-[1240px] 
    rounded-[8px] 
    px-4 py-3 
    text-[16px] md:text-[20px] 
    font-['DM_Sans'] font-medium 
    text-[rgba(168,218,220,1)] 
    leading-[120%] 
    tracking-[-0.5%] 
    text-center 
    focus:outline-none focus:ring-2 focus:ring-yellow-400
  "
/>


        
        <button
          className="
            bg-[rgba(113,218,43,1)] text-[rgba(13,13,18,1)] px-8 py-4 tracking-[-0.5%] leading-[120%] rounded-[12px]  shadow-md  hover:bg-[#6fbb3d]  transition  font-['DM_Sans']  font-medium
            text-[20px] md:text-[20px] w-full max-w-[190px] h-[46px]
          " onClick={() => handlechange()}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};
