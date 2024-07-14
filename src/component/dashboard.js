import { useState } from "react"
import logopng from './images/logopng.png'
import dashbaordicon from './images/dashboardicon.svg'
import profileicon from './images/profileicon.svg'
import logouticon from './images/logouticon.svg'
import websiteicon from './images/websiteicon.svg'
import calendaricon from './images/calendaricon.svg'
import { Navigations, Navigationsmobile } from "./dashboardcomponent/navigation"
import DashboardHome from "./dashboardcomponent/dashboardhome"

const Dashboard=()=>{
    const [onchangewidth,setonchangewidth]=useState(false)
    const [showpage,setshowpage]=useState('dashboard')
    const handlewidth=()=>{
        setonchangewidth(!onchangewidth)
    }
    const handleshowpage=(value)=>{
        console.log(value)
        setshowpage(value)
    }
    return(
        <>
        <div className="w-screen h-screen flex">
            <div className="md:block hidden w-1/6 h-screen bg-slate-50 px-5 ">
            <div>
                <div className="pt-5">
                    <img src={logopng} className="w-16 h-auto object-fit"/>
                <div className='potta-one-regular md:text-sm text-bluecolor text-xs'>HappyChild</div>
                </div>
                <div className="mt-10">
                <Navigations
                handleshowpage={(value)=>handleshowpage(value)}
                />

                </div>
              
                
            </div>

            </div>
            <div className={`md:hidden block absolute ${onchangewidth?'w-56':'w-16'} bg-slate-100 h-screen px-3 cursor-s-resize`}>
                <div onClick={handlewidth} className={`absolute top-1/2  ${onchangewidth?'left-52':'left-12'} `}><i className={`text-slate-400 opacity-70 fa fa-2x ${onchangewidth?'fa-arrow-circle-o-left':'fa-arrow-circle-o-right'}  `}></i></div>
            <div>
            <div className="flex items-center gap-3 pt-5">
                {!onchangewidth &&<i onClick={handlewidth} className="fa text-bluecolor fa-bars"></i>}
                {onchangewidth &&<div>
                    <img src={logopng} className="w-12 h-auto object-fit"/>
                    <div className='potta-one-regular md:text-sm text-bluecolor text-xs'>HappyChild</div>
                </div>}
                

            </div>
            <div className="pt-5">  
                <Navigationsmobile
                onchangewidth={onchangewidth}
                />
                </div>
               
           

            </div>
           

            </div>

            <div style={{backgroundColor:'#F7F7F7'}} className="md:flex-1 md:ml-0 ml-16 w-full h-screen">
               {showpage==='dashboard' &&<DashboardHome/>}
            </div>
        </div>
        </>

    )
}
export default Dashboard