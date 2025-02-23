import { useEffect, useState } from "react";
import { getinvoiceid } from "../../endpoints/apiurl";

const Paymentpage=({invoiceid})=>{
    const[totalmaount,settotalmaount]=useState('')
    const [checkin,setcheckin]=useState('')
    const [patternschedule,setpatternschedule]=useState('')
    const [enddate,setenddate]=useState('')

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
        const payload={invoiceid}
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
            settotalmaount(data.amount)
            setinvoiceidformat('000'+data.id)
            setcheckin(data.check_in)
            getNextDate(data.check_in,data.schedulepattern)

            settimehours(data.timeslots.length)
            const gettimerange=convertTo12HourFormat(data.timeslots)
            setpatternschedule(data.schedulepattern)
            console.log(response.data)


    }
    catch(error){
        console.log(error)

    }

}
useEffect(()=>{
    gethandledata()
    
},[])
    const SendEmail=()=>{ 
        const days=patternschedule
        const data= {invoiceid,startdate,enddate,days}

    }
    return(
        <div className="w-full flex justify-center">
            <div className='w-72 md:w-105  bg-slate-100 rounded-2xl px-3 py-5'>
                <div>You are Make Payment for {}days</div>
                <div>From 12 June,2024</div>
                <div>End 26 June,2024</div>
                <div>Total Amount:{totalmaount}</div>
                <div className="text-center font-bold fredoka">Check Your Email for Payment details</div>
                <div className="flex justify-center"><div className="bg-bluecolor rounded-2xl text-white w-8 h-8 items-center flex justify-center">Ok</div></div>

                </div>
                </div>
    )
}
export default Paymentpage