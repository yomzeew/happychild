import { Input, Select } from "antd"

const Settings = () => {
    return (
        <>
            <div className="h-full w-full px-10 py-10 overflow-y-auto">
                <div className="md:h-1/3 gap-y-5 h-auto border-b border-slate-200 md:items-start md:justify-around flex md:flex-row flex-col">
                    <Addrate />
                    <Getrate />
                </div>
                <div className="md:h-1/3 gap-y-5 h-auto border-b border-slate-200 md:items-start md:justify-around flex md:flex-row flex-col mt-10">
                    <NoofKidsPerHour />
                    <GetNoofKidsPerHour />
                </div>
                <div className="md:h-1/3 gap-y-5 h-auto border-b border-slate-200 md:items-start md:justify-around flex md:flex-row flex-col mt-10">
                    <AddBankDetails/>
                    <GetBankDetails />
                </div>

            </div>

        </>
    )
}
export default Settings

const Addrate = () => {

    const options = [
        { value: 'Infant and Toddlers:0-2 years', label: <span>Infant and Toddlers:0-2 years</span> },
        { value: 'Preschool Children:3-5 years', label: <span>Preschool Children:3-5 years</span> },
        { value: 'Children:6-12 years', label: <span>Children:6-12 years</span> }

    ]
    return (
        <>
            <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5">
                <div className="text-center potta-one-regular text-bluecolor  text-lg">Add Rate Per Child</div>
                <div className="w-full">
                    <Input placeholder="Enter Rate" type="number" className="w-full h-10" />
                </div>
                <div className="w-full mt-5">
                    <Select placeholder="Select Child Age Group" className="w-full h-10" options={options} />
                </div>
                <div className="w-full mt-5">
                    <button className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Update</button>
                </div>
            </div>
        </>
    )
}

const Getrate = () => {
    return (
        <>
            <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5">
                <div className="text-center potta-one-regular text-bluecolor  text-lg">Rate Per Child</div>
                <div className="border-b border-slate-600 fredoka text-lg flex justify-between">
                    <div>
                        2.1GBP
                    </div>
                    <div>
                        0-2years

                    </div>

                </div>

            </div>
        </>
    )
}

const NoofKidsPerHour = () => {

    return (
        <>
            <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5">
                <div className="text-center potta-one-regular text-bluecolor  text-lg">Number of Children Per Hour</div>
                <div className="w-full">
                    <Input placeholder="Enter number of child" type="number" className="w-full h-10" />
                </div>
                <div className="w-full mt-5">
                    <button className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Update</button>
                </div>


            </div>
        </>
    )
}
const GetNoofKidsPerHour = () => {
    return (
        <div className="md:w-96 w-64 h-32 border border-slate-300 rounded-2xl p-5 flex flex-col justify-center items-center">
            <div className="text-center potta-one-regular text-bluecolor  text-lg">Number of Children</div>
            <div className="text-center potta-one-regular text-bluecolor  text-2xl">10</div>



        </div>
    )
}

const AddBankDetails = () => {

    return (
        <>
            <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5">
                <div className="text-center potta-one-regular text-bluecolor  text-lg">Number of Children Per Hour</div>
                <div className="w-full">
                    <Input placeholder="Enter Bank Name" type="number" className="w-full h-10" />
                </div>
                <div className="w-full">
                    <Input placeholder="Enter Account number" type="number" className="w-full h-10 mt-3" />
                </div>
                <div className="w-full">
                    <Input placeholder="Enter Sort Code" type="number" className="w-full h-10 mt-3" />
                </div>
                <div className="w-full mt-5">
                    <button className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Update</button>
                </div>


            </div>
        </>
    )
}
const GetBankDetails = () => {
    return (
        <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5 flex flex-col justify-center items-center">
            <div className="border-b border-slate-600 fredoka text-lg text-center">
                    <div> Bank Name </div>
                    <div> UBA</div>
                </div>
                <div className="border-b border-slate-600 fredoka text-lg text-center">
                    <div> Account Number</div>
                    <div>00000000</div>
                </div>
                <div className="border-b border-slate-600 fredoka text-lg text-center">
                    <div>Sort Code</div>
                    <div>00000</div>
                </div>


        </div>
    )
}