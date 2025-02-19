import React from 'react';
import { motion } from 'framer-motion';
import Statusbar from './statusbar'

const AnimteModal = ({StatusbarComponent, statusbarProps}) => {
  const springUpAnimation = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <>
    <div className='h-screen absolute w-full opacity-80 bg-slate-400'/>
        <div className="h-screen items-center w-full absolute flex justify-center z-50">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={springUpAnimation}
           
          >
            <StatusbarComponent
             {...statusbarProps}
            />
          </motion.div>
        </div>
        </>
   
  );
};

export default AnimteModal;
