import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import resume from '../../Img/Hasibul Hasan_Resume (5) (1).pdf'
const Navbar = () => {


    let [open, setOpen] = useState(false);
    return (
        <div>
            <div className='shadow-md w-full fixed top-0 left-0 z-20'>
                <div className='md:flex items-center justify-between bg-black text-white py-4 md:px-10 px-7'>
                    <div className=' font-bold text-2xl cursor-pointer font-[Poppins] 
      text-white'>
                        <span className='flex items-center text-2xl  text-[#009e66] mr-1 pt-2'>

                            {/* <img className='w-1/4 h-1/4' src="http://likeabawz.dk/exill/demo/kitzu/template/img/img-kitzu-logo.png" alt="" /> */}
                            <div className=' w-6 h-4 bg-amber-400 rounded-r-full mr-2'> </div>

                            <h1 className='font-mons'>HASIBUL</h1>
                        </span>



                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <BiMenuAltLeft name={open ? 'close' : 'menu'}></BiMenuAltLeft>
                    </div>

                    <ul onClick={() => setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#00459e] md:bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>


                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/' className='md:text-white  md:border-0 hover:text-gray-400 duration-500'>HOME</Link>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/about' className='md:text-white hover:text-gray-400 duration-500'>ABOUT</Link>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/resume' className='md:text-white hover:text-gray-400 duration-500'>RESUME</Link>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/mywork' className='md:text-white hover:text-gray-400 duration-500'>MY WORK</Link>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/blogs' className='md:text-white hover:text-gray-400 duration-500'>BLOGS</Link>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/contact' className='md:text-white hover:text-gray-400 duration-500'>CONTACT</Link>
                        </li>

                        <button className='py-2 px-8 md:ml-8 rounded-full bg-[#009e66] text-white font-medium'><a href={resume} download >Resume</a></button>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;