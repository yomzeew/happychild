import { useEffect, useState } from "react";
import { TextField, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import axios from "axios";
import { book, getchilddata, gethour } from "../../endpoints/apiurl";
import Warningstatus from "../modals/warningstatus";
import AnimteModal from "../modals/animateModal";

const ChildAppointment = ({showpageinvoice,sendIdinvoice}) => {
    const [hourinterval, sethourinterval] = useState([]);
    const [childdata,setchilddata]=useState([])
    const [phonenumber, setphonenumber] = useState('');
    const [checkin, setcheckin] = useState('');
    const [checkout, setcheckout] = useState('');
    const [childid, setchildid] = useState('');
    // Assuming parent ID is available in state
    const [schedulePattern, setschedulePattern] = useState('');
    const [selectedIntervals, setSelectedIntervals] = useState([]);
    const [bookings, setbookings] = useState({});
    const [showWarning,setshowWarning]=useState(false)
    const [statusbarPropsupdate, setstatusbarPropsupdate]=useState('')

    const fetchAvailableHours = async () => {
        try {
            const token=localStorage.getItem('token')
            if (!token) {
                console.error('Token not found');
                return;
            }
            const response = await axios.post(gethour,null,{
                headers:{
                    "authorization":`Bearer ${token}`    
                }
            });
            sethourinterval(response.data.data);
        } catch (error) {
            console.log( error.response?.data?.message || error.response?.data || error.message);
        }
    };
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

    const handleChildidChange = (event) => {
        
        setchildid(event.target.value);
    };

    const handleSchedulePatternChange = (event) => {
        setschedulePattern(event.target.value);
    };

    const handleIntervalSelection = (interval) => {
        setSelectedIntervals(prev => {
            if (prev.includes(interval)) {
                return prev.filter(i => i !== interval);
            } else {
                return [...prev, interval].sort();
            }
        });
    };
    const handleclose=()=>{
        setshowWarning(false)
    }

    const handleBooking = async () => {
        if (!childid || !checkin || !checkout || !schedulePattern || selectedIntervals.length === 0) {
            setshowWarning(true)
            setstatusbarPropsupdate(
                {
                    title:'Error',
                    message:'Please fill in all booking details and select time intervals',
                    buttondetails:'ok',
                    handleaction:()=>handleclose()
                }
            )
            return;
        }

        // Ensure selected intervals form a continuous block
        const isValidSelection = selectedIntervals.every((interval, idx, arr) => {
            if (idx === 0) return true;
            const [prevStart, prevEnd] = arr[idx - 1].split('-').map(t => parseInt(t.replace(':00', '')));
            const [currStart] = interval.split('-').map(t => parseInt(t.replace(':00', '')));
            return currStart === prevEnd;
        });

        if (!isValidSelection) {
            setstatusbarPropsupdate(
                {
                    title:'Error',
                    message:'Please select continuous time intervals',
                    buttondetails:'ok',
                    handleaction:()=>handleclose()


                }
            )
            return;
        }

        for (let interval of selectedIntervals) {
            const existingBookings = bookings[interval] || 0;
            if (existingBookings >= 10) {
                setshowWarning(true)
            setstatusbarPropsupdate(
                {
                    title:'Error',
                    message:`Time slot ${interval} is fully booked.`,
                    buttondetails:'ok',
                    handleaction:()=>handleclose()


                }
            )
                return;
            }
        }

        const bookingDetails = {
            child_id: childid,
            phone_number: phonenumber,
            check_in: checkin,
            check_out: checkout,
            schedule_pattern: schedulePattern,
            time_slots: selectedIntervals
        };

        try {
            const token=localStorage.getItem('token')
            if (!token) {
                console.error('Token not found');
                return;
            }
           const response= await axios.post(book, bookingDetails,{
                headers:{
                    "authorization":`Bearer ${token}`
                }
            });
            // Update bookings state
            selectedIntervals.forEach(interval => {
                setbookings(prev => ({
                    ...prev,
                    [interval]: (prev[interval] || 0) + 1
                }));
            });
            setSelectedIntervals([]);
            showpageinvoice('invoice')
            console.log(response.data)
            sendIdinvoice(response.data.id)
            alert('Booking successful!');
            fetchAvailableHours(); // Refresh available hours after booking
        } catch (error) {
            console.log(error.response?.data?.message || error.response?.data || error.message);
            alert('Error making booking. Please try again later.');
        }
    };

    useEffect(() => {
        fetchAvailableHours();
        handlechilddata();
    }, []);

    return (
        <>{showWarning &&
            <>
            {/* <div className="h-screen w-full left-0  flex justify-center items-center z-30 bg-slate-700 opacity-70 absolute -mt-24"/> */}
            <div className="h-screen w-full xl:left-0 lg:left-0 md:left-16 left-7  flex justify-center items-center z-40 absolute -mt-24">
            <AnimteModal
            StatusbarComponent={Warningstatus}
            statusbarProps={statusbarPropsupdate}
            />
            </div>
            </>
     
        }
            <div className="w-full rounded-2xl shadow-md shadow-slate-500 py-3 px-5">
                <div className="fredoka text-2xl">Appointment Detail</div>
                <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-10 w-full mt-3">
                    <FormControl fullWidth>
                        <InputLabel id="child-select-label">Select Child</InputLabel>
                        <Select
                            labelId="child-select-label"
                            id="child-select"
                            value={childid}
                            label="Select Child"
                            onChange={handleChildidChange}
                        >
                            {childdata.length>0 && childdata.map((item)=>{
                                return(
                                    <MenuItem key={item.id} value={item.id}>{item.lastname}&nbsp;{item.firstname}</MenuItem>
                                ) 
                            })

                            }
                           
                        </Select>
                    </FormControl>
                    <TextField
                        label="Optional Phone Number"
                        value={phonenumber}
                        variant="outlined"
                        onChange={(event) => {
                            setphonenumber(event.target.value);
                        }}
                        fullWidth
                    />
                </div>
                <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-10 w-full mt-3">
                    <TextField
                        type="date"
                        label="Check In"
                        value={checkin}
                        variant="outlined"
                        onChange={(event) => setcheckin(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                    <TextField
                        type="date"
                        label="Check Out"
                        value={checkout}
                        variant="outlined"
                        onChange={(event) => setcheckout(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </div>

                <div className="w-full rounded-2xl shadow-md shadow-slate-100 py-3 mt-3">
                    <FormControl fullWidth>
                        <InputLabel id="schedule-select-label">Select Schedule Pattern (Repeat Schedule)</InputLabel>
                        <Select
                            labelId="schedule-select-label"
                            id="schedule-select"
                            value={schedulePattern}
                            label="Select Schedule Pattern (Repeat Schedule)"
                            onChange={handleSchedulePatternChange}
                        >
                            <MenuItem value={1}>1 day</MenuItem>
                            <MenuItem value={3}>3 days</MenuItem>
                            <MenuItem value={7}>7 days</MenuItem>
                            <MenuItem value={15}>15 days</MenuItem>
                            <MenuItem value={30}>30 days</MenuItem>
                        </Select>
                    </FormControl>

                    <div className="fredoka text-2xl mt-3">
                        Available hours for booking
                    </div>
                    <hr className="w-full border-slate-300" />
                    <div className="grid md:grid-cols-8 grid-cols-3 gap-3 mt-5">
                        {hourinterval.map((item) => (
                            <button
                                key={item.timeinterval}
                                className={`py-2 px-2 rounded-2xl text-white ${selectedIntervals.includes(item.timeinterval) ? 'bg-bluecolor' : 'bg-blue-300'}`}
                                onClick={() => handleIntervalSelection(item.timeinterval)}
                                disabled={item.bookings >= 10}
                            >
                                {item.timeinterval}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-end mt-3">
                    <button onClick={handleBooking} className="px-8 md:w-72 w-56 text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl mt-5 fredoka">Book an appointment</button>
                           
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChildAppointment;
