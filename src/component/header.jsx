import React, { useState } from 'react';
import CustomButton from './widget/button'
import {bluecolor} from './colors/colors'
import { Button, ButtonGroup } from '@chakra-ui/react'
import logopng from './images/logopng.png'
import 'font-awesome/css/font-awesome.min.css';
import Sidemenu from './modals/sidemenu'
function Header({overlay}) {
  const [showmenu,setshowmenu]=useState(false)
  const handleClickshow = () => {
    setshowmenu(!showmenu)
    overlay(!showmenu)
  };
  const handleclose=(value)=>{
    setshowmenu(value)
    overlay(value)
  }
  
  return (
    <>
  
    <div className="lg:block md:block hidden w-full">
       <div className="h-16  px-5 flex items-center flex-row justify-between fredoka ">
     <div className="font-bold text-xl w-1/3">
      <img src={logopng} className='w-10 h-auto object-contain' />
      <div className='potta-one-regular md:text-sm text-bluecolor text-xs'>HappyChild</div>
     </div>
     <div className=" w-2/3">
     <div className=" flex flex-row justify-between items-center ">
      <div><a href="/">Home</a></div>
      <div><a href="/">About Us</a></div>
      <div><a href="/">Services</a></div>
      <div><a href="/">Contact Us</a></div>
      <a href='/started'><button className="px-8 text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl">Get Started</button></a>
      


     </div>
   

     </div>
  
    </div>

    </div>
   
       <div className="lg:hidden md:hidden block w-full ">
       {showmenu &&
        <Sidemenu
        close={(value)=>handleclose(value)}
       />} 
       <div className=" h-16 flex flex-row items-center justify-between px-5">
       <div className="font-bold text-xl w-1/3">
       <img src={logopng} className='w-10 h-auto object-contain' />
       <div className='potta-one-regular md:text-sm text-bluecolor text-xs'>HappyChild</div>
     </div>
     <div>
      <i onClick={handleClickshow} className="fa fa-bars text-bluecolor"></i>
     </div>
       </div>
       </div>
       </>
        
  );
}

export default Header;
