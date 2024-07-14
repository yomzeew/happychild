import imagedashboard from '../images/imagedashboard.png'
import BasicTable from './myscheduletable'
import DataTable from './myscheduletable'
const DashboardHome=()=>{
    return(
        <>
        <div className="w-full h-full scrollbar md:overflow-x-hidden">
            <div className="px-5 flex mt-10 justify-start">
                <input
                placeholder="...Searh"
                className="rounded-2xl border border-slate-400 h-10 bg-slate-300 outline-none md:w-3/4 w-full  px-3"
                />
            </div>
            <div className="mt-5 w-full px-5">
                <div className="w-full flex  md:flex-row flex-col h-64  md:h-auto bg-bluecolor text-white rounded-2xl px-5 py-5 overflow-auto">
                <div>
                <div className="text-lg font-bold fredoka">
                Welcome to Creche Home
                </div>
                <div className="text-slate-300 font-semibold fredoka">
                    <span>10:30am</span>&nbsp;<span>10 January, 2024</span>
                </div>
                <div className="text-sm text-slate-400">
                “At Creche home, we are committed to offering a nurturing and stimulating environment where your 
                child can grow, learn, and thrive. Our experienced and caring staff ensures personalized attention, 
                fostering a sense of security and joy. We prioritize your child's developmental needs through 
                engaging activities,  healthy meals, and a safe, loving atmosphere, making every day a
                 delightful learning adventure.”.

                </div>

                </div>
                <div className="h-full w-full">
                    <img src={imagedashboard} className="md:w-2/3 w-full h-auto" />
                </div>
                


                </div>

            </div>
            <div className='px-5'>
            <div className='px-5 mt-5 w-full flex flex-col  h-80 md:h-72 py-5 shadow-md shadow-slate-600 rounded-2xl'>
                <div className='flex items-baseline justify-between'>
                    <div className='text-3xl fredoka'>My Schedule</div>
                    <div className='text-red-500'>See all</div>
                </div>
                <div className='overflow-auto flex-1 scrollbar-track scrollbar md:overflow-x-hidden"'>
                <BasicTable/>

                </div>
              

            </div>
                </div>
           

        </div>
        </>
    )

}
export default DashboardHome