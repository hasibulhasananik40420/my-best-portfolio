import React from 'react';
import Typical from 'react-typical'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';


const Home = () => {


    return (




        <div className=' md:h-[100vh] md:w-full  w-full overflow-hidden bg-black md:pt-6 pt-4 pb-6 md:pb-0'>

            <div className='md:flex gap-32  md:items-center w-full md:mx-14 mx-6 mt-12'>
                <div className='md:w-2/4 w-full '>

                    <h1 className=' md:text-5xl text-3xl font-bold font-mons text-white'>HASIBUL HASAN</h1>

                    <h1 className='text-3xl font-mons flex gap-3 mt-3'><span className='text-white'>I'm a  </span>  <span className='text-[#009e66]'> <Typical
                        steps={["Designer ", 2000, "Developer", 2000, "Freelancer", 2000]}
                        loop={Infinity}
                        wrapper="p"
                    /></span></h1>
                    <p className='text-white font-san leading-7 mt-4 pr-2 md:pr-0 '>Hi, my name is Hasibul Hasan and I am a full-stack web developer with 2+ years of experience with modern technologies like React, Next js, Tailwind CSS, Node js, Mongo DB, Express JS etc..</p>

                    <div className='md:flex gap-4 items-center'>
                        <button className=' py-3 px-8 mt-6 font-mons rounded-full bg-[#009e66] text-white font-medium'>Contact me</button>
                        <div className='border border-gray-400 md:w-20 w-36 mt-5'></div>

                        <div className='flex gap-3 mt-5'>
                            <AiOutlineTwitter className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></AiOutlineTwitter>
                            <AiOutlineInstagram className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></AiOutlineInstagram>
                            <AiFillLinkedin className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></AiFillLinkedin>
                            <AiFillGithub className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></AiFillGithub>
                            <FaFacebook className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></FaFacebook>
                        </div>

                    </div>


                </div>

                <div className=''>
                    {/* <img className='rounded-full border-2 w-[400px] h-[400px]' src="https://i.ibb.co/KNvnsXG/black-background-with-focus-spot-light-1017-27230.png" alt="" /> */}
                    <img className=' rounded-full border-2 border-[#22577E] hover:border-4 hover:border-[#22577E] duration-300 md:w-[400px] md:h-[400px] w-[300px] h-[300px] md:mt-0 mt-8' src="https://i.ibb.co/TbWZ8nS/black-smooth-textured-paper-background-53876-98333.png" alt="" />
                </div>
            </div>


            <div className="bubblus ">
                <img src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img className='md:block hidden' src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img className='md:block hidden' src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />
                <img className='md:block hidden' src="https://i.ibb.co/T1jmY9M/bubble.png" alt="" />

            </div>

        </div>




    );
};

export default Home;