import { useEffect, useState } from "react";
import { getinvoiceid } from "../../endpoints/apiurl";
import { sendemailfunc } from "../../fetchdata/fetchdata";
import axios from "axios";

const Paymentpage=({invoiceid,setshowPayment})=>{
    const[totalmaount,settotalmaount]=useState('')
    const [checkin,setcheckin]=useState('')
    const [patternschedule,setpatternschedule]=useState('')
    const [enddate,setenddate]=useState('')
    const [showloader,setShowLoader]=useState(false)
    const convertDate = (dateTimeStr) => {
        if (!dateTimeStr) return "Invalid Date"; // Handle undefined/null values
        const date = new Date(dateTimeStr);
        if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid date formats
        return date.toISOString().split('T')[0];
    };
      
    const getNextDate = (dateInput, days) => {
        if(!dateInput && !days){
            return
        }
        // Create a new Date object from the provided dateInput
        const date = new Date(dateInput);
        // Add the specified number of days
        date.setDate(date.getDate() + days);
        // Return the updated date
        return date.toISOString().split("T")[0];
      };
    const gethandledata=async()=>{
        const payload={id:invoiceid}
        console.log(invoiceid)
        try {
            const token=localStorage.getItem('token')
            if (!token) {
                console.error('Token not found');
                return;
            }
           const response= await axios.post(getinvoiceid,payload,{
                headers:{
                    "authorization":`Bearer ${token}`
                }
            });
            const data=response.data.data[0]
            console.log(response.data.data[0])
            settotalmaount(data.amount)
          
            setcheckin(data.checkin)
            const getdate=await getNextDate(data.checkin,data.schedulepattern)
            setenddate(getdate)
            setpatternschedule(data.schedulepattern)


    }
    catch(error){
        console.log(error)

    }

}
useEffect(()=>{
    gethandledata()
},[])

    const SendEmail=async()=>{ 
        
        const days=patternschedule
        const startdate=convertDate(checkin)
        const data= {invoiceid,startdate,enddate,days}
         const response=await sendemailfunc(data,setShowLoader)
                if(response.success){
                    alert('Check your Email')
                    setshowPayment(false)
                }
                else{
                    console.log(response.message)
                }
    }
    return(
        <div className="w-full flex justify-center">
            <div className='w-72 md:w-105  bg-slate-100 rounded-2xl px-3 py-5'>
                <div>You are Make Payment for {patternschedule}days</div>
                <div>From {convertDate(checkin)}</div>
                <div>End {enddate}</div>
                <div>Total Amount:{totalmaount}</div>
                <div className="text-center font-bold fredoka">Check Your Email for Payment details</div>
                <div className="flex justify-center">
                    <div onClick={SendEmail} className="bg-bluecolor cursor-pointer rounded-2xl text-white w-8 h-8 items-center flex justify-center">Ok</div></div>

                </div>
                </div>
    )
}
export default Paymentpage