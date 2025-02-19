import { useState } from "react";
import OtpComponent from "./dashboardcomponent/otpComponent";
import Loader from "./preloader/loader";
import { TextField } from "@mui/material";

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [showOtp, setShowotp] = useState(false)
    const [password,setpassword]=useState('')
    const [confirm,setconfirm]=useState('')
    const [emailerror,setemailerror]=useState(false)
    const [showPassword, setShowpassword] = useState(false)
    const [preloader,setPreloader]=useState(false)
    const [errormsg,setErrormsg]=useState('')
    const [passworderror,setpassworderror]=useState('')

    const EmailVerify = async () => {
        return { success: true }; // Example return value
    };
    const OtpVerify = async () => {
        return { success: true }; // Example return value
    };
    
    
    const handlesubmit = async () => {  // <-- Make this function async
        if (!showOtp) {
            try {
                const { success } = await EmailVerify();  // <-- Await the async function
                console.log(success);
                if (success) {
                    console.log('ok');
                    setShowotp(true);
                }
            } catch (error) {
                console.error("Error verifying email:", error);
            }
        }
        if(!showPassword){
            try {
                const { success } = await OtpVerify();  // <-- Await the async function
                console.log(success);
                if (success) {
                    console.log('ok');
                    setShowpassword(true);
                }
            } catch (error) {
                console.error("Error verifying email:", error);
            }
        }
    };
    
    return (
        <>
        
            {preloader && <div className='h-screen w-full absolute z-50'><Loader /></div>}
            <div className="w-full h-screen">
                <div className='flex md:flex-row flex-col'>
                    <div className='md:h-screen h-72 bg-cover bg-center bg-no-repeat bg-bgside md:w-1/2 w-full py-5'>
                        <div className='fixed w-full md:w-1/2 text-white text-lg h-12 bg-slate-700 opacity-70 px-5 flex items-center'><a className='flex items-center' href='/'><i className='fa fa-2x fa-home text-creamcolor'></i>&nbsp;Go to Home</a></div>
                    </div>
                    <div className='flex flex-col px-5 md:w-1/2 w-full md:py-10 py-5'>
                        <div className='fredoka text-lg flex md:justify-end justify-center'>Don’t have an account?&nbsp;<span className='text-bluecolor'><a href='/register'>Login</a></span></div>
                        <div className='flex-1 flex flex-col justify-center items-center md:mt-0 mt-5'>
                            <div>
                                <div className='text-4xl text-creamcolor potta-one-regular text-center'>Forget Password</div>
                                <div className="text-sm fredoka text-center">Enter your correct details to login to your account</div>
                            </div>
                           {!showOtp && <div className='md:w-1/2 mt-10 w-5/6'>
                                <div className='text-red-500 text-sm mb-3 text-center'>{errormsg}</div>
                                <TextField
                                    label="Email Address"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                    fullWidth
                                    error={emailerror}
                                    id="outlined-error-helper-texttwo"
                                    helperText={emailerror ? 'Incorrect entry.' : ''}
                                    autoComplete='off'

                                />

                            </div>}
                            {!showPassword && showOtp && <div className='md:w-1/2 mt-10 w-5/6'>
                                <div className='text-red-500 text-sm mb-3 text-center'>{errormsg}</div>
                                <OtpComponent />

                            </div>}
                            {showPassword &&
                            <>
                            <div className='md:w-1/2 mt-10 w-5/6'>
                                <div className='text-red-500 text-sm mb-3 text-center'>{errormsg}</div>
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
                                    helperText={passworderror ? 'Password must not less than 6 character.' : ''}
                                    autoComplete='off'

                                />

                            </div>
                            <div className='md:w-1/2 mt-3 w-5/6'>
                                <div className='text-red-500 text-sm mb-3 text-center'>{errormsg}</div>
                                <TextField
                                    label="Confirm Password"
                                    value={password}
                                    onChange={(event) => {
                                        setpassword(event.target.value);
                                    }}
                                    fullWidth
                                    type='password'
                                    error={passworderror}
                                    id="outlined-error-helper-text"
                                    helperText={passworderror ? 'Password must not less than 6 character.' : ''}
                                    autoComplete='off'

                                />

                            </div>
                            </> 
                            }
                            <div className='md:w-1/2 mt-5  w-5/6'>
                                <button onClick={handlesubmit} className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Next</button>
                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}
export default ForgetPassword