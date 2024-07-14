import { useState } from "react"
import logopng from './images/logopng.png'

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
                
            </div>

            </div>
            <div  onClick={handlewidth} className={`md:hidden block ${onchangewidth?'w-44':'w-16'} bg-slate-100 h-screen px-3 cursor-s-resize`}>
            <div>
            <div className="flex gap-3 pt-3">
                <i className="fa text-bluecolor fa-bars"></i>
                {onchangewidth &&<div>
                    <img src={logopng} className="w-12 h-auto object-fit"/>
                    <div className='potta-one-regular md:text-sm text-bluecolor text-xs'>HappyChild</div>
                </div>}
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