import { useState } from 'react';
function Sidemenu({close}) {
const handleclose=()=>{
  close(false)
}
  return (
    <div className="absolute flex flex-col bg-slate-100  h-screen w-2/3 right-0 text-sm  px-5">
      <div className='flex justify-end mt-3'><i onClick={handleclose} className='fa fa-times-circle fa-2x'></i></div>
      <div className="w-full mt-10">
      <div  className='mt-5'><a className='hover:border-b-bluecolor border-b-2 active:border-bluecolor' href="/">Home</a></div>
      <hr className="w-full border-b border-slate-800"/>
      <div className='mt-5'><a className='hover:border-b-bluecolor border-b-2 active:border-bluecolor' href="/aboutus">About Us</a></div>
      <hr className="w-full border-b border-slate-800"/>
      <div className='mt-5'><a className='hover:border-b-bluecolor border-b-2 active:border-bluecolor' href="/services">Services</a></div>
      <hr className="w-full border-b border-slate-800"/>
      <div className='mt-5'><a className='hover:border-b-bluecolor border-b-2 active:border-bluecolor' href="/contactus">Contact Us</a></div>
      <hr className="w-full border-b border-slate-800"/>
      </div>
   
      <a href='/started'><button className="px-8 text-white h-12 active:bg-blue-900 bg-bluecolor rounded-xl mt-5">Get Started</button></a>

        </div>
  );
}

export default Sidemenu;
