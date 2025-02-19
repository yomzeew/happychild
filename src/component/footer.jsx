import React from 'react';
import logo from '../component/images/logopng.png'

function Footer() {
  return (
    <div className='bg-bluecolor w-full py-5'>
    <div className="md:h-64 text-color md:gap-x-0 gap-y-10 fredoka flex md:flex-row flex-col justify-around text-white items-center h-auto w-full bg-bluecolor px-5 py-6">
      <div className="w-full md:w-1/3 flex justify-center flex-col items-center">
      <div>
      <div className='w-full flex justify-center'> <img src={logo} className='h-auto w-16 object-contain' /></div>
                <div className='potta-one-regular text-lg w-full flex justify-center'>AppyChild</div>
                <div className='text-sm md:text-left text-center md:mt-0 mt-1'>
                +44-77766344406
                </div>
                <div className='text-sm md:text-left text-center md:mt-0 mt-1'>
                  info@appychild.uk
                </div>


      </div>
                
      </div>
      <div className="w-full flex-col flex items-center md:w-1/3">
      <div className='font-bold text-2xl text-center'>
        Quick link
      </div>
      <div className='md:w-72 w-full flex md:flex-row flex-col md:justify-between items-center'>
        <div className='flex flex-col md:items-start items-center'>
          <div>Home</div>
          <div>Services</div>
        </div>
        <div className='flex flex-col items-center'>
          <div>About</div>
          <div>Contact us</div>
        </div>

      </div>

      </div>
      <div className="w-full flex flex-col items-center md:w-1/3">
      <div>Social media</div>
                <div className='flex gap-2 flex-row mt-3'>
                    <div className='flex flex-row justify-center items-center border border-slate-300 rounded-full h-10 w-10'><div><i className='fa  fa-facebook-f'></i></div></div>
                    <div className='flex flex-row justify-center items-center border border-slate-300 rounded-full h-10 w-10'><i className='fa  fa-twitter'></i></div>
                    <div className='flex flex-row justify-center items-center border border-slate-300 rounded-full h-10 w-10'><i className='fa  fa-instagram'></i></div>
                  

                </div>


      </div>
     
       

    </div>
    <hr className='border border-slate-300 w-full mt-5'/>
        <div className='w-full flex justify-center'>
            <div className='text-sm mt-3 w-full text-white text-center'>
            copyright@ 2024. Appychild creche 
            </div>

        </div>
    </div>
    
  );
}

export default Footer;
