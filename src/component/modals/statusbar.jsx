import React from 'react';
import successicon from '../images/successicon.svg'
import { useNavigate } from 'react-router-dom';

function Statusbar(props) {
    const navigate=useNavigate()
   const handleroute=()=>{
    if(props.routname){
        console.log(props.routname)
        const routname=props.routname
        navigate(routname)

    }else{
        props.handleclose()

    }
   

   } 
  return (
    <>
    <div className='md:w-72 relative z-50 w-64 h-72 bg-slate-50 flex justify-center items-center shadow-lg shadow-slate-800 rounded-2xl px-3'>
        
        <div>
            <div className='w-full flex justify-center'>
            <img src={successicon} className='w-24 h-24 object-contain' />

            </div>
           
            <div className='w-full flex justify-center fredoka mt-3 text-lg font-bold'>
            {props.title}
            </div>
            <div className='w-full flex justify-center fredoka text-center font-semibold text-sm'>
                {props.message}
            </div>
            <div className='w-full flex justify-center mt-3 px-5'>
            <button onClick={handleroute} className="px-3 text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">{props.buttondetails}</button>

            </div>
           

        </div>

     
    </div>
    </>
  );
}

export default Statusbar;
