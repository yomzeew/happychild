import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
const Register=()=>{
    const [Email,setEmail]=useState('') 
    const [password,setpassword]=useState('')
     
      const handleChange=(event)=>{
        setEmail(event.target.value)

      }
      const handleChangepassword=(event)=>{
        setpassword(event.target.value)

      }
    return(
       
        <div className="w-full h-screen">
            <div className='flex md:flex-row flex-col'>
                <div className='md:h-screen h-72 bg-cover bg-center bg-no-repeat bg-bgside md:w-1/2 w-full py-5'>
                    <div className='text-white text-lg h-12 bg-slate-700 opacity-70 px-5 flex items-center'><a className='flex items-center' href='/'><i className='fa fa-2x fa-home text-creamcolor'></i>&nbsp;Go to Home</a></div>
                </div>
                <div className='flex flex-col px-5 md:w-1/2 w-full md:py-10 py-5'>
                    <div className='fredoka text-lg flex md:justify-end justify-center'>Already have an account?&nbsp;<span className='text-bluecolor'>Login</span></div>
                    <div className='flex-1 flex flex-col justify-center items-center md:mt-0 mt-5'>
                        <div>
                            <div className='text-4xl text-creamcolor potta-one-regular text-center'>Sign Up</div>
                            <div className="text-sm fredoka text-center">Enter your correct details to login to your account</div>
                        </div>
                        <div className='md:w-1/2 mt-10 w-5/6'>
                            <TextField
                             label="Email Address"
                             variant="outlined"
                             value={Email}
                             defaultValue={''}
                             onChange={(event) => {
                                setEmail(event.target.value);
                              }}
                             fullWidth
                             
                            
                            />

                        </div>
                        <div className='md:w-1/2 mt-3  w-5/6'>
                            <TextField
                             label="Password"
                             variant="outlined"
                             value={password}
                             onChange={(event) => {
                                setpassword(event.target.value);
                              }}
                             fullWidth  
                             type='password' 
                            />

                        </div>
                        <div className='md:w-1/2 mt-1  w-5/6'>
                         <div className='w-full text-right'>Forget Password?</div>
                        </div>
                        <div className='md:w-1/2 mt-5  w-5/6'>
                        <button className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Sign up</button>
                        </div>

                    </div>

                </div>
                

            </div>
           
         </div>
        

    )
}
export default Register