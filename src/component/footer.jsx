import React from 'react';
import logo from '../component/images/logopng.png'

function Footer() {
  return (
    <div className="md:h-64 text-color fredoka flex  text-white items-center h-auto w-full bg-bluecolor px-5 py-6">
        <div className='w-screen flex flex-col md:items-center items-start justify-center'>
        <div className='w-full md:grid md:grid-cols-3 justify-center items-center   flex flex-col'>
            <div className='flex flex-col items-center'>
                <img src={logo} className='h-auto w-16 object-contain' />
                <div className='potta-one-regular text-lg'>HappyChild</div>
                <div>
                <div className='text-sm md:text-left text-center md:mt-0 mt-3'>
                  +234 8167 3787 8237
                </div>
                <div className='text-sm md:text-left text-center md:mt-0 mt-3'>
                  happychildcreche@gmail.com
                </div>

                </div>
              

            </div>
            <div className='flex flex-col items-center  w-full mt-3 md:mt-0'>
                <div className='flex flex-col'>
                <div className='text-lg'>Quick link</div>
                <div className='md:grid md:grid-cols-2 w-full flex flex-col '>
                <div className='text-sm md:text-left text-center'>Home</div>
                <div className='text-sm md:text-left text-center'>About </div>
                <div className='text-sm md:text-left text-center'>Services</div>
                <div className='text-sm md:text-left text-center'>Contact Us</div>
                </div>

                </div>
         
               
            </div>
            <div className='flex flex-col items-center  w-full mt-3'>
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
            <div className='text-sm mt-3 w-full text-center'>
            copyright@ 2024. Happy child creche 
            </div>

        </div>
        </div>

    </div>
  );
}

export default Footer;
