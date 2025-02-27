import Footer from "./footer"
import Header from './header'
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { useState } from 'react';
import Loader from "./preloader/loader";
import { sendMessagafunc } from "../fetchdata/fetchdata";

const ContactUS = () => {
    const [value, setValue] = useState('');
    const [fullname,setfullname]=useState('')
    const [email,setemail]=useState('')
    const [subject,setsubject]=useState('')
    const [message,setmessage]=useState('')
    const [errorMsg,setErrorMsg]=useState('')
    const [showLoader,setShowLoader]=useState(false)
      const handleChange = (event) => {
        setValue(event.target.value);
      };
      const theme = createTheme({
        components: {
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                backgroundColor: 'white', // Set background color to white
                '& fieldset': {
                  borderColor: '#A6A6A6',
                },
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
                },
              },
            },
          },
        },
      });
      const handleContact=()=>{
        if(!fullname){
          setErrorMsg('Please Enter your naem')

          return
        }
        if (!email) {
          setErrorMsg('Enter email')
          return
      }
      const isValidEmail = (email)=> {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
      };
      if (!isValidEmail(email)) {
          setErrorMsg('Invalid email')
          return

      }
      if(!message){
        setErrorMsg('Please Enter your message')
        return
      }
        const data={fullname,email,subject,message}
        const response=sendMessagafunc(data,setShowLoader)
        if(response.success){
          setErrorMsg("Message Sent")

        }
        else{
          setErrorMsg(response.message)
        }
      }
    return (
        <>
        {showLoader && <Loader/>}
            <div className="flex flex-col w-full h-screen bg-creamcolor ">
                <div className="bg-white"><Header /></div>
                <div>
                    <div className="text-3xl potta-one-regular text-center h-32 flex items-center justify-center ">Contact Us</div>
                </div>
               <div className='w-full px-5 py-5'>
                <div className="bg-bgcream md:h-128 h-256 bg-cover w-full flex flex-col items-center bg-no-repeat">
                 <div className='md:w-1/2 w-full'>
                <div className="potta-one-regular text-2xl md:text-4xl text-center pt-16 text-bluecolor">Get in touch</div>
                <div className="text-center md:text-xl  text-sm fredoka w-full px-5">Read reviews from our clients and see what they have to say about us</div>
                <ThemeProvider theme={theme}>
                <div className="text-center w-full potta-one-regular text-lg my-3">{errorMsg}</div>
                 <div className="w-full md:flex gap-5 mt-3 px-5">
                 
                   <div className='w-full md:w-1/2 flex justify-center'>
                   
                   <TextField
                       label="Your Name"
                       variant="outlined"
                       value={fullname}
                       onChange={(e)=>setfullname(e.target.value)}
                       fullWidth
                       color='primary'
                     />
               
                   </div>
                   <div className='w-full md:w-1/2 flex justify-center md:mt-0 mt-5'>
                   <TextField
                       label="Your Email"
                       variant="outlined"
                       value={email}
                       onChange={(e)=>setemail(e.target.value)}
                       fullWidth
                     />
               
                   </div>
                   
               
                 </div>
                 <div className='w-full flex justify-center px-5 mt-5'>
                   <TextField
                       label="Your Subject"
                       variant="outlined"
                       value={subject}
                       onChange={(e)=>setsubject(e.target.value)}
                       fullWidth
                     />
               
                   </div>
                   <div className='w-full flex justify-center px-5 mt-5'>
                   <TextField
                       label="Your Message"
                       variant="outlined"
                       value={message}
                       onChange={(e)=>setmessage(e.target.value)}
                       fullWidth
                       multiline
                       rows={4}
                     />
               
                   </div>
                   </ThemeProvider>
                   <div className="w-full flex justify-center">
                   <button onClick={handleContact} className="px-8 w-56 text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl mt-5 fredoka">Submit</button>
                   </div>
                </div>
                    </div>
                 </div>

                <div className="w-full">
                    <Footer />
                </div>

            </div>
        </>
    )
}
export default ContactUS