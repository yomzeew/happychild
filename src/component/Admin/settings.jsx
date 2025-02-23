import { Input, Select } from "antd"
import { useEffect, useState } from "react"
import { addnumberofkid, addratefunc, getnumberofkid, getRateall,addbankdetails, getbankdetailsfunc } from "../../fetchdata/fetchdata"

const Settings = () => {
    const [rate,setRate]=useState(0)
    const [agegroup,setageGroup]=useState('')
    const [noofkids,setnoofkids]=useState('')
    const [bankname,setbankname]=useState('')
    const [accountno,setaccountno]=useState('')
    const [sortcode,setsortcode]=useState('')

    return (
        <>
            <div className="h-full w-full px-10 py-10 overflow-y-auto">
                <div className="md:h-1/3 gap-y-5 h-auto border-b border-slate-200 md:items-start md:justify-around flex md:flex-row flex-col">
                    <Addrate rate={rate} setRate={setRate} agegroup={agegroup} setageGroup={setageGroup} />
                    <Getrate rate={rate} agegroup={agegroup} />
                </div>
                <div className="md:h-1/3 gap-y-5 h-auto border-b border-slate-200 md:items-start md:justify-around flex md:flex-row flex-col mt-10">
                    <NoofKidsPerHour noofkids={noofkids} setnoofkids={setnoofkids} />
                    <GetNoofKidsPerHour noofkids={noofkids} />
                </div>
                <div className="md:h-1/3 gap-y-5 h-auto border-b border-slate-200 md:items-start md:justify-around flex md:flex-row flex-col mt-10">
                    <AddBankDetails sortcode={sortcode} setsortcode={setsortcode} bankname={bankname} setbankname={setbankname} accountno={accountno} setaccountno={setaccountno}/>
                    <GetBankDetails sortcode={sortcode} bankname={bankname} accountno={accountno} />
                </div>

            </div>

        </>
    )
}
export default Settings

const Addrate = ({ rate, setRate, agegroup, setageGroup }) => {
    const [showloader, setShowLoader] = useState(false);
  
    const handlesumbit = async () => {
      if (!rate) {
        alert('Enter Rate amount');
        return;
      }
      if (!agegroup) {
        alert('Select Agegroup');
        return;
      }
      const data = { rate, agegroup };
      // Assuming addratefunc is imported from your API file:
      const response = await addratefunc(data,setShowLoader);
      if (response.success) {
        alert('Rate Changed Successfully');
        setRate(0)
        setageGroup('')
      } else {
        alert('error: ' + response.message);
      }
    };
  
    const options = [
      { value: '0-2 years', label: <span>Infant and Toddlers: 0-2 years</span> },
      { value: '3-5 years', label: <span>Preschool Children: 3-5 years</span> },
      { value: '6-12 years', label: <span>Children: 6-12 years</span> }
    ];
  
    return (
      <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5">
        <div className="text-center potta-one-regular text-bluecolor text-lg">
          Add Rate Per Child
        </div>
        <div className="w-full">
          <Input
          value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter Rate"
            type="number"
            className="w-full h-10"
          />
        </div>
        <div className="w-full mt-5">
          <Select
            value={agegroup}
            onChange={(value) => setageGroup(value)}
            placeholder="Select Child Age Group"
            className="w-full h-10"
            options={options}
          />
        </div>
        <div className="w-full mt-5">
          <button
            onClick={handlesumbit}
            disabled={showloader}
            className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950"
          >
            Update
          </button>
        </div>
      </div>
    );
  };

const Getrate = ({rate,agegroup}) => {
    const [data,setdata]=useState([])
    const getallratefunc=async()=>{
        const response=await getRateall()
        if(response.success){
            setdata(response.data)
        }
        else{
            alert(response.message)
        }
    }
    useEffect(()=>{
        getallratefunc()
    },[rate,agegroup])
    return (
        <>
            <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5">
                <div className="text-center potta-one-regular text-bluecolor  text-lg">Rate Per Child</div>
                {data.length>0?data.map((item,index)=>(
                    <div key={index} className="border-b border-slate-600 fredoka text-lg flex justify-between mt-3">
                    <div>
                        {item.rate}GBP
                    </div>
                    <div>
                        {item.agegroup}
                    </div>

                </div>)):<div>No Record</div>}

            </div>
        </>
    )
}

