 import React from "react";
 import PopUp from "./PopUp";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
const Footer = () => {
    const[user,setUser]=useState("");
    function handleChange(e){
        
        PopUp("Subscribed Successfully with email: " +  user);
        setUser("");
    }
  return (
    <footer className="bg-[rgba(13,13,18,1)] text-white px-6 md:px-20 py-16 w-full max-md:items-center">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        
       
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-6 md:gap-0">
          <div className="flex justify-center md:justify-start">
            <img src="/logo/logo.png" alt="PracAI Logo" className="w-[96px] h-[96px]" />
          </div>
          <div className="flex gap-4 md:gap-[15px] justify-center md:justify-end items-center">
            <a href="#"><FaLinkedin className="w-[45px] h-[45px] hover:text-white transition border-[1.5px] border-[rgba(242,245,252,1)] p-2 rounded-[50%]" /></a>
            <a href="#"><FaInstagram className="w-[45px] h-[45px] hover:text-white transition border-[1.5px] border-[rgba(242,245,252,1)] p-2 rounded-[50%]" /></a>
            <a href="#"><FaYoutube className="w-[45px] h-[45px] hover:text-white transition border-[1.5px] border-[rgba(242,245,252,1)] p-2 rounded-[50%]" /></a>
            <a href="#"><FaXTwitter className="w-[45px] h-[45px] hover:text-white transition border-[1.5px] border-[rgba(242,245,252,1)] p-2 rounded-[50%]" /></a>
          </div>
  </div>

       
        <div className="flex flex-col lg:flex-row justify-between w-full gap-12 max-lg:items-center ">
          
          
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-[90px] flex-1">
            
            <div className="flex flex-col gap-[10px] min-w-[108px]">
              <h3 className="font-['DM_Sans'] text-[16px] font-semibold leading-[28px] text-[rgba(242,245,252,1)]">Company</h3>
              <ul className="space-y-2 text-[rgba(242,245,252,0.7)]">
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">About Us</a></li>
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">Contact Us</a></li>
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">Pricing</a></li>
              </ul>
            </div>

           
            <div className="flex flex-col gap-[10px] min-w-[108px]">
              <h3 className="font-['DM_Sans'] text-[16px] font-semibold leading-[28px] text-[rgba(242,245,252,1)]">Resources</h3>
              <ul className="space-y-2 text-[rgba(242,245,252,0.7)]">
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">Courses</a></li>
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">Newsletter</a></li>
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">Terms & Conditions</a></li>
              </ul>
            </div>
           
            <div className="flex flex-col gap-[10px] min-w-[108px]">
              <h3 className="font-['DM_Sans'] text-[16px] font-semibold leading-[28px] text-[rgba(242,245,252,1)]">Quick Links</h3>
              <ul className="space-y-2 text-[rgba(242,245,252,0.7)]">
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">Sign Up</a></li>
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">Sign In</a></li>
                <li><a href="#" className="opacity-50 font-['DM_Sans'] text-[18px] font-medium">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          
          <div className="flex-1 max-w-[595px] bg-[rgba(15,28,31,1)] rounded-[12px] p-[24px] flex flex-col gap-4">
            <h3 className="font-['DM_Sans'] text-[16px] font-semibold leading-[28px] text-[rgba(242,245,252,1)]">Subscribe</h3>
            <div className="flex gap-2">
              <input
                type="email"
                value={user}
                onChange={(e)=>setUser(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border border-[rgba(22,24,41,1)] rounded-[6px] px-4 py-2 bg-[rgba(13,13,18,1)] text-[rgba(242,245,252,1)] opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center"
              />
              <button className="bg-[rgba(249,168,36,1)] px-4 py-2 rounded-[6px] hover:bg-yellow-500 transition text-[rgba(13,13,18,1)] font-semibold" onClick={()=>handleChange()}>
                →
              </button>
            </div>
            <p className="text-[rgba(242,245,252,0.7)] text-sm opacity-50">
              Hello, we are ABC, trying to make an effort to put the right people for you to get the best results. Just insight
            </p>
          </div>
        </div>
 
        <div className="text-[14px] pt-6 text-center text-[rgba(242,245,252,0.7)]">
          © 2026 PracAI. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

