import React from 'react';

function Card({src,title,content}) {
  return (
    <div className="w-72 shadow-md shadow-slate-500 rounded-2xl flex justify-center flex-col px-3 py-3 bg-white">
    <div className='flex-1 w-full'>
       <img src={src} className='rounded-2xl h-auto w-full' />
    </div> 
    <div className='flex flex-col justify-center items-center'>
        <div className="text-lg text-bluecolor potta-one-regular">
        {title}
        </div>
        <div className="text-center">
       {content}
        </div>
    </div>
     
    </div>
  );
}

export default Card;
