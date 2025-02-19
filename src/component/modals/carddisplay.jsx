import gendericonmale from '../images/maleicon.png'
import gendericonfemale from '../images/femaleicon.png'
const Carddisplay=({datachild, handledelete,handleedit})=>{
    
    

    return(
        <div className="md:w-72 w-full h-auto py-5 px-3 text-bluecolor bg-slate-100 text-sm fredoka rounded-2xl shadow-md shadow-slate-400">
            <div className='flex justify-between'>
            <div onClick={()=>handleedit(datachild.id)} className='cursor-pointer'>Edit&nbsp;<i className='fa fa-pencil-square-o'></i></div>
            <div onClick={()=>handledelete(datachild.id)} className='text-red-500 cursor-pointer'>Delete info&nbsp;<i className='fa fa-trash-o'></i></div></div>
            <div className=" flex justify-between items-center">
                <div className="capitalize text-bluecolor"><div>Child 1</div><div className='font-semibold'>{datachild.lastname} {datachild.firstname}</div></div>
                <div className=""><img src={datachild.gender==='Male'?gendericonmale:gendericonfemale} className='w-6 h-auto' /><div>{datachild.gender}</div></div>

            </div>
            <div className='mt-3 flex justify-between items-center '>
                <div><span>Age:</span><span>{datachild.age}</span></div>
                <div><span>Date of Birth:</span><div>{datachild.dob}</div></div>
            </div>
            <div className='mt-3 flex justify-between items-center'>
            <div><div>Age Group:</div><div>{datachild.agegroup}</div></div>
            <div><div>Assistance</div><div>{datachild.assistance}</div></div>
            </div>
          

        </div>
    )
}
export default Carddisplay