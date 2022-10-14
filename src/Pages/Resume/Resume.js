import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const Resume = () => {
    return (
        <div className='bg-black'>
            <div className='md:mx-14 mx-6 pb-12'>
                <div className='pt-14'>
                    <p className='text-gray-400 text-center font-mons'>Check out my Resume</p>
                    <h1 className='text-white font-bold text-4xl text-center pt-2 font-san'>Resume</h1>
                    <div className='border border-[#009e66] md:w-1/4 w-full mt-4 mx-auto'></div>
                </div>



                <div className='md:flex justify-between gap-12 mt-16'>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='md:w-2/4 w-full md:mb-0 mb-8'>
                        <h1 className='text-4xl font-bold text-white font-mons'>Education</h1>
                        <div className='border-l-2 border-l-[#009e66]'>


                            <div className='relative mt-8 pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616] font-san'>

                                <h1 className='text-2xl font-semibold text-white pt-4'>Bachelor of Science.</h1>
                                <p className='text-gray-400 font-light mt-2'>National University / 2021 - to Present</p>
                                <p className='text-gray-400 mt-3 mb-2 '> Dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-[#009e66] rounded-r-full'> </div>

                            </div>

                            <div className='relative pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616] font-san'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>Higher Secondary</h1>
                                <p className='text-gray-400 font-light mt-2'>Ishwardi Govt. college / 2019 - 2020</p>
                                <p className='text-gray-400 mt-3 mb-2 '> Dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-orange-500 rounded-r-full'> </div>

                            </div>

                            <div className='relative pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616] font-san'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>Secondary School Certificate</h1>
                                <p className='text-gray-400 font-light mt-2'>Majhgram high school / 2015 - 2016</p>
                                <p className='text-gray-400 mt-3 mb-2 '> Dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-pink-500 rounded-r-full'> </div>

                            </div>

                        </div>

                    </div>


                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='md:w-2/4 w-full'>
                        <h1 className='text-4xl font-bold text-white font-mons'>Experience</h1>
                        <div className='border-l-2 border-l-[#009e66] '>


                            <div className='relative mt-8 pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616] font-san'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>Front-End Developer</h1>
                                <p className='text-gray-400 font-light mt-2'>Adobe / 2021 - 2022</p>
                                <p className='text-gray-400 mt-3 mb-2 '> Sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-red-500 rounded-r-full'> </div>
                            </div>

                            <div className='relative pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616] font-san'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>Back-End Developer</h1>
                                <p className='text-gray-400 font-light mt-2'>Google / 2017 - 2018</p>
                                <p className='text-gray-400 mt-3 mb-2 '> Sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-sky-500 rounded-r-full'> </div>

                            </div>

                            <div className='relative pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616] font-san'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>UI/UX Designer</h1>
                                <p className='text-gray-400 font-light mt-2'>Discord / 2019 - Present</p>
                                <p className='text-gray-400 mt-3 mb-2 '> Sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-purple-700 rounded-r-full'> </div>

                            </div>

                        </div>

                    </div>
                </div>



                <div >

                    <p className='text-white mb-2 ml-6 mt-24 font-mons'>My level of knowledge in some tools
                    </p>

                    <h1 className='text-white font-bold text-4xl ml-6 font-san'>My Skills</h1>


                    <ProgressBar ></ProgressBar>
                </div>




                <div className='md:flex justify-between items-center mt-12 font-san'>
                    <div className='md:w-2/4 w-full'>
                        <h1 className='md:text-4xl text-2xl font-bold text-white'>Take a tour of my office
                        </h1>

                        <p className='text-white mt-4 leading-7'> dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem voluptas!</p>

                        <p className='text-white mt-4 leading-7'> dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum.</p>
                    </div>

                    <div>
                        <img className='w-[500px] md:mt-0 mt-16' src="https://img.freepik.com/free-photo/abstract-office-desktop_155003-6430.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580" alt="" />
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Resume;