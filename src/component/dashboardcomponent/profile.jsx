import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Childinfo from "./childinfomodal";
import AnimteModal from "../modals/animateModal";
import axios from "axios";
import { getchilddata, getchilddelete, update, userdetails } from "../../endpoints/apiurl";
import Statusbar from "../modals/statusbar";
import Carddisplay from "../modals/carddisplay";

const Profile=()=>{
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [email,setemail]=useState('')
    const [phonenumber,setphonenumber]=useState('')
    const [occupation,setoccupation]=useState('')
    const [address,setaddress]=useState('')
    const [showaddchild, setshowaddchild]=useState(false)
    const [errormsg,seterrormsg]=useState('')
    const [showmodal,setshowmodal]=useState(false)
    const [childdata,setchilddata]=useState([])
    const [showupdatechild,setshowupdatechild]=useState(false)
    const [props,setprops]=useState('')

    const fetchdata=async()=>{
        const token=localStorage.getItem('token')
        if (!token) {
            console.error('Token not found');
            return;
        }
        try{
            const response=await axios.post(userdetails,null,{
                headers:{
                    "authorization":`Bearer ${token}`
                }
            })
            const data =response.data.data
            console.log(data)
            setfirstname(data.firstname||'')
            setlastname(data.lastname||'')
            setemail(data.email||'')
            setaddress(data.address||'')
            setphonenumber(data.phonenumber||'')
            setoccupation(data.occupation||'')

        } 
        catch(error){
            console.log(error.response?.data?.message || error.response?.data || error.message);

        }
      
    }
    const handlechilddata=async()=>{
            const token=localStorage.getItem('token')
            if (!token) {
                console.error('Token not found');
                return;
            }
            try{
                const response=await axios.post(getchilddata,null,{
                    headers:{
                        "authorization":`Bearer ${token}`
                    }
                })
                const data =response.data.data
                console.log(data)
                setchilddata(data[0])
               
    
            } 
            catch(error){
                console.log(error.response?.data?.message || error.response?.data || error.message);
    
            }

    }
    useEffect(()=>{
        fetchdata()
        handlechilddata()

    },[])

    // if(!firstname || !lastname)

    const handleclose=()=>{
        setshowaddchild(false)
    }
    const handleshow=()=>{
        setshowaddchild(true)
    }
    const statusbarProps={
        handleclose:()=>handleclose()
       
    }
    const handlesubmit=async()=>{
        if(!firstname||!lastname||!occupation||!address||!phonenumber){
            seterrormsg('fill the empty field')
            return
        }
        const token=localStorage.getItem('token')
        if (!token) {
            console.error('Token not found');
            return;
        }
        try{
            const data={firstname:firstname,lastname:lastname,occupation:occupation,address:address,phonenumber:phonenumber}
            const response=await axios.post(update,data,{
                headers:{
                'authorization':`Bearer ${token}`
                }
            })
            if(response.data.message==='User updated'){
                setshowmodal(true)
            }


        }catch(error){
            console.log(error.response?.data?.message || error.response?.data || error.message);
            seterrormsg(error.response?.data?.message || error.response?.data || error.message)

        }

    }
    const handleclosemodal=()=>{
        setshowmodal(false)
    }
    const statusbarPropsupdate = {
        title:'Congratulations',
        message: 'Successfully Registered on Happychild Platform',
        buttondetails: 'Ok',
        routename:'/started',
        handleclose:()=>handleclosemodal()
      };
      const handledelete=async(value)=>{

        const token=localStorage.getItem('token')
        if (!token) {
            console.error('Token not found');
            return;
        }
        try{
            const data={id:value}
            const response=await axios.post(getchilddelete,data,{
                headers:{
                'authorization':`Bearer ${token}`
                }
            })
            if(response.data.message==='Child record deleted successfully'){
                const responsetwo=await axios.post(getchilddata,null,{
                    headers:{
                        "authorization":`Bearer ${token}`
                    }
                })
                const data =responsetwo.data.data
                console.log(data)
                setchilddata(data[0])
               
            }
        }catch(error){
            console.log(error.response?.data?.message || error.response?.data || error.message);
           

        }
        
      }
      const  handlecloseupdate=()=>{
        setshowupdatechild(false)
      }
      const handleedit=(value)=>{
        console.log(value)
        setshowupdatechild(true)
        const getchild=childdata.filter((item)=>(
            item.id===value
        ))
       
        const data=getchild[0]
        const propsdata={
            data:data,
            handleclose:()=>handlecloseupdate(),
            update:true
        }
        setprops(propsdata)
      }
  
    return(
        <>
       
        {showmodal &&
        <>
       <div className="h-screen w-full left-0  flex justify-center items-center z-30 bg-slate-700 opacity-70 absolute"/>
       <div className="h-screen w-full xl:left-0 lg:left-0 md:left-16 left-7  flex justify-center items-center z-40 absolute">
       <AnimteModal
       StatusbarComponent={Statusbar}
       statusbarProps={statusbarPropsupdate}
       />
       </div>
       </>


        }
        {showaddchild &&<>
            <div className="h-screen w-full left-0  flex justify-center items-center z-30 bg-slate-700 opacity-70 absolute"/>
            <div className="h-screen w-full xl:left-0 lg:left-0 md:left-16 left-7  flex justify-center items-center z-40 absolute">
            <AnimteModal
            StatusbarComponent={Childinfo}
            statusbarProps={statusbarProps}
            />
            </div>
            </>
            }
             {showupdatechild &&<>
            <div className="h-screen w-full left-0  flex justify-center items-center z-30 bg-slate-700 opacity-70 absolute"/>
            <div className="h-screen w-full xl:left-0 lg:left-0 md:left-16 left-7  flex justify-center items-center z-40 absolute">
            <AnimteModal
            StatusbarComponent={Childinfo}
            statusbarProps={props}
            />
            </div>
            </>
            }
       {!showaddchild &&<div className="w-full h-full overflow-scroll scrollbar md:overflow-x-hidden">
        <div className="w-full z-50 fixed top-0 bg-white">
        <div className="text-bluecolor font-semibold fredoka text-4xl px-5 pt-5">Profile</div>
        <hr className="w-full border border-slate-200 mt-1"/>

        </div>
            <div className="px-5 mt-24">
            <div className="w-full rounded-2xl shadow-md shadow-slate-500 py-3 px-5">
             <div className="text-2xl font-semibold fredoka md:text-left text-center">Enter Your Information</div>
             <div className="text-sm fredoka md:text-left text-center mt-1">Make Sure the Information that you Have already written in your Profile is Correct.</div>
            </div>
            </div>
            <div className="px-5 mt-3">
               
                <div className="w-full h-auto rounded-2xl shadow-md bg-white py-5 shadow-slate-500 px-5">
                <div className="text-center md:text-left text-xl font-semibold">Parent/Guardian Information</div>
                  <div className="mt-3">
                    <div>{errormsg}</div>
                    <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-10 w-full">
                    <TextField
                             label="First Name"
                             value={firstname}
                             variant="outlined"
                             onChange={(event) => {
                                setfirstname(event.target.value);
                              }}
                             fullWidth 
                            />
                        <TextField
                             label="Last Name"
                             value={lastname}
                             variant="outlined"
                             onChange={(event) => {
                                setlastname(event.target.value);
                              }}
                             fullWidth 
                            />

                    </div>
                    <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-10 w-full mt-3 md:mt-5">
                              <TextField
                             label="Email"
                             value={email}
                             variant="outlined"
                             onChange={(event) => {
                                setemail(event.target.value);
                              }}
                              InputProps={{
                                readOnly: true,
                              }}
                             fullWidth 
                             readonly
                            
                            />
                              <TextField
                             label="Phone Number"
                             value={phonenumber}
                             variant="outlined"
                             onChange={(event) => {
                                setphonenumber(event.target.value);
                              }}
                             fullWidth 
                            />
                            </div>
                            <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-10 w-full mt-3 md:mt-5">
                              <TextField
                             label="Occupation"
                             value={occupation}
                             variant="outlined"
                             onChange={(event) => {
                                setoccupation(event.target.value);
                              }}
                             fullWidth 
                            />
                            <TextField
                             label="Address"
                             value={address}
                             variant="outlined"
                             onChange={(event) => {
                                setaddress(event.target.value);
                              }}
                             fullWidth 
                            />
                            </div>
                            <div className="mt-3 flex md:flex-row flex-col justify-between md:gap-0 gap-3">
                            <button onClick={handlesubmit} className="px-8 w-full md:w-auto text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl fredoka">Save</button>
                            <button onClick={handleshow} className="px-8 w-full md:w-auto  text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl fredoka"><i className="fa fa-plus"></i>&nbsp;Add Child Info</button>
                            </div>

                  </div>
               


                </div>
                <div className="mt-3">
            <div className="w-full rounded-2xl shadow-md shadow-slate-500 py-3 px-5">
             <div className="text-2xl font-semibold fredoka md:text-left text-center">Children Info</div>
            </div>
            </div>
                <div className="mt-3 mb-3 md:grid md:grid-cols-3 grid-cols-1 justify-center w-full">
                    {childdata.length>0&&childdata.map((item,index)=>(
                        <div key={index} className="mt-3">
                             <Carddisplay
                             key={index}
                             datachild={childdata[index]}
                             handledelete={(value)=>handledelete(value)}
                             handleedit={(value)=>handleedit(value)}

                         />
                        </div>
                        

                    ))}
                   

                </div>

            </div>

        </div>}
        </>
    )
}
export default Profile