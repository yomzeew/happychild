import Footer from "./footer"
import Header from './header'

const OurServices = () => {
    return (
        <>
            <div className="flex flex-col w-full h-screen ">
                <div className="bg-white"><Header /></div>
                <div className="bg-creamcolor">
                    <div className="text-2xl potta-one-regular text-center h-32 flex items-center justify-center ">Our Services</div>
                </div>
                <div className="bg-white flex-1 flex gap-x-3 md:ml-10 px-5 py-5">
                    <div className="h-full w-2 border-r-2 border-bluecolor">

                    </div>
                    <div>
                    <div className=" text-sm fredoka">
                    <div className="potta-one-regular text-lg mt-3">Child Day Care & Early Childhood Education:</div>
                    <div>A safe and secure environment where young children receive full-time care.</div>
                    <div>A balanced, play-based curriculum designed to support early learning and overall development.</div>
                    <div className="potta-one-regular text-lg mt-3">Holistic Development Programs:</div>
                    <div>Age-appropriate activities that promote emotional, social, cognitive, and physical growth.
                        Programs that encourage curiosity, creativity, and confidence.</div>

                    <div className="potta-one-regular text-lg mt-3">Experienced, Caring Staff:</div>

                    <div>A team of caring, experienced professionals dedicated to nurturing each child's success.
                        Individualized attention to support the unique needs of every child.</div>
                    Parent Partnerships & Communication:

                    <div>Open communication channels and regular updates to keep parents involved in their child's progress.
                        Collaborative efforts with parents to ensure the best outcomes for children.
                        Engaging & Stimulating Facility:</div>

                    <div>A welcoming, child-friendly space designed to foster learning and creativity.</div>
                    <div>A stimulating environment that encourages children to explore, learn, and thrive.</div>

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
export default OurServices