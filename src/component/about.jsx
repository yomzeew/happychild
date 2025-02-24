import Footer from "./footer"
import Header from './header'

const AboutUS = () => {
    return (
        <>
            <div className="flex flex-col w-full h-screen ">
                <div className="bg-white"><Header /></div>
                <div className="bg-creamcolor">
                    <div className="text-2xl potta-one-regular text-center h-32 flex items-center justify-center ">Our About</div>
                </div>
                <div className="bg-white flex-1 justify-center w-full flex gap-x-3 md:ml-10 px-5 py-5">
                    <div className="w-2 border-r-2 border-bluecolor">
                    </div>
                    <div>
                    <div className="text-lg fredoka md:w-1/2 w-full">
                    At AppyChild, we are dedicated to creating a safe, nurturing, and stimulating environment 
                    where young children can learn, grow, and thrive. Our mission is to support each child's 
                    overall development through a balanced program that sparks curiosity, nurtures creativity,
                     and builds confidence. Our caring and experienced team offers age-appropriate activities 
                     designed to promote emotional, social, cognitive, and physical growth. We believe in the 
                     power of strong partnerships with parents, maintaining open communication to ensure every 
                     child's success. Our facility is thoughtfully designed to be a welcoming and engaging space 
                     where children are encouraged to explore, learn, and flourish.
                    </div>
                    </div>
                   

                </div>

                <div className="w-full">
                    <Footer />
                </div>

            </div>
        </>
    )
}
export default AboutUS