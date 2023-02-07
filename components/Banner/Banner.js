
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faChevronCircleRight,faCirclePlay,  } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import bg1 from '../../images/Ellipse 139.png'
import bg2 from '../../images/Group 3840.png'
import bg3 from '../../images/Vector 32 (1).png'
import person from '../../images/person.png'
import gropu1 from '../../images/Group 3866.png'
import gropu2 from '../../images/Group 3867.png'
import gropu3 from '../../images/Group 3868.png'
import gropu4 from '../../images/group-4.png'
import brand1 from '../../images/Mask Group (1).png'
import brand2 from '../../images/Mask Group (2).png'
import brand3 from '../../images/Mask Group (3).png'
import brand4 from '../../images/Mask Group.png'

const Banner = () => {
  
    return (
        <div className="grid  md:grid-cols-2 grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center mb-4">
             <div className=''>
             <h1 className="font-sporting text-3xl md:text-5xl w-full leading-[50px] md:leading-[70px]">Healthy in side <br /> <span className="text-[#8382EB]">fresh</span> out side</h1>
                <p className="font-poppins leading-[28px]  md:w-[380px] mb-2 text-start">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and  run a healthy routine.</p>
                <div className='flex mb-3 mt-4'>
                <button className="btn mr-3 font-poppins">Get started  <FontAwesomeIcon className='w-6 h-6 ml-5' icon={faChevronCircleRight} /> </button>
                <button className="btn hover:bg-violet-600 hover:text-white font-bold font-poppins bg-white text-black border-0"><FontAwesomeIcon className='w-6 h-6 mr-2' icon={faCirclePlay} />Learn more</button>
                </div>
                <div className='mt-6'>
                    <p>Brands:</p>
                    <div className='flex items-center'>
                        <Image 
                        className='w-[58px] h-[27px] mr-3'
                            src={brand3}
                        />
                         <Image 
                          className='w-[58px] h-[54px] mr-3'
                            src={brand2}
                        />
                         <Image 
                          className='w-[80px] h-[41px] mr-3'
                            src={brand1}
                        />
                         <Image 
                          className='w-[120px] h-[30px]'
                            src={brand4}
                        />
                    </div>
                </div>
             </div>
            
            </div>
            <div  className='px-4'>
                
               <div className="relative h-[320px] md:h-[500px]">
             
                    <div className='absolute top-10  md:top-20 md:left-56 lg:top-20 z-0 left-6 lg:left-56'>
                    <Image
                   className='w-[170px] h-[170px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px]'
                    src={bg1}
                    alt="Picture of the author"
                    width={350}
                    height={350}
                     />
                    </div>
                    <div className='absolute top-10  md:top-28 md:left-56 lg:top-18 left-6 lg:left-56 z-20'>
                    <Image
                   className='md:w-[300px] w-[200px] h-[250px] md:h-[350px] lg:w-[300px] lg:h-[350px]'
                    src={bg2}
                    alt="Picture of the author"
                    width={300}
                    height={420}
                     />
                    </div>
                    <div className='absolute top-[100px]   md:top-[199px] lg:top-[199px] left-6 md:left-48 lg:left-48 z-10'>
                    <Image
                   className='w-[220px] h-[200px] md:w-[425px] md:h-[300px]  lg:w-[425px] lg:h-[280px]'
                    src={bg3}
                    alt="Picture of the author"
                    // width={425}
                    // height={320}
                     />
                    </div>
                    <div className='absolute top-20px  md:top-[34px]lg:top-[34px] left-14 md:left-72 lg:left-72 z-30'>
                    <Image
                   
                    src={person}
                    className=' w-[170px] h-[300px] md:w-[300px] md:h-[485px]  lg:w-[300px] lg:h-[478px]'
                    alt="Picture of the author"
                    // width={300}
                    // height={500}
                     />
                    </div>
                    <div className='absolute left-[-30px]  md:left-28 z-40'>
                        <Image 
                        src={gropu1}
                        layout='responsive'

                        />
                    </div>
                    <div className='absolute right-[40px]  md:right-[-30px] z-40 md:top-14'>
                        <Image 
                        src={gropu2}

                        />
                    </div>
                    <div className='absolute left-[-90px] bottom-[-20px] z-50 md:bottom-8 md:left-20'>
                        <Image 
                        src={gropu3}

                        />
                    </div>
                    <div className='absolute right-[20px] bottom-10 md:bottom-24 md:right-[-20px] z-50 '>
                        <Image 
                        src={gropu4}
                            width={120}
                            height={120}
                        />
                    </div>
               </div>
            </div>
        </div>
    );
};



export default Banner;