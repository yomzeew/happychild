
import {useEffect, useState } from "react";
import ChildAppointment from "./childappoiment";
import InvoicePayment from "./invoicepayment";


const Appointment=()=>{
    const [showappointment,setshowapointment]=useState(true)
    const [showpage,setshowpage]=useState('booking')
    const [invoiceid,setinvoiceid]=useState('')
    const handleshowshedule=()=>{
        setshowapointment(false)
    }
    const handlepage=(value)=>{
        console.log(value)
        setshowpage(value)
    }
    const handleid=(value)=>{
        setinvoiceid(value)
    }
    const activestyle='w-8 h-8 bg-bluecolor rounded-full flex justify-center items-center text-white'
    const notactivestyle='w-8 h-8 bg-slate-300 rounded-full flex justify-center items-center text-bluecolor'
    
   
    return(
        <>
       <div className="w-full flex flex-col h-screen overflow-scroll scrollbar md:overflow-x-hidden bg-white">
        <div className="w-full z-50 fixed top-0 bg-white">
        <div className="text-bluecolor font-semibold fredoka text-4xl px-5 pt-5">Appointment</div>
        <hr className="w-full border border-slate-200 mt-1"/>
        </div>
        
        
        {showappointment?
        <div className="overflow-y-scroll scrollbar flex-auto py-5">
            <div className="px-5 mt-24">
            <div className="w-full rounded-2xl shadow-md shadow-slate-500 py-3 px-5">
             <div className="text-2xl font-semibold fredoka md:text-left text-center">Enter Your Information</div>
             <div className="text-sm fredoka md:text-left text-center mt-1">Make Sure the Information that you Have already written in your Profile is Correct.</div>
            </div>
            </div>
            <div className="px-5 mt-3">
            <div className="w-full rounded-2xl shadow-md shadow-slate-500 py-3 px-5">
             <div className="text-2xl font-semibold fredoka md:text-left text-center">You do not have any schedule at the moment</div>
             
            </div>
            </div>
            <div className='mt-5 flex justify-center' >
          <button onClick={handleshowshedule} className="px-8 md:w-72 w-56 text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl mt-5 fredoka">Book an appointment</button>

    </div></div>:
    <div className="px-5 overflow-y-scroll scrollbar flex-1 py-5">
        <div className="mt-16 px-5 flex-initial">
        <div className="flex justify-center items-center">
            <div className={`${showpage==='booking'?activestyle:notactivestyle}`}>1</div>
            <div><hr className="md:w-32 w-12 border border-slate-200 mt-1"/></div>
            <div className={`${showpage==='invoice'?activestyle:notactivestyle}`}>2</div>
            <div><hr className="md:w-32 w-12 border border-slate-200 mt-1"/></div>
            <div className={`${showpage==='payment'?activestyle:notactivestyle}`}>3</div>
        </div>

        </div>
        {showpage==='booking' &&<ChildAppointment showpageinvoice={(value)=>handlepage(value)} sendIdinvoice={(value)=>{handleid(value)}}/>}
        {showpage==='invoice' &&<InvoicePayment invoiceid={invoiceid} showpagepayment={(value)=>handlepage(value)} />}


    </div>
}
            
        </div>
       
  
       
        </>
    )
}
export default Appointment