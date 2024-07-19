import { TextField, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";

const Childinfo = () => {
    const [age, setAge] = useState('');
    const [agegroup, setAgeGroup] = useState('');
    const [gender, setGender] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [assistance, setAssistance] = useState('');

    const handleAgeGroupChange = (event) => {
        setAgeGroup(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleAssistanceChange = (event) => {
        setAssistance(event.target.value);
    };

    return (
        <div className="mt-3 bg-white px-5 rounded-2xl py-5 md:w-auto w-72">
            <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-10 w-full">
                <TextField
                    label="First Name"
                    value={firstname}
                    variant="outlined"
                    onChange={(event) => setFirstName(event.target.value)}
                    fullWidth
                />
                <TextField
                    label="Last Name"
                    value={lastname}
                    variant="outlined"
                    onChange={(event) => setLastName(event.target.value)}
                    fullWidth
                />
            </div>
            <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-10 w-full mt-3 md:mt-5">
                <TextField
                    type="date"
                    label="Date of Birth"
                    value={age}
                    variant="outlined"
                    onChange={(event) => setAge(event.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />
                <TextField
                    label="Age"
                    value={age}
                    variant="outlined"
                    onChange={(event) => setAge(event.target.value)}
                    fullWidth
                />
            </div>
            <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-10 w-full mt-3 md:mt-5">
                <FormControl fullWidth>
                    <InputLabel id="gender-select-label">Gender</InputLabel>
                    <Select
                        labelId="gender-select-label"
                        
                        id="gender-select"
                        value={gender}
                        label="Gender"
                        onChange={handleGenderChange}
                    >
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="agegroup-select-label">Age Group</InputLabel>
                    <Select
                        labelId="agegroup-select-label"
                        id="agegroup-select"
                        value={agegroup}
                        label="Age Group"
                        onChange={handleAgeGroupChange}
                    >
                        <MenuItem value="0-2 years">Infants and Toddlers: 0-2 years</MenuItem>
                        <MenuItem value="3-5 years">Preschool Children: 3-5 years</MenuItem>
                        <MenuItem value="6-12 years">Children: 6-12 years</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="mt-3">
                <div className="font-semibold text-lg fredoka md:text-center text-left">If You Need Assistance</div>
                <div className="font-semibold text-sm fredoka md:text-center text-left">Choose An Option Based On Physical Disability Accordingly.</div>
                <div className="mt-3">
                <FormControl fullWidth>
                    <InputLabel id="assistance-select-label">Assistance</InputLabel>
                    <Select
                        labelId="assistance-select-label"
                        id="assistance-select"
                        value={assistance}
                        label="Assistance"
                        onChange={handleAssistanceChange}
                    >
                        <MenuItem value={'Mobility'}>Mobility</MenuItem>
                        <MenuItem value={'Dexterity'}>Dexterity</MenuItem>
                        <MenuItem value={'Visual'}>Visual</MenuItem>
                        <MenuItem value={'Hearing'}>Hearing</MenuItem>
                        <MenuItem value={'Speech'}>Speech</MenuItem>
                    </Select>
                </FormControl>
                </div>
                
            </div>
            <div className="mt-3 flex md:flex-row flex-col justify-between md:gap-0 gap-3">
                <button className="px-8 w-full md:w-auto text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl fredoka">Save</button>
                <button className="px-8 w-full md:w-auto text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl fredoka">
                    <i className="fa fa-plus"></i>&nbsp;Save and Add Child Info
                </button>
            </div>
        </div>
    );
};

export default Childinfo;
