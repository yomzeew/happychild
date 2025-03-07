import React, { useEffect } from 'react';
import Header from './header'
import arrowimage from './images/arrow.png'
import superkid from './images/super-kid.svg'
import ball from './images/ball.svg'
import Card from './widget/card';
import cardimage from './images/cardimage.jpg'
import cardimage1 from './images/cardimage1.jpg'
import cardimage2 from './images/cardimage2.jpg'
import onesvg from './images/image 26.svg'
import twosvg from './images/image 27.svg'
import threesvg from './images/image 29.svg'
import foursvg from './images/image 31.svg'
import staffuser from './images/staffpic.png'
import testimonyimage from './images/testimony.png'
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { useState } from 'react';
import Loader from './preloader/loader';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [showopacity, setshowopacity] = useState(false)
  const [showloader, setshowloader] = useState(true)
  const [value, setValue] = useState('');
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [subject, setsubject] = useState('')
  const [message, setmessage] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showLoader, setShowLoader] = useState(false)

  const handleContact = () => {
    if (!fullname) {
      setErrorMsg('Please Enter your naem')

      return
    }
    if (!email) {
      setErrorMsg('Enter email')
      return
    }
    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
    if (!isValidEmail(email)) {
      setErrorMsg('Invalid email')
      return

    }
    if (!message) {
      setErrorMsg('Please Enter your message')
      return
    }
    const data = { fullname, email, subject, message }
    const response = sendMessagafunc(data, setShowLoader)
    if (response.success) {
      setErrorMsg("Message Sent")

    }
    else {
      setErrorMsg(response.message)
    }
  }
  const handleshowpre = () => {
    setTimeout(() => {
      setshowloader(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };
  useEffect(() => {
    handleshowpre()
  }, [])
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
  const handleshow = (value) => {
    setshowopacity(value)
  }
  
  const navigate = useNavigate();

  const handlenav = () => {
    navigate("/started");
  };

  return (
    <>
      {showloader &&
        <div className='w-full h-screen absolute bg-creamcolor flex justify-center items-center'>
          <Loader />
        </div>
      }
      <div className={`${showopacity && 'fixed'} w-full`}>
        {showopacity &&
          <div className='w-full h-screen absolute bg-slate-600 opacity-70'>
          </div>}
        {!showloader && <div className="fixed z-50 top-0 w-full bg-white">
          <Header
            overlay={(value) => handleshow(value)}
          />
        </div>}
        {!showloader &&
          <div className="w-full mt-12">
            <div className="w-full">
              <div className="w-full flex flex-col justify-center  items-center  bg-no-repeat md:h-screen h-96 bg-cover bg-hero-pattern bg-center object-contain px-5  ">
                <div className="flex  justify-center flex-row items-center">
                  <img src={arrowimage} className='md:w-64 w-32 h-auto' />
                  <div>
                    <div className="lg:text-6xl md:text-5xl text-3xl potta-one-regular text-white  text-center">Welcome to Creche Home</div>
                    <div className='text-white md:text-xl text-sm text-center fredoka mt-3'>Providing exceptional care and learning experiences for children aged 6 months and above</div>

                  </div>

                </div>
                <div className='mt-5' >
                  <button onClick={handlenav} className="px-8 md:w-72 w-56 text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl mt-5 fredoka">Book an appointment</button>

                </div>



              </div>



            </div>
            <div className='w-full px-5  md:mt-16 mt-10 h-auto'>
              <div className='items-center flex md:flex-row flex-col flex-wrap justify-around '>
                <div className="">
                  <div className="potta-one-regular text-creamcolor text-lg">About Us</div>
                  <div className="text-justify md:w-96">
                    AppyChild is a child day care center dedicated to providing a safe,
                    nurturing, and stimulating environment for young children.
                    Their mission is to support the overall development of children
                    through a balanced program that encourages curiosity, creativity, and confidence.
                    The center's caring and experienced team is committed
                    to offering age-appropriate activities that promote emotional, social, cognitive,
                    and physical growth. AppyChild values strong partnerships with parents and maintains
                    open communication to ensure each child's success. The facility is designed
                    to be a welcoming and engaging space where children can learn and thrive.
                  </div>
                </div>

                <div className="">
                  <img src={superkid} className="h-96 w-auto" />
                </div>

              </div>

              <div className=''>
                <img src={ball} className="h-44 w-auto" />
              </div>



            </div>
            <div className='w-full justify-center items-center flex-col flex px-5 py-5'>
              <div>
                <div className='text-creamcolor text-2xl potta-one-regular text-center'>
                  What we offer
                </div>
                <div className='text-xl fredoka text-center'>
                  Dedicated and Personalized Childcare Services for Your Little Ones
                </div>

              </div>
              <div className='w-full py-5 flex-wrap flex gap-10 justify-evenly'>
                <Card
                  src={cardimage}
                  title="Childcare"
                  content="AppyChild provides a safe, nurturing environment where children
    can learn and grow through play and exploration. Our experienced staff
     offers age-appropriate programs that support each child's development.
     We value parental involvement 
   and are dedicated to fostering a strong foundation for lifelong learning and well-being. "
                />
                <Card
                  src={cardimage1}
                  title="Babysitting"
                  content="Reliable and caring babysitting services that ensure your child's safety and happiness.
    Our experienced babysitters provide engaging activities, personalized attention, 
    and a nurturing environment, giving you peace of mind while you're away.
    Whether for a few hours or a full day, your child will be in safe, loving hands."
                />
                <Card
                  src={cardimage2}
                  title="Nanny service"
                  content="Our professional nanny service offers personalized, attentive care
    for your child in the comfort of your home. Experienced and trustworthy 
    nannies provide enriching activities, routine support, and loving care,
     ensuring your child’s needs are 
   met while you manage your day. Reliable, flexible, and dedicated to your family’s well-being. "
                />


              </div>


            </div>
            <div className='w-full'>
              <div className=" md:h-128 h-auto bg-bgcreamtwo bg-no-repeat w-full md:bg-cover   flex items-center  flex-col py-5 px-5">
                <div className="potta-one-regular text-2xl md:text-4xl text-center text-bluecolor mt-8 md:mt-10">How it works</div>
                <div className='text-center md:text-xl text-sm fredoka md:w-full w-64'>Dedicated and Personalized Childcare Services for Your Little Ones</div>
                <div className='grid grid-cols-2 gap-5 w-full items-center md:flex md:flex-row md:flex-wrap md:justify-evenly md:mt-10 mt-3'>
                  <div className="md:w-36 w-full flex flex-col items-center">
                    <div className="md:w-32 md:h-32 w-24 h-24 bg-white rounded-full flex justify-center items-center">
                      <img src={onesvg} className='md:h-20 h-16 md:w-20 w-16' />
                    </div>
                    <div className="w-6 h-6 rounded-full text-white bg-bluecolor -mt-5 potta-one-regular items-center flex justify-center">01</div>
                    <div className="font-bold potta-one-regular text-bluecolor text-sm">Visit website</div>
                    <div className='text-center text-xs'>Register and login on our Platform to make booking</div>
                  </div>

                  <div className="md:w-36 w-full flex flex-col items-center">
                    <div className="md:w-32 md:h-32 w-24 h-24 bg-white rounded-full flex justify-center items-center">
                      <img src={twosvg} className='md:h-20 h-16 md:w-20 w-16' />
                    </div>
                    <div className="w-6 h-6 rounded-full text-white bg-bluecolor -mt-5 potta-one-regular items-center flex justify-center">02</div>
                    <div className="font-bold potta-one-regular text-bluecolor text-center text-sm">Explore programme</div>
                    <div className='text-center  text-xs'>Check Our Website for our services</div>
                  </div>

                  <div className="md:w-36 w-full flex flex-col items-center">
                    <div className="md:w-32 md:h-32 w-24 h-24 bg-white rounded-full flex justify-center items-center">
                      <img src={threesvg} className='md:h-20 h-16 md:w-20 w-16' />
                    </div>
                    <div className="w-6 h-6 rounded-full text-white bg-bluecolor -mt-5 potta-one-regular items-center flex justify-center">03</div>
                    <div className="font-bold potta-one-regular text-bluecolor text-center text-sm">Book appointment</div>
                    <div className='text-center text-xs'>Make Booking and Payment</div>
                  </div>

                  <div className="md:w-36 w-full flex flex-col items-center">
                    <div className="md:w-32 md:h-32 w-24 h-24 bg-white rounded-full flex justify-center items-center">
                      <img src={foursvg} className='md:h-20 h-16 md:w-20 w-16' />
                    </div>
                    <div className="w-6 h-6 rounded-full text-white bg-bluecolor -mt-5 potta-one-regular items-center flex justify-center">04</div>
                    <div className="font-bold potta-one-regular text-bluecolor text-sm text-center">Confirmation</div>
                    <div className='text-center text-xs'>Automatic Invoice is generated</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-auto md:h-128 py-5 px-5 bg-white flex flex-col items-center'>
              <div className="potta-one-regular text-2xl md:text-4xl text-center mt-5 text-creamcolor">Testimonial</div>
              <div className="text-center md:text-xl text-sm fredoka md:w-full w-64">Read reviews from our clients and see what they have to say about us</div>
              <div className="w-full flex flex-col md:flex-row items-center justify-around mt-10">
                <div className=''>
                  <div className='h-60 -rotate-3 md:w-128 w-80 border-dashed border-2 border-black rounded-2xl absolute'></div>
                  <div className='h-60 rotate-3 md:w-128 w-80 bg-red-200 rounded-2xl '>
                    <div className='flex justify-between h-full  items-center w-full px-5'>
                      <div className='w-2/3  flex flex-col items-center '>
                        <div>
                          <div className='md:text-5xl text-4xl text-left text-green-500 potta-one-regular'>"</div>
                          <div className='md:text-lg text-sm -mt-3'>
                            AppyChild has been a fantastic experience for our family.
                            The staff is incredibly caring and attentive, and my daughter
                            has thrived in their nurturing environment.
                            I love the daily updates and the variety of activities that keep her engaged and happy."
                          </div>
                          <div className='md:text-5xl text-4xl  text-green-500 potta-one-regular text-right'>"</div>
                        </div>
                      </div>
                      <div className='w-1/3 flex flex-col items-center'>
                        <div>
                          <img src={testimonyimage} />
                          <div className='potta-one-regular'>-Lisa</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:mt-0 mt-10'>
                  <div className='h-60 -rotate-3 md:w-128 w-80 border-dashed border-2 border-black rounded-2xl absolute'></div>
                  <div className='h-60 rotate-3 md:w-128 w-80 bg-red-200 rounded-2xl'>
                    <div className='flex justify-between h-full  items-center w-full px-5'>
                      <div className='w-2/3  flex flex-col items-center '>
                        <div>
                          <div className='md:text-5xl text-4xl text-left text-green-500 potta-one-regular'>"</div>
                          <div className='md:text-lg text-sm -mt-3'>
                            "AppyChild is more than just a daycare;
                            it’s a second home for our child.
                            The educators are warm and genuinely
                            care about each child’s development.
                            We’ve seen remarkable growth in our daughter’s
                            social skills and confidence."
                          </div>
                          <div className='md:text-5xl text-4xl  text-green-500 potta-one-regular text-right'>"</div>

                        </div>

                      </div>
                      <div className='w-1/3 flex flex-col items-center'>
                        <div>
                          <img src={staffuser} />
                          <div className='potta-one-regular'>-Lisa</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-end mt-3'>
                <div className='flex gap-3'>
                  <i className='fa fa-2x fa-arrow-circle-o-left text-bluecolor'></i>
                  <i className='fa fa-2x fa-arrow-circle-o-right text-bluecolor'></i>
                </div>

              </div>

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
                          onChange={(e) => setfullname(e.target.value)}
                          fullWidth
                          color='primary'
                        />

                      </div>
                      <div className='w-full md:w-1/2 flex justify-center md:mt-0 mt-5'>
                        <TextField
                          label="Your Email"
                          variant="outlined"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          fullWidth
                        />

                      </div>


                    </div>
                    <div className='w-full flex justify-center px-5 mt-5'>
                      <TextField
                        label="Your Subject"
                        variant="outlined"
                        value={subject}
                        onChange={(e) => setsubject(e.target.value)}
                        fullWidth
                      />

                    </div>
                    <div className='w-full flex justify-center px-5 mt-5'>
                      <TextField
                        label="Your Message"
                        variant="outlined"
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
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
            <Footer />




          </div>}
      </div>
    </>
  );
}

export default Home;
