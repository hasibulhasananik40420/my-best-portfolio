import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-black  w-full overflow-hidden'>
            <div className='md:mx-14 mx-6'>
                <div className='pt-12 '>
                    <p className='text-gray-400 text-center'>Check out my latest blog posts</p>
                    <h1 className='text-white font-bold text-4xl text-center pt-4'>My Blog</h1>
                    <div className='border border-[#009e66] md:w-1/4 w-full mt-4 mx-auto'></div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 pb-12 '>
                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-1.jpg" alt="" />
                        {/* <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[120px] bottom-[144px]'>11 Dec, 22</p> */}
                        <h1 className='text-2xl font-semibold text-white mt-2'>Top tools for Photographers</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>

                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-2.jpg" alt="" />
                        {/* <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[120px] bottom-[144px]'>12 Aug, 22</p> */}
                        <h1 className='text-2xl font-semibold text-white mt-2'>Take a tour of my office</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>

                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-3.jpg" alt="" />
                        {/* <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[120px] bottom-[176px]'>4 Feb, 22</p> */}
                        <h1 className='text-2xl font-semibold text-white mt-2'>How i became a Web Designer</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>

                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-4.jpg" alt="" />
                        {/* <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[152px] bottom-[168px]'>11 Nov, 20</p> */}
                        <h1 className='md:text-2xl text-xl font-semibold text-white mt-2'>How to improve work performance</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>

                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-5.jpg" alt="" />
                        {/* <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[152px] bottom-[144px]'>27 Dec, 19</p> */}
                        <h1 className='text-2xl font-semibold text-white mt-2'>How to work from home</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>
                    <div className=' md:w-[400px] w-full font-san'>
                        {/* <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-6.jpg" alt="" /> */}
                        <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[152px] bottom-[140px]'>19 Feb, 18</p>
                        <h1 className='md:text-2xl text-xl font-semibold text-white mt-2'>How to enjoy your business trip</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>
                </div>



            </div>




        </div>
    );
};

export default Blogs;