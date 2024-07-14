import { useState } from "react"
import dashbaordicon from '../images/dashboardicon.svg'
import profileicon from '../images/profileicon.svg'
import logouticon from '../images/logouticon.svg'
import websiteicon from '../images/websiteicon.svg'
import calendaricon from '../images/calendaricon.svg'
export const Navigations=(props)=>{
const [activelink,setactivelink]=useState('dashboard')
const activelinkstyle="bg-blue-300"
const defaultlinkstyle="bg-slate-300"
const handlenavclick=(value)=>{
    setactivelink(value)
    props.handleshowpage(value)

}
    return(
        <div>
           <a href="#" onClick={()=>handlenavclick('dashboard')}><div className={`flex gap-3 items-center ${activelink==='dashboard'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg`}>
                    <img src={dashbaordicon} />
                    <div className="fredoka md:text-sm text-bluecolor text-xs">Dashboard</div>
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('profile')}><div className={`flex gap-3 items-center ${activelink==='profile'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                    <img src={profileicon} />
                    <div className="fredoka md:text-sm text-bluecolor text-xs">Profile</div>
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('calendar')}> <div className={`flex gap-3 items-center ${activelink==='calendar'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                    <img src={calendaricon} />
                    <div className="fredoka md:text-sm text-bluecolor text-xs">Appointment Schedule</div>
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('website')}><div className={`flex gap-3 items-center ${activelink==='website'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                    <img src={websiteicon} />
                    <div className="fredoka md:text-sm text-bluecolor text-xs">Back to Company Website</div>
                    
                </div>
                </a>
                <div className="flex gap-3 items-center px-3 py-3 rounded-lg mt-5">
                    <img src={logouticon} />
                    <div className="fredoka md:text-sm text-red-500 text-xs">Logout</div>
                    
                </div>
        </div>
    )

}
export const Navigationsmobile=(props)=>{
    const [activelink,setactivelink]=useState('dashboard')
    const activelinkstyle="bg-blue-300"
    const defaultlinkstyle="bg-slate-300"
    const handlenavclick=(value)=>{
        setactivelink(value)
    
    }
        return(
            <div>
                    <a href="#" onClick={()=>handlenavclick('dashboard')}><div className={`flex gap-3 items-center ${activelink==='dashboard'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg`}>
                    <img src={dashbaordicon} />
                    {props.onchangewidth &&<div className="fredoka md:text-sm text-bluecolor text-xs">Dashboard</div>}
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('profile')}><div className={`flex gap-3 items-center ${activelink==='profile'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                    <img src={profileicon} />
                    {props.onchangewidth &&<div className="fredoka md:text-sm text-bluecolor text-xs">Profile</div>}
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('calendar')}><div className={`flex gap-3 items-center ${activelink==='calendar'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                    <img src={calendaricon} />
                    {props.onchangewidth &&<div className="fredoka md:text-sm text-bluecolor text-xs">Appointment Schedule</div>}
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('website')}><div className={`flex gap-3 items-center ${activelink==='website'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                    <img src={websiteicon} />
                    {props.onchangewidth &&<a><div className="fredoka md:text-sm text-bluecolor text-xs">Back to Company Website</div></a>}
                    
                </div>
                </a>
                <div className="flex gap-3 items-center px-3 py-3 rounded-lg mt-5">
                    <img src={logouticon} />
                    {props.onchangewidth &&<div className="fredoka md:text-sm text-red-500 text-xs">Logout</div>}
                    
                </div>

                </div>
         
        )
    
    }
