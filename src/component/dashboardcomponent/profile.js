import { TextField } from "@mui/material";
import { useState } from "react";
import Childinfo from "./childinfomodal";

const Profile=()=>{
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    return(
        <>
        {<>
            <div className="h-screen w-full left-0  flex justify-center items-center z-30 bg-slate-700 opacity-70 absolute"/>
            <div className="h-screen w-full md:left-0 left-10  flex justify-center items-center z-40 absolute">
            
            <Childinfo/>
            </div>
            </>
            }
        <div className="w-full h-full scrollbar md:overflow-x-hidden">
            <div className="text-bluecolor font-semibold fredoka text-4xl px-5 pt-5">Profile</div>
            <hr className="w-full border border-slate-200 mt-1"/>
            <div className="px-5 mt-3">
            <div className="w-full rounded-2xl shadow-md shadow-slate-500 py-3 px-5">
             <div className="text-2xl font-semibold fredoka md:text-left text-center">Enter Your Information</div>
             <div className="text-sm fredoka md:text-left text-center mt-1">Make Sure the Information that you Have already written in your Profile is Correct.</div>
            </div>
            </div>
            <div className="px-5 mt-3">
               
                <div className="w-full h-auto rounded-2xl shadow-md bg-white py-5 shadow-slate-500 px-5">
                <div className="text-center md:text-left text-xl font-semibold">Parent/Guardian Information</div>
                  <div className="mt-3">
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
                             value={lastname}
                             variant="outlined"
                             onChange={(event) => {
                                setlastname(event.target.value);
                              }}
                              InputProps={{
                                readOnly: true,
                              }}
                             fullWidth 
                             readonly
                            />
                              <TextField
                             label="Phone Number"
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
                             label="Occupation"
                             value={lastname}
                             variant="outlined"
                             onChange={(event) => {
                                setlastname(event.target.value);
                              }}
                             fullWidth 
                            />
                            <TextField
                             label="Address"
                             value={lastname}
                             variant="outlined"
                             onChange={(event) => {
                                setlastname(event.target.value);
                              }}
                             fullWidth 
                            />
                            </div>
                            <div className="mt-3 flex md:flex-row flex-col justify-between md:gap-0 gap-3">
                            <button className="px-8 w-full md:w-auto text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl fredoka">Save</button>
                            <button className="px-8 w-full md:w-auto  text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl fredoka"><i className="fa fa-plus"></i>&nbsp;Add Child Info</button>
                            </div>

                  </div>
               


                </div>

            </div>

        </div>
        </>
    )
}
export default Profile