import { useState } from "react"
import dashbaordicon from '../images/dashboardicon.svg'
import profileicon from '../images/profileicon.svg'
import logouticon from '../images/logouticon.svg'
import websiteicon from '../images/websiteicon.svg'
import calendaricon from '../images/calendaricon.svg'
import { DatabaseOutlined, SettingOutlined } from "@ant-design/icons"
import { useAuth } from "../../Authroute/Auth"

export const NavigationsAdmin=(props)=>{
const [activelink,setactivelink]=useState('dashboard')
const activelinkstyle="bg-blue-300"
const defaultlinkstyle="bg-slate-300"
const handlenavclick=(value)=>{
    setactivelink(value)
    props.handleshowpage(value)

}
const {logout}=useAuth()
    return(
        <div>
           <a href="#" onClick={()=>handlenavclick('dashboard')}><div className={`flex gap-3 items-center ${activelink==='dashboard'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg`}>
                    <img src={dashbaordicon} />
                    <div className="fredoka md:text-sm text-bluecolor text-xs">Dashboard</div>
                    
                </div>
                </a>
               
                <a href="#" onClick={()=>handlenavclick('booking')}><div className={`flex gap-3 items-center ${activelink==='profile'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                <DatabaseOutlined className="text-bluecolor" />
                    <div className="fredoka md:text-sm text-bluecolor text-xs">Booking Records</div>
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('settings')}> <div className={`flex gap-3 items-center ${activelink==='calendar'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                <SettingOutlined className="text-bluecolor" />
                    <div className="fredoka md:text-sm text-bluecolor text-xs">Settings</div>
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('website')}><div className={`flex gap-3 items-center ${activelink==='website'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                    <img src={websiteicon} />
                    <div className="fredoka md:text-sm text-bluecolor text-xs">Back to Company Website</div>
                    
                </div>
                </a>
                <a href="#" onClick={()=>logout()}>
                <div className="flex gap-3 items-center px-3 py-3 rounded-lg mt-5">
                    <img src={logouticon} />
                    <div className="fredoka md:text-sm text-red-500 text-xs">Logout</div>
                    
                </div>
                </a>
        </div>
    )

}
export const NavigationsmobileAdmin=(props)=>{
    const [activelink,setactivelink]=useState('dashboard')
    const activelinkstyle="bg-blue-300"
    const defaultlinkstyle="bg-slate-300"
    const handlenavclick=(value)=>{
        setactivelink(value)
        props.handleshowpage(value)
    
    }
    const {logout}=useAuth()
        return(
            <div className="relative z-50">
                    <a href="#" onClick={()=>handlenavclick('dashboard')}><div className={`flex gap-3 items-center ${activelink==='dashboard'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg`}>
                    <img src={dashbaordicon} />
                    {props.onchangewidth &&<div className="fredoka md:text-sm text-bluecolor text-xs">Dashboard</div>}
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('booking')}><div className={`flex gap-3 items-center ${activelink==='profile'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                <DatabaseOutlined className="text-bluecolor" />                    
                {props.onchangewidth &&<div className="fredoka md:text-sm text-bluecolor text-xs"></div>}
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('settings')}><div className={`flex gap-3 items-center ${activelink==='calendar'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                <SettingOutlined className="text-bluecolor" />
                    {props.onchangewidth &&<div className="fredoka md:text-sm text-bluecolor text-xs">Settings</div>}
                    
                </div>
                </a>
                <a href="#" onClick={()=>handlenavclick('website')}><div className={`flex gap-3 items-center ${activelink==='website'?activelinkstyle:defaultlinkstyle}  px-3 py-3 rounded-lg mt-3`}>
                    <img src={websiteicon} />
                    {props.onchangewidth &&<a><div className="fredoka md:text-sm text-bluecolor text-xs">Back to Company Website</div></a>}
                    
                </div>
                </a>
                <a href="#" onClick={()=>logout()}>
                <div className="flex gap-3 items-center px-3 py-3 rounded-lg mt-5">
                    <img src={logouticon} />
                    {props.onchangewidth &&<div className="fredoka md:text-sm text-red-500 text-xs">Logout</div>}
                    
                </div>
                </a>

                </div>
         
        )
    
    }