const NoofKidsPerHour = ({setnoofkids,noofkids}) => {
    const [showloader, setShowLoader] = useState(false);
    const handlesubmit=async()=>{
        if (!noofkids) {
            alert('Enter Number of kids');
            return;
          }
          const data = { noofkids };
          // Assuming addratefunc is imported from your API file:
          const response = await addnumberofkid(data,setShowLoader);
          if (response.success) {
            alert('Number of kids Changed Successfully');
            setnoofkids('')
            
          } else {
            alert('error: ' + response.message);
          }



    }

    return (
        <>
            <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5">
                <div className="text-center potta-one-regular text-bluecolor  text-lg">Number of Children Per Hour</div>
                <div className="w-full">
                    <Input value={noofkids} onChange={(e)=>setnoofkids(e.target.value)} placeholder="Enter number of child" type="number" className="w-full h-10" />
                </div>
                <div className="w-full mt-5">
                    <button
                    onClick={handlesubmit}
                    disabled={showloader}
                     className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Update</button>
                </div>


            </div>
        </>
    )
}
const GetNoofKidsPerHour = ({noofkids}) => {
    const [data,setdata]=useState([])
    const getkidnumberfunc=async()=>{
        const response=await getnumberofkid()
        if(response.success){
            console.log(response.success)
            setdata(response.data)
        }
        else{
            alert(response.message)
        }
    }
    useEffect(()=>{
        getkidnumberfunc()
    },[noofkids])

    return (
        <div className="md:w-96 w-64 h-32 border border-slate-300 rounded-2xl p-5 flex flex-col justify-center items-center">
            <div className="text-center potta-one-regular text-bluecolor  text-lg">Number of Children</div>
            <div className="text-center potta-one-regular text-bluecolor  text-2xl">{data[0]?.numberofkid}</div>



        </div>
    )
}

const AddBankDetails = ({accountno,setaccountno,setsortcode,sortcode,bankname,setbankname}) => {
const [showloader,setShowLoader]=useState(false)

    const handlesubmit=async()=>{
        if(!bankname){
            alert('Enter Bank Name')
            return
        }
        if(!accountno){
            alert ('Enter Account Number')
        }
        if(!sortcode){
            alert ('Enter SortCode')
        }
         const data={bankname,accountno,sortcode}
         const response = await addbankdetails (data,setShowLoader);
      if (response.success) {
        alert('Bank Details Changed Successfully');
        setbankname('')
        setaccountno('')
        setsortcode('')
      } else {
        alert('error: ' + response.message);
      }

    }

    return (
        <>
            <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5">
                <div className="text-center potta-one-regular text-bluecolor  text-lg">Number of Children Per Hour</div>
                <div className="w-full">
                    <Input value={bankname} onChange={(e)=>setbankname(e.target.value)} placeholder="Enter Bank Name" type="text" className="w-full h-10" />
                </div>
                <div className="w-full">
                    <Input value={accountno} onChange={(e)=>setaccountno(e.target.value)} placeholder="Enter Account number" type="number" className="w-full h-10 mt-3" />
                </div>
                <div className="w-full">
                    <Input value={sortcode} onChange={(e)=>setsortcode(e.target.value)} placeholder="Enter Sort Code" type="text" className="w-full h-10 mt-3" />
                </div>
                <div className="w-full mt-5">
                    <button
                    disabled={showloader}
                    onClick={handlesubmit}
                     className="px-8 w-full text-white h-12 active:bg-blue-900 hover:bg-blue-700 bg-bluecolor rounded-xl shadow-md shadow-blue-950">Update</button>
                </div>


            </div>
        </>
    )
}
const GetBankDetails = ({accountno,sortcode,bankname}) => {
    const [data,setdata]=useState([])
    const getbankdetails=async()=>{
        const response=await getbankdetailsfunc()
        if(response.success){
            console.log(response.data)
            setdata(response.data)
        }
        else{
            console.log(response.message)
        }
    }
    useEffect(()=>{
        getbankdetails()
    },[accountno,sortcode,bankname])
    return (
        <div className="md:w-96 w-64 h-auto border border-slate-300 rounded-2xl p-5 flex flex-col justify-center items-center">
            <div className="border-b border-slate-600 fredoka text-lg text-center">
                    <div> Bank Name </div>
                    <div> {data[0]?.bankname }</div>
                </div>
                <div className="border-b border-slate-600 fredoka text-lg text-center">
                    <div> Account Number</div>
                    <div>{data[0]?.accountno}</div>
                </div>
                <div className="border-b border-slate-600 fredoka text-lg text-center">
                    <div>Sort Code</div>
                    <div>{data[0]?.sortcode}</div>
                </div>


        </div>
    )
}