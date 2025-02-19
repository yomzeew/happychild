import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState} from 'react';
import { register } from '../endpoints/apiurl';
import axios from 'axios';
import { useAuth } from '../Authroute/Auth';
import Loader from './preloader/loader';
import Statusbar from './modals/statusbar';
import AnimteModal from './modals/animateModal';
const Register=()=>{
  const [Email,setEmail]=useState('') 
  const [password,setpassword]=useState('')
  const [confirm,setconfirm]=useState('')
  const [emailerror,setemailerror]=useState(false)
  const [passworderror,setpassworderror]=useState(false)
  const [errormsg,seterrormsg]=useState('')
  const [preloader,setpreloader]=useState(false)
  const [showpassword,setshowpassword]=useState(false)
  const [showpasswordconf,setshowpasswordconf]=useState(false)
  const [confirmerror,setconfirmerror]=useState(false)
  const [showsuccessmodal,setshowsuccesmodal]=useState(false)
  const { login } = useAuth(); 
     const handleeye=()=>{
      setshowpassword(!showpassword)
     }
     const handleeyeconf=()=>{
      setshowpasswordconf(!showpasswordconf)
     }
      const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
        return emailRegex.test(email);
      };
      const handlesubmit = async () => {
        // Email validation
        if (!Email) {
          setemailerror(true);
          return;
        }
        if (!validateEmail(Email)) {
          setemailerror(true);
          return;
        }
        if(password!==confirm){
          setconfirmerror(true)
        }
        // Password validation
        if (password.length < 6) {
          setpassworderror(true);
          return;
        }
      
        try {
          
          setpreloader(true);
          const data = { email: Email, password: password };
          const response = await axios.post(register, data);
          // Ensure response and response.data are defined before accessing response.data.auth
          if (response && response.data && response.data.message === 'successful') {
            console.log('ok')
            setshowsuccesmodal(true)
          } 
        } catch (error) {
          console.log(error.response?.data?.message || error.response?.data || error.message);
          seterrormsg(error.response?.data?.message || error.response?.data || error.message);
        } finally {
          setpreloader(false);
        }
      };
      const statusbarProps = {
        title:'Congratulations',
        message: 'Successfully Registered on Happychild Platform',
        buttondetails: 'Continue to Login',
        routename:'/started'
      };
    return(
       <>
       {
        preloader && 
        <div className='h-screen z-50 w-full absolute'>
          <Loader/>
        </div>
       }
       { showsuccessmodal &&
        <>
        
      <AnimteModal
      StatusbarComponent={Statusbar}
      statusbarProps={statusbarProps}
      />
      </>}
        <div className="w-full h-screen">
            <div className='flex md:flex-row flex-col'>
                <div className='md:h-screen h-72 bg-cover bg-center bg-no-repeat bg-bgside md:w-1/2 w-full py-5'>
                <div className='fixed w-full md:w-1/2 text-white text-lg h-12 bg-slate-700 opacity-70 px-5 flex items-center'><a className='flex items-center' href='/'><i className='fa fa-2x fa-home text-creamcolor'></i>&nbsp;Go to Home</a></div>
                </div>
                <div className='flex flex-col px-5 md:w-1/2 w-full md:py-10 py-5'>
                    <div className='fredoka text-lg flex md:justify-end justify-center'>Already have an account?&nbsp;<span className='text-bluecolor'><a href='/started'>Login</a></span></div>
                    <div className='flex-1 flex flex-col justify-center items-center md:mt-0 mt-5'>
                        <div>
                            <div className='text-4xl text-creamcolor potta-one-regular text-center'>Sign Up</div>
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
                             id="outlined-error-helper-text"
                             helperText={emailerror?'Incorrect entry.':''}
                            
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
                             type={showpassword?'text':'password'}
                             error={passworderror}
                             id="outlined-error-helper-text"
                             helperText={passworderror?'Password must not less than 6 character.':''}
                             InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                 <i onClick={handleeye} className={`${showpassword? 'fa  fa-eye-slash':'fa fa-eye'}`}></i>
                                </InputAdornment>
                              ),
                            }}

                            />

                        </div>
                        <div className='md:w-1/2 mt-3  w-5/6'>
                       
                            <TextField
                             label="Confirm Password"
                             value={confirm}
                             onChange={(event) => {
                                setconfirm(event.target.value);
                              }}
                             fullWidth  
                             type={showpasswordconf?'text':'password'}
                             error={confirmerror}
                             id="outlined-error-helper-text"
                             helperText={confirmerror?'Password not Match':''}
                             InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                 <i onClick={handleeyeconf} className={`${showpasswordconf? 'fa fa-eye-slash':'fa fa-eye'}`}></i>
                                </InputAdornment>
                              ),
                            }}

                            />

                        </div>
                        <div className='md:w-1/2 mt-1  w-5/6'>
                        </div>
                        <div className='md:w-1/2 mt-5  w-5/6'>
                        <button onClick={handlesubmit} className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Sign up</button>
                        </div>

                    </div>

                </div>
                

            </div>
           
         </div>
         </>
        

    )
}
export default Register