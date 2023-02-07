import Image from "next/image";
import danceImage1 from '../../images/crucified-pose.png'
import danceImage2 from '../../images/dancer-balance-posture-on-one-leg.png'
import danceImage3 from '../../images/dancer-motion.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons'

const StaticBar = () => {
    return (
       <div className="bg-gradient-to-r mx-4 from-[#fbf9eb7e] via-[#fae8ff8c] to-white">
             <div className="max-w-screen-xl mx-auto bg-gradient-to-r rounded-lg from-[#6A68F0] to-[#8E8CEA]">
            <div className="grid grid-cols-1 md:grid-cols-3 h-[350px]  md:h-[250px]">
                <div className="flex justify-center items-center">
                   <div className="flex">
                   <div className="mr-[25px]">
                        <Image 
                        className="bg-[#8987F2] p-6 rounded-md"
                        src={danceImage1}
                        width={100}
                        height={100}
                        />
                    </div>
                    <div>
                        <h3 className="font-poppins text-[20px] font-bold text-white leading-[28px]">Get that 11 line <br /> in 30 days</h3>
                        
                        
                        <div className="flex items-center">
                        <p  className="text-[16px] font-poppins">Learn more </p>
                        <FontAwesomeIcon className='w-3 h-4 ml-3' color="white" icon={faArrowRight} />
                        </div>
                    </div>
                   </div>
                </div>
                <div  className="flex justify-center items-center">
                   <div className="flex">
                   <div className="mr-[25px]">
                    <Image 
                        className="bg-[#8987F2] p-6 rounded-md"
                        src={danceImage2}
                        width={100}
                        height={100}
                        />
                    </div>
                    <div>
                        <h3 className="font-poppins text-[20px] font-bold text-white leading-[28px]">14 Days <br />
                          sherd challenge</h3>
                          <div className="flex items-center">
                        <p  className="text-[16px] font-poppins">Learn more </p>
                        <FontAwesomeIcon className='w-3 h-4 ml-3' color="white" icon={faArrowRight} />
                        </div>
                    </div>
                   </div>
                </div>
                <div className="flex justify-center items-center">
                   <div className="flex">
                   <div className="mr-[25px]">
                        <Image 
                        className="bg-[#8987F2] p-6 rounded-md"
                        src={danceImage3}
                        width={100}
                        height={100}
                        />
                    </div>
                    <div>
                        <h3 className="font-poppins text-[20px] font-bold text-white leading-[28px]">Get that 11 line <br /> in 30 days</h3>
                        
                        
                        <div className="flex items-center">
                        <p  className="text-[16px] font-poppins">Learn more </p>
                        <FontAwesomeIcon className='w-3 h-4 ml-3' color="white" icon={faArrowRight} />
                        </div>
                    </div>
                   </div>
                </div>
               
            </div>
        </div>
       </div>
    );
};

export default StaticBar;