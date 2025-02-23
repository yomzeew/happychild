import { useEffect, useRef, useState } from 'react'
import logo from '../images/logopng.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { getinvoiceid } from '../../endpoints/apiurl';
import axios from 'axios';
import { convertDateFormat, convertTo12HourFormat } from '../services/timerange';
import Paymentpage from './paymentPage';
import AnimteModal from '../modals/animateModal';
const  InvoicePayment=({showpagepayment,invoiceid})=>{
    const [parentname,setparentname]=useState('')
    const [childname,setchildname]=useState('')
    const [totalmaount, settotalmaount]=useState(0)
    const [paymentstatus,setpaymentstatus]=useState('')
    const [invoiceidformat,setinvoiceidformat]=useState('')
    const [invoicedate,setinvoicedate]=useState('')
    const [timehours,settimehours]=useState('')
    const [TimeRange, setTimeRange]=useState('')
    const [paymentStatus,setpaymentStatus]=useState('')
    const [patternschedule,setpatternschedule]=useState('')
    const [showPayment,setshowPayment]=useState(false)
    console.log(invoiceid)
    const currentRef=useRef(null)
    const gethandledata=async()=>{
        const payload={id:invoiceid}
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
            setchildname(data.child_fullname)
            setparentname(data.fullname)
            settotalmaount(data.amount)
            setinvoiceidformat('000'+data.id)
            
            settimehours(data.timeslots.length)
            const gettimerange=convertTo12HourFormat(data.timeslots)
            setTimeRange(gettimerange)
            setinvoicedate(convertDateFormat(data.created_at))
            setpaymentStatus(data.payment_status)
            setpatternschedule(data.schedulepattern)
            console.log(response.data)


    }
    catch(error){
        console.log(error.response?.data?.message || error.response?.data || error.message);
    }
}
useEffect(()=>{
    gethandledata()
},[])
    const downloadInvoice = async () => {
        const element = currentRef.current;
        const canvas = await html2canvas(element, {
            scale: window.devicePixelRatio, // Enhance the quality
            useCORS: true,
            logging: true
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);
        const imgWidth = canvasWidth * ratio;
        const imgHeight = canvasHeight * ratio;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`invoice_${invoiceid}.pdf`);
    };
    const handleshowPayment=()=>{
        setshowPayment(true)

    }
    const statusbarPropsupdate={
        invoiceid:invoiceid,
        setshowPayment:(value)=>setshowPayment(value)
    }
    return (
        <>
        {showPayment &&
            <>
            {/* <div className="h-screen w-full left-0  flex justify-center items-center z-30 bg-slate-700 opacity-70 absolute -mt-24"/> */}
            <div className="h-screen w-full xl:left-0 lg:left-0 md:left-16 left-7  flex justify-center items-center z-40 absolute -mt-24">
            <AnimteModal
            StatusbarComponent={Paymentpage}
            statusbarProps={statusbarPropsupdate}
            />
            </div>
            </>
           
     
        }
        <div className="w-full flex justify-center">
            <div className='w-72 md:w-105  bg-slate-100'>
            <div ref={currentRef} className=" px-5 py-5 w-full fredoka bg-slate-100 ">
            <div className="font-thin text-2xl text-bluecolor">Booking Invoice</div>
            <div className="flex justify-between mt-5 items-center">
            <div><img src={logo} className='object-fit h-12 w-12'/><p className='potta-one-regular text-bluecolor'>HappyChild</p></div>
                <div>
                <div>Invoice Number</div>
                <div>#{invoiceidformat}</div>
                <div>{invoicedate}</div>

                </div>
          
            </div>
          
            <div className="text-xl font-thin mt-3 capitalize"><p>Bill to:</p><p>{parentname}</p><div>
                </div></div>
            <div className='capitalize'><p></p>Child Name:<p>{childname}</p></div>
            <div>Time Slot:{TimeRange}</div>
            <div className='flex  w-full justify-evenly gap-1 text-sm mt-3'>
                <div className='bg-blue-200 w-full flex justify-center h-8 items-center '>
                    Hours
                </div>
                <div className='bg-blue-200 w-full flex justify-center h-8 items-center '>
                    Rate
                </div>
                <div className='bg-blue-200 w-full flex justify-center h-8 items-center '>
                Days
                </div>
                <div className='bg-blue-200 w-full flex justify-center h-8 items-center '>
                    Total Amount
                </div>

            </div>
            <div className='flex  w-full justify-evenly gap-1'>
                <div className='bg-bluecolor w-full flex justify-center h-8 md:text-sm text-xs items-center text-white '>
                   {timehours}
                </div>
                <div className='bg-bluecolor w-full flex justify-center h-8 md:text-sm text-xs items-center text-white '>
                    2.1 GBP
                </div>
                <div className='bg-bluecolor w-full flex justify-center h-8 md:text-sm text-xs items-center text-white '>
                    {patternschedule} days
                </div>
                <div className='bg-bluecolor w-full flex justify-center h-8 md:text-sm text-xs items-center text-white '>
                    {totalmaount}GBP
                </div>

            </div>
            <div className='font-bold'><p>Total Amount:</p><p>{totalmaount} GBP</p></div>
            <div className='text-red-500'>Payment Status:{paymentStatus===0?'Not Yet Paid':'Paid'}</div>
           
            



        </div>
        <div className='w-full flex justify-between gap-5'>
            <button onClick={handleshowPayment} className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl mt-5 fredoka">Make Payment</button>
            <button onClick={downloadInvoice} className="px-8  w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl mt-5 fredoka">Download Invoice</button>

            </div>

            </div>
       

        </div>
       
        </>
    )

}
export default InvoicePayment