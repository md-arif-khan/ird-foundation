import Image from "next/image";
import bg1 from '../../images/Ellipse 137.png'
import bg2 from '../../images/Group 3841.png'
import bg3 from '../../images/image 78.png'
import bg4 from '../../images/Vector 35.png'
import dance1 from '../../images/Group 3854 (1).png'
import dance2 from '../../images/Group 3856.png'
import dance3 from '../../images/Group 3853.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons'
const BestBody = () => {
    return (
        <div className="bg-gradient-to-r mx-4 from-[#fbf9eb7e] via-[#fae8ff8c] to-white">
                <div className="max-w-screen-xl mx-auto">
                <div className="grid h-[800px] md:h-[500px]  lg:grid-cols-2  sm:grid-cols-1">

<div className="relative ml-4 ">
<div className="absolute md:top-24 md:left-10 z-0 top-24 left-28">
     <Image 
     className="md:w-[381px]  md:h-[381px] w-[200px] h-[200px]"
     src={bg1}
     />
 </div>
 <div className="absolute top-[150px] left-[-20px] z-10">
     <Image 
       className="md:w-[400px] md:h-[300px] w-[150px] h-[150px]"
       src={bg4}
     />
 </div>
 <div className="absolute top-10 left-[60px] z-20">
 <Image 
       className="md:w-[350px] md:h-[450px] w-[200px] h-[350px]"
       src={bg2}
     />
 </div>
 <div className="absolute top-10 z-30">
 <Image 
       className="md:w-[380px] md:h-[450px] w-[280px] h-[350px]"
       src={bg3}
     />
 </div>
 <div className="z-40 absolute top-20 left-10 ">
 <Image 
       className="w-14 h-14"
       src={dance1}
     />
 </div>
 <div className="z-50 absolute md:top-[250px] md:right-44 right-0 top-[150px]">
 <Image 
       className="w-20 h-20"
       src={dance2}
     />
 </div>
 <div className="absolute z-50  top-[240px] left-[-70px] ">
 <Image 
       className="w-36 h-28"
       src={dance3}
     />
 </div>
</div>

<div className="flex items-center justify-center pt-5">
<div>
<h1 className="font-sporting text-[24px] md:text-[46px] mt-5">Best full body workout to lose fat</h1>
<p className="font-poppins mb-8">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
<button className="btn mr-3 font-poppins">Get started  <FontAwesomeIcon className='w-6 h-4 ml-6' icon={faArrowRight} /> </button>
</div>
</div>
</div>
 </div>
               
 </div>
        
    );
};

export default BestBody;