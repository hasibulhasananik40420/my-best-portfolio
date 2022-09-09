import React from 'react';
import { SiNamecheap } from 'react-icons/si';
import { BsBookmarks } from 'react-icons/bs';
import { MdLocalPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className='bg-black md:h-[100vh] pb-8'>
            <div className='mx-16'>
                <div className='pt-16 text-center text-white'>
                    <p className='font-mons'>Feel free to contact me anytimes</p>
                    <h1 className='md:text-5xl text-3xl font-bold mt-4 font-san'>Get in Touch</h1>
                    <div className='border border-[#009e66] md:w-1/4 w-full mt-4 mx-auto'></div>

                </div>


                <form className='md:flex justify-between gap-16 mt-8'>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='md:w-3/4 w-full mt-6'>
                        <h1 className='text-4xl mb-6 text-white font-mons'>Message Me</h1>
                        <div className='md:flex w-full md:gap-6 mb-4'>
                            <input className=' py-3 bg-[#161616] w-full pl-3 mb-4 md:mb-0 focus:border-b-2 outline-0' type="text" placeholder='Name' />
                            <input className='py-3 bg-[#161616] w-full pl-3 focus:border-b-2 outline-0' type="text" placeholder='Email' />
                        </div>

                        <div>
                            <input className='py-3 bg-[#161616] w-full pl-3 mb-4 focus:border-b-2 outline-0 ' type="text" placeholder='Subject' />
                            <textarea className='py-3 bg-[#161616] w-full pl-3 focus:border-b-2 outline-0' name="" id="" cols="30" rows="5" placeholder='Message'></textarea>

                        </div>

                        <button className='py-3 px-8 mt-6 rounded-full bg-[#009e66] text-white font-medium'>Sent Message</button>
                    </div>

                    <div className='md:w-2/4 w-full mt-6 md:ml-16'>
                        <h1 className='text-4xl mb-6 text-white font-mons'>Contact Info</h1>
                        <p className='text-white font-mons'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>

                        <div className='mt-8 w-full border-l-2 pl-4'>



                            <div className='flex items-center gap-12 mb-4 '>
                                <div><SiNamecheap className='text-3xl text-[#009e66]'></SiNamecheap>
                                </div>

                                <div className='text-white font-san'>
                                    <h1 className='font-bold text-xl'>Name</h1>
                                    <p className='text-sm'>Hasibul Hasan</p>
                                </div>
                            </div>



                            <div className='flex items-center gap-12 mb-4'>
                                <div> <BsBookmarks className='text-3xl text-[#009e66]'></BsBookmarks>
                                </div>

                                <div className='text-white font-san'>
                                    <h1 className='font-bold text-xl'>Location</h1>
                                    <p className='text-sm'>4155 Rajshahi, Bangladesh.</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-12 mb-4'>
                                <div> <MdLocalPhone className='text-3xl text-[#009e66]'></MdLocalPhone>
                                </div>

                                <div className='text-white font-san'>
                                    <h1 className='font-bold text-xl'>Call Me</h1>
                                    <p className='text-sm'>+88 01790-170749</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-12'>
                                <div> <AiOutlineMail className='text-3xl text-[#009e66]'></AiOutlineMail>
                                </div>

                                <div className='text-white font-san'>
                                    <h1 className='font-bold text-xl'>Email Me</h1>
                                    <p className='text-sm'>hasibulhasan40420@gmail.com</p>
                                </div>
                            </div>



                        </div>


                    </div>

                </form>
            </div >
        </div >
    );
};

export default Contact;