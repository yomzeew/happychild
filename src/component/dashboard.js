import { useState } from "react"
import logopng from './images/logopng.png'
import dashbaordicon from './images/dashboardicon.svg'
import profileicon from './images/profileicon.svg'
import logouticon from './images/logouticon.svg'
import websiteicon from './images/websiteicon.svg'
import calendaricon from './images/calendaricon.svg'
import { Navigations, Navigationsmobile } from "./dashboardcomponent/navigation"

const Dashboard=()=>{
    const [onchangewidth,setonchangewidth]=useState(false)
    const handlewidth=()=>{
        setonchangewidth(!onchangewidth)
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
                />

                </div>
              
                
            </div>

            </div>
            <div className={`md:hidden block ${onchangewidth?'w-56':'w-16'} bg-slate-100 h-screen px-3 cursor-s-resize`}>
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

            
            <div style={{backgroundColor:'#F7F7F7'}} className="flex-1  h-screen">
                main
            </div>

        </div>
        </>

    )
}
export default Dashboard