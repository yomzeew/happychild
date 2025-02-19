import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { loginurl } from '../endpoints/apiurl';
import axios from 'axios';
import { useAuth } from '../Authroute/Auth';
import Loader from './preloader/loader';
const Login=()=>{
    const [Email,setEmail]=useState('') 
    const [password,setpassword]=useState('')
    const [emailerror,setemailerror]=useState(false)
    const [passworderror,setpassworderror]=useState(false)
    const [errormsg,seterrormsg]=useState('')
    const [preloader,setpreloader]=useState(false)
    const { login,isAuthenticated } = useAuth();
   
  
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
      return emailRegex.test(email);
    };
    const handlesubmit = async () => {
      console.log(Email + password);
      
      // Email validation
      if (!Email) {
        setemailerror(true);
        return;
      }
      if (!validateEmail(Email)) {
        setemailerror(true);
        return;
      }
    
      // Password validation
      if (password.length < 6) {
        setpassworderror(true);
        return;
      }
    
      try {
        setpreloader(true);
        const data = { email: Email, password: password };
        
        const response = await axios.post(loginurl, data);
        
        // Ensure response and response.data are defined before accessing response.data.auth
        if (response && response.data && response.data.auth === true) {
          login(response.data.token);
          

        } 
      } catch (error) {
        console.log(error.response?.data?.message || error.response?.data || error.message);
        seterrormsg(error.response?.data?.message || error.response?.data || error.message);
      } finally {
        setpreloader(false);
      }
    };
    
    return(
       <>
       {preloader &&<div className='h-screen w-full absolute z-50'><Loader/></div>}
        <div className="w-full h-screen">
            <div className='flex md:flex-row flex-col'>
            <div className='md:h-screen h-72 bg-cover bg-center bg-no-repeat bg-bgside md:w-1/2 w-full py-5'>
                    <div className='fixed w-full md:w-1/2 text-white text-lg h-12 bg-slate-700 opacity-70 px-5 flex items-center'><a className='flex items-center' href='/'><i className='fa fa-2x fa-home text-creamcolor'></i>&nbsp;Go to Home</a></div>
                </div>
                <div className='flex flex-col px-5 md:w-1/2 w-full md:py-10 py-5'>
                    <div className='fredoka text-lg flex md:justify-end justify-center'>Don’t have an account?&nbsp;<span className='text-bluecolor'><a href='/register'>Sign up</a></span></div>
                    <div className='flex-1 flex flex-col justify-center items-center md:mt-0 mt-5'>
                        <div>
                            <div className='text-4xl text-creamcolor potta-one-regular text-center'>Login</div>
                            <div className="text-sm fredoka text-center">Enter your correct details to login to your account</div>
                        </div>
                        <div className='md:w-1/2 mt-10 w-5/6'>
                        <div className='text-red-500 text-sm mb-3 text-center'>{errormsg}</div>
                            <TextField
                             label="Email Address"
                             value={Email}
                             onChange={(event) => {
                                setEmail(event.target.value);
                              }}
                             fullWidth
                             error={emailerror}
                             id="outlined-error-helper-texttwo"
                             helperText={emailerror?'Incorrect entry.':''}
                             autoComplete='off'
                            
                            />

                        </div>
                        <div className='md:w-1/2 mt-3  w-5/6'>
                            <TextField
                             label="Password"
                             value={password}
                             onChange={(event) => {
                                setpassword(event.target.value);
                              }}
                             fullWidth  
                             type='password'
                             error={passworderror}
                             id="outlined-error-helper-text"
                             helperText={passworderror?'Password must not less than 6 character.':''}
                             autoComplete='off'

                            />

                        </div>
                        <div className='md:w-1/2 mt-1  w-5/6'>
                         <div className='w-full text-right cursor-pointer'>Forget Password?</div>
                        </div>
                        <div className='md:w-1/2 mt-5  w-5/6'>
                        <button onClick={handlesubmit} className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Login</button>
                        </div>

                    </div>

                </div>
                

            </div>
           
         </div>
         </>
        

    )
}
export default Login