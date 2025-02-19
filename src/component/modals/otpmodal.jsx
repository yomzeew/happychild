// OtpInput.js
import React, { useRef, useState,useEffect } from 'react';
import { verifyotp } from '../../endpoints/apiurl';
import axios from 'axios';
import successicon from '../images/successicon.svg'

const OtpInput = ({title,message,handleshowstatus}) => {
const [timeLeft,setTimeLeft]=useState(300)
const [joinedOtp, setJoinedOtp] = useState('');
const [otp,setOtp]=useState(["","","",""])
const [showstatus,setshowstatus]=useState(false)
const [errormsg,seterrormsg]=useState('')

useEffect(() => {
  setJoinedOtp(otp.join(''));
}, [otp]);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  // sec format 
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  const handleverify=async()=>{
    seterrormsg('')
    const token=localStorage.getItem('token') 
    if (!token) {
        console.error('Token not found');
        return;
    }
    try{
        const data={otp:joinedOtp}
        const response=await axios.post(verifyotp,data,{
            headers:{
                "authorization":`Bearer ${token}`    
            }
        })
        if(response.data.message==='OTP verified successfully'){
            setshowstatus(true)
           console.log('sent')
        }  
    }
    catch(error){
        console.log(error.response?.data?.message || error.response?.data || error.message);
        seterrormsg(error.response?.data?.message || error.response?.data || error.message)
    }
    

}

  return (
    <>
    {showstatus?
    <div className='md:w-72 relative z-50 w-64 h-72 bg-slate-50 flex justify-center items-center shadow-lg shadow-slate-800 rounded-2xl px-3'>
        <div>
        <div className='w-full flex justify-center'>
            <img src={successicon} className='w-24 h-24 object-contain' />
            </div>
           
            <div className='w-full flex justify-center fredoka mt-2 text-xl font-bold'>
            Email Verify
            </div>
            <div className='flex justify-center mt-3'>
            <button onClick={handleshowstatus} className="px-3 text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">OK</button>

            </div>
        

        </div>
         

    </div>:
    <div className='md:w-72 relative z-50 w-64 h-72 bg-slate-50 flex justify-center items-center shadow-lg shadow-slate-800 rounded-2xl px-3'>
        <div>
            <div className="justify-center flex w-full">
            <div className='h-16 w-16 bg-bluecolor rounded-full flex justify-center items-center text-white font-semibold'>{formatTime(timeLeft)}</div>

            </div>
        
    <div className='w-full flex justify-center fredoka mt-3 text-lg font-bold'>
            {title}
            </div>
            <div className='w-full flex justify-center fredoka text-center font-semibold text-sm'>
                {message}
            </div>
    <div>
        <div className='flex justify-center text-red-500 font-semibold'>{errormsg}</div>
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={data}
          onChange={e => handleChange(e.target, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          ref={el => (inputRefs.current[index] = el)}
          className='w-10 h-10 text-center mx-1 text-lg border border-bluecolor rounded-xl'
        />
      ))}
    </div>
    <div className='w-full flex justify-center mt-3 px-5'>
            <button onClick={handleverify} className="px-3 text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Verify Otp</button>

            </div>
            </div>
    </div>}
    </>
    
  );
};

export default OtpInput;
