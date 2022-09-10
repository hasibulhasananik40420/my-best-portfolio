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


                {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 pb-12 '>
                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-1.jpg" alt="" />
                        <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[120px] bottom-[144px]'>11 Dec, 22</p>
                        <h1 className='text-2xl font-semibold text-white mt-2'>Top tools for Photographers</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>

                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-2.jpg" alt="" />
                        <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[120px] bottom-[144px]'>12 Aug, 22</p>
                        <h1 className='text-2xl font-semibold text-white mt-2'>Take a tour of my office</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>

                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-3.jpg" alt="" />
                        <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[120px] bottom-[176px]'>4 Feb, 22</p>
                        <h1 className='text-2xl font-semibold text-white mt-2'>How i became a Web Designer</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>

                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-4.jpg" alt="" />
                        <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[152px] bottom-[168px]'>11 Nov, 20</p>
                        <h1 className='md:text-2xl text-xl font-semibold text-white mt-2'>How to improve work performance</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>

                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-5.jpg" alt="" />
                        <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[152px] bottom-[144px]'>27 Dec, 19</p>
                        <h1 className='text-2xl font-semibold text-white mt-2'>How to work from home</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>
                    <div className=' md:w-[400px] w-full font-san'>
                        <img src="http://likeabawz.dk/exill/demo/kitzu/template/img/post-6.jpg" alt="" />
                        <p className='bg-[#009e66] p-1 w-24 text-white font-semibold absolute md:bottom-[152px] bottom-[140px]'>19 Feb, 18</p>
                        <h1 className='md:text-2xl text-xl font-semibold text-white mt-2'>How to enjoy your business trip</h1>
                        <p className=' text-white mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    </div>
                </div> */}




                <div>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-wrap -m-4">
                                <div class="p-4 md:w-1/3">
                                    <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog" />
                                        <div class="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <div class="flex items-center flex-wrap ">
                                                <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3">
                                    <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog" />
                                        <div class="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <div class="flex items-center flex-wrap ">
                                                <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3">
                                    <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog" />
                                        <div class="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <div class="flex items-center flex-wrap ">
                                                <button class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



            </div>




        </div>
    );
};

export default Blogs;