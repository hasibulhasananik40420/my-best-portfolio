import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const Resume = () => {
    return (
        <div className='bg-black'>
            <div className='md:mx-14 mx-6'>
                <div className='pt-14'>
                    <p className='text-gray-400 text-center'>Check out my Resume</p>
                    <h1 className='text-white font-bold text-4xl text-center pt-2'>Resume</h1>
                    <div className='border border-[#009e66] md:w-1/4 w-full mt-4 mx-auto'></div>
                </div>



                <div className='md:flex justify-between gap-12 mt-16'>
                    <div className='md:w-2/4 w-full md:mb-0 mb-8'>
                        <h1 className='text-4xl font-bold text-white'>Education</h1>
                        <div className='border-l-2 border-l-[#009e66]'>


                            <div className='relative mt-8 pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616]'>

                                <h1 className='text-2xl font-semibold text-white pt-4'>Computer Science</h1>
                                <p className='text-gray-400 font-light mt-2'>Cambridge University / 2004 - 2007</p>
                                <p className='text-gray-400 mt-3 mb-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-[#009e66] rounded-r-full'> </div>

                            </div>

                            <div className='relative pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616]'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>Bachelor Degree</h1>
                                <p className='text-gray-400 font-light mt-2'>University of Tokyo / 2008 - 2010</p>
                                <p className='text-gray-400 mt-3 mb-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-[#009e66] rounded-r-full'> </div>

                            </div>

                            <div className='relative pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616]'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>Master Degree</h1>
                                <p className='text-gray-400 font-light mt-2'>Harvard University / 2012 - 2015</p>
                                <p className='text-gray-400 mt-3 mb-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-[#009e66] rounded-r-full'> </div>

                            </div>

                        </div>

                    </div>


                    <div className='md:w-2/4 w-full'>
                        <h1 className='text-4xl font-bold text-white'>Experience</h1>
                        <div className='border-l-2 border-l-[#009e66] '>


                            <div className='relative mt-8 pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616]'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>Software Engineer</h1>
                                <p className='text-gray-400 font-light mt-2'>Adobe / 2015 - 2017</p>
                                <p className='text-gray-400 mt-3 mb-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-[#009e66] rounded-r-full'> </div>
                            </div>

                            <div className='relative pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616]'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>Back-End Developer</h1>
                                <p className='text-gray-400 font-light mt-2'>Google / 2017 - 2018</p>
                                <p className='text-gray-400 mt-3 mb-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-[#009e66] rounded-r-full'> </div>

                            </div>

                            <div className='relative pl-8 pb-5 px-2 border-b border-b-gray-500 bg-[#161616]'>
                                <h1 className='text-2xl font-semibold text-white pt-4'>UI/UX Designer</h1>
                                <p className='text-gray-400 font-light mt-2'>Discord / 2019 - Present</p>
                                <p className='text-gray-400 mt-3 mb-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                                <div className='absolute top-6 left-[-2px] w-6 h-4 bg-[#009e66] rounded-r-full'> </div>

                            </div>

                        </div>

                    </div>
                </div>



                <div >

                    <p className='text-white mb-2 ml-6 mt-24'>My level of knowledge in some tools
                    </p>

                    <h1 className='text-white font-bold text-4xl ml-6'>My Skills</h1>


                    <ProgressBar></ProgressBar>
                </div>




                <div>

                </div>




            </div>
        </div>
    );
};

export default Resume;