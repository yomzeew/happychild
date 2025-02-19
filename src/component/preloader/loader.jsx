import './loader.css'
import logo from '../images/logopngwhite.png'
const Loader=()=>{
    return(
        <div className="h-screen w-full flex justify-center items-center  bg-creamcolor">
            <div className="w-10 flex flex-col items-center h-10 logo">
                <img src={logo} className="object-contain" />
                <div className='potta-one-regular text-center text-bluecolor'>HappyChild</div>
            </div>
            
        </div>
       
    )
}
export default Loader