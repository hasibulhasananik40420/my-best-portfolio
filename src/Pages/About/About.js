import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const About = () => {
    return (
        <div className='bg-black'>


            <div className='text-white text-center'>
                <p className='pt-10'>Get to know me</p>
                <h1 className='text-4xl font-bold mt-4'>About Me</h1>
                <div className='border border-[#009e66] md:w-1/4 w-full mt-4 mx-auto'></div>
            </div>


            <div className='md:flex justify-between  gap-24 md:mx-20 mx-8 mt-16'>



                <div >
                    {/* <img className='h-[500px]' src="https://harnishdesign.net/demo/html/callum/images/web-developer.jpg" alt="" /> */}
                    <img className='w-[400px] h-[480px] border-2' src="https://i.ibb.co/LYpbW6P/IMG-20220506-WA0087.jpg" alt="" />
                </div>


                <div className='md:w-[900px] mt-8 md:mt-0'>
                    <p className='text-[#009e66] text-xl mb-4 font-semibold'>Who am i?</p>
                    <h1 className='md:text-4xl text-2xl text-white'>I'm Hasibul Hasan, a visual UX/UI Designer and Web Developer</h1>
                    <p className='text-gray-300 mt-6 border-b border-b-gray-500 pb-6'>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>



                    <div className='md:flex justify-between text-white md:w-3/4 w-full mt-10'>
                        <div>
                            <h1 ><span className=' font-bold'>Name :</span> <span className='text-gray-300'>Hasibul Hasan</span></h1>
                            <h1 className='mt-2'><span className=' font-bold'>Age :</span> 21</h1>
                        </div>

                        <div>
                            <h1><span className='font-bold'>Email : </span> <span className='text-[#009e66]'> emma@example.com</span></h1>
                            <h1 className='mt-2'>
                                <span className='font-bold'>From : </span> <span className='text-gray-300'>Rajshahi, Bangladesh</span></h1>
                        </div>
                    </div>


                    <div className='md:flex justify-between items-center md:w-3/4 w-full mt-6'>

                        <div> <button className='py-3 px-8 mt-6 rounded-full bg-[#009e66] text-white font-medium'>Download Cv</button></div>

                        <div className='border border-gray-400 md:w-1/4 w-full mt-4'></div>


                        <div className='flex gap-3 mt-4'>
                            <AiOutlineTwitter className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></AiOutlineTwitter>
                            <AiOutlineInstagram className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></AiOutlineInstagram>
                            <AiFillLinkedin className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></AiFillLinkedin>
                            <AiFillGithub className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></AiFillGithub>
                            <FaFacebook className='text-white text-xl hover:text-[#009e66] duration-300 cursor-pointer'></FaFacebook>
                        </div>

                    </div>

                </div>


            </div>





            <div id="services" class="section relative pt-20 pb-8 md:pt-16 md:pb-0 ">
                <p class=" ml-32 leading-normal font-thin text-white">Services i offer to my clients</p>
                <h2 class="text-4xl ml-32 mb-8 leading-normal font-bold text-white">My Services</h2>

                <div class="container xl:max-w-6xl mx-auto px-4">


                    <div class="flex flex-wrap flex-row -mx-4 text-center">


                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >
                            <div class="py-8 px-12 mb-12 bg-[#161616] shadow-2xl border-b border-blue-600 hover:border-b-[#009e66] transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div class="inline-block text-gray-900 mb-4">
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA1AEADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUGAQIDBAf/xAAwEAACAQQBAQMKBwAAAAAAAAABAgADBAUREgYhQVEVMVRhYoGRk9HhIiNSobHB8f/EABgBAQEBAQEAAAAAAAAAAAAAAAAFAQQG/8QAIREAAgICAQQDAAAAAAAAAAAAAAIBAxEhBAUSE/ExQlH/2gAMAwEAAhEDEQA/APkMREAxseIjkPES6YOrTTBUqtXQWmrcm1vQBM38t4r0hflt9IJTdSs72VapnE416KRyHiIBB8xEu/lvFekL8tvpPN1WyrjE4gfjqDu9RMG19RdrFRqpXP76KlERBUEREAt/TIWthjSqDkhZlYeIP+znf2+Dx7olzakFxsceR/uY6QYmyuF/TV2PeB9JpY5a1vGqJl1thURiKZan2a7+071MPOOlkcm2Vz2xO4icTsjMi+LrNbpjaRRjUAckEbHvMlOsDq2tU9sn4D7zx5GpY3OWsKePFPiKgDmmnEE8h6u3zTt1i35tqnssf4mnUu7qI39p38ldiIgsiIiATfTWQt7I10uanAVCpU6OuzcnGscVkgXRKNQnzvSbR/aUiZVmRuSMVbxB0YJ1/T/JZNqPKtJd1oYrF6Yi3ot3M5HI/Htlb6ivaN9eI1uxZETjvWu3Z+0iySSSSST3mIN4/Aip/IzSzCIiCgIiIAiIgCIiAIiIB//Z" alt="" />
                                </div>
                                <h3 class="text-lg leading-normal mb-2 font-semibold text-white">Design Trends</h3>
                                <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                            </div>
                        </div>


                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                            <div class="py-8 px-12 mb-12 bg-[#161616] shadow-2xl border-b border-blue-600 hover:border-b-[#009e66] transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div class="inline-block text-gray-900 mb-4">
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAvAEADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAEFBgQCB//EACwQAAICAgEDAQUJAAAAAAAAAAECAAMEEQUSITFRE0FhkaEUIzNjcYOx4fD/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACMRAAIBAgYCAwAAAAAAAAAAAAABAgMRBBIhMVFxBUFhofD/2gAMAwEAAhEDEQA/APkMROviaKsnkaKb1LVuSCAdb7H3wRnNQi5P0ckTQ4icc2FXk2Y2Jj+0Zgi3u7+DoySMbX3V3Ag/GvZ+pgyPGq7WV/urmdiXufxn23JR8TIwATWoZUs6QX9+gBKW6tqbnqs11oxVteogvo14VVpvweIiILhOviX9nymI35qj5nU5JNbtXYrodMrBgfiIIVI5oOPJccxjWVY+DihCbC9pVB5O37fQyM7gMjFwkvUm1x+KijfT+nrLrA5DCyK6MnKyKBlhCDtgOnfntLAZuKfGVQf3BBwZY3EUbRUdm7/Or+jM1WutvG8dfgrTbXcjdZ8sN/7feVWeerPyT63P/Jm4uqxcqym5nQvS/Ujhh2/qYO5g99jjuGcn5mDb4+sq0nJKztr22zxERB1BERAEjUmIBHSp8gfKTEQBERAP/9k=" alt="" />
                                </div>
                                <h3 class="text-lg leading-normal mb-2 font-semibold text-white">PSD Design</h3>
                                <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                            </div>
                        </div>
                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                            <div class="py-8 px-12 mb-12 bg-[#161616] shadow-2xl border-b border-blue-600 transform transition hover:border-b-[#009e66] duration-300 ease-in-out hover:-translate-y-2">
                                <div class="inline-block text-gray-900 mb-4">
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAsAEADASIAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAUCAwEEBgf/xAAmEAACAgECBQQDAAAAAAAAAAABAgADBAUREiExQVEGMnGhQlJh/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAgEQACAgICAgMAAAAAAAAAAAAAAQIDBBExcRIhUWHx/9oADAMBAAIRAxEAPwD5DETKtGssWutSzsQFA7mA3oxnAIPQiW7ThaNtUaUy80AF2f2VnwB5mFusZPARmadjNW3IBqCu5+TBlWROfuENrvW+l+EiJa1XTcLG02rIx7+K1yPyBD79dh22kWC2m6N0fKIiIgtEqemlVtXqLD2qzD52kubsPJfEyqsivm1bb7eR3EFV8HOqUVy0yr6arTJ1W63IAaxQXAb9ieZnqr6q76XquUNWw2IM8rfiWtcNU0Ri6MeJkT3VseoI7iLc/W85DjjHdeLkeCkoT8k8h9QcXJx3k2KyEkkvl6cdGrQkRm1CogGs47btt4PKSB0lrIFekYFuIHV83IAFxU7itfEjQdbHfnKVi4etfelyIiINIiIgGyi+7HfjotetvKnadmzV9RsThfMtK/zYfYE6UQQlVXJ7lFN9Dqdz1MREExERAP/Z" alt="" />
                                </div>
                                <h3 class="text-lg leading-normal mb-2 font-semibold text-white">Customer Support</h3>
                                <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                            </div>
                        </div>

                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                            <div class="py-8 px-12 mb-12 bg-[#161616] shadow-2xl border-b border-blue-600 transform transition hover:border-b-[#009e66] duration-300 ease-in-out hover:-translate-y-2">
                                <div class="inline-block mb-2">

                                    <img className='' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAD8DASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUGAgMEAQf/xAAzEAACAgECAwUGBAcAAAAAAAABAgADBAURBiExEkFRYXETFCIygZEVQsHRIzNicoKx4f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAwYEBf/EACYRAAEDAwIFBQAAAAAAAAAAAAABAgMEETEhQRMiYYHRI0JDkbH/2gAMAwEAAhEDEQA/APkMREARE3Li5DDdaLSP7DBFciZU0xMnR6ztYjIfBhtMYLe4iIgCZ0VPfatVS9p2OwEwkroum++05VoZletdqyp2+KDKaVImK5VLBpWi0YKBrFFt56uw5DyElOcqvC1gszLEyC7WqN0LOeXjy32mXEmO+E1d2LZbWlhIcCxj8XXvMhzs1M6Sq4Uj9V3tp+lgzkxmx3OYiGpRuxYdBKVm0Y27XafY1lAOxDAgpv0693nLThUUZuiCtAQtyfFuxYhvqfGQ2gYRfLzsW4bgVFG9d+X+pTehekDZFVy8q46Y+yDie2KUsZD1UkTyDoMiWng9wcXIT8wsB+hH/JVpIaHnjAzQ7/ynHZf08YPHXwrNTua3J05Y/CuIhYOVZYP/AInr+smeIEfLpXFp5sVNp9B0+85uK8db8OrLr2bsHYkd6mdPDpsvx/ervmKipT5L3/eQ+S+S8MdT7m6d9vJycI5QNN2Ox+Q9tfQ9ZIaKi9jIzCNveLSwP9I5D9/rK9fVbga3ZTjjb226r6N+36Sa1rNr03T1xaSPasnYUD8o7zBaqLiSel8ll7b+SqZTB8q5x0Lkj7zVESnQIlksIiIKdePqORTjPjbh6HGxR+e3p4SYwOIsXFw6qDjXfw1A3Uqdz49RK5EHmmo4ZUs5OpLajrIyMyrJx6PZ2VAhWc79fLykZdbZfY1lrl3bqTMIg0igjiREamBERBqf/9k=" alt="" />
                                </div>
                                <h3 class="text-lg leading-normal mb-2 font-semibold text-white">Web Development</h3>
                                <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                            </div>
                        </div>
                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                            <div class="py-8 px-12 mb-12 bg-[#161616] shadow-2xl border-b border-blue-600 transform transition hover:border-b-[#009e66] duration-300 ease-in-out hover:-translate-y-2">
                                <div class="inline-block mb-4">


                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAyAEADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAMEBgUCB//EACYQAAEEAQMDBQEBAAAAAAAAAAEAAgMEEQUSUQYxYSEjMkFxE5H/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQMCBAUG/8QAIxEAAgICAAUFAAAAAAAAAAAAAAIBAwQREhMhUaEiMWFxgf/aAAwDAQACEQMRAD8A+QoiIAiLvaR0+bUJmuF0bXD22j0P6UKb766F4nk4KKzfozUJzDOPLXjs4chVkLFZXWGWdxIREQyCdkV3R5KkV5jrzcxjsT2aeT4QwsbgWWiN6PEtSepDBZkGwyElgIyfT7IK0vTFyxchnNqUyFrwGkgDAx4VzUZ9PjEZv/zIdnYXM3L1pstGVjzp4ZtBG/Yzb6qDz2Tlzfj+qvr3109+/gyGqXrVieWGeYvjZK7a0tb6YPOMqG9SmozCOYfIZY4dnBaiW3oQleJBBvDiHZiPf7+lJ1BLTbp5baG7cPaa04dnkcIbdecyMiLVMRPxr9gxaIik7IREQEzp5Zooq75AWMJ2Fx+OfPC1fTdGejDMJ9nuODmljsgjCxy62k65LQidDI0yxge2M/E8fiHPz6LLKZSrX15IdX0+epPJLOYw2SRxYA/JIzwqlqzLalMs79zsY8AcBLVmW3O6ad+57v8AB4CiQ2qkaFjmaloCIiFwREQBERAEREAREQH/2Q==" alt="" />
                                </div>
                                <h3 class="text-lg leading-normal mb-2 font-semibold text-white">Fully Responsive
                                </h3>
                                <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                            </div>
                        </div>
                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                            <div class="py-8 px-12 mb-12 bg-[#161616] shadow-2xl border-b border-blue-600 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:border-b-[#009e66]">
                                <div class="inline-block text-gray-900 mb-4">
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAyAEADASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAUDBAYCB//EACkQAAEDAwMDBAIDAAAAAAAAAAEAAgMEBRESIVExQWEGEyIycYEUkfD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMFAgb/xAAkEQACAgEDAgcAAAAAAAAAAAAAAQIDBBESIQUxEzNBUZGx4f/aAAwDAQACEQMRAD8A+QoiIAi9wwyzyCOCN0jz2aMqxTemayQZnkjhHH2P+/aFNuRVT5ktCIi3rvbjbZ2RmUSa26gcYwtFDuuyNkVOL4YREQ7C37TbJLjPpHwib938eB5V/wBO2uKClZUysDp5BkEjOkdsK2hiZfVtrlXUuff8JVZPTWGhaIIMlx0gZ+x5JWaz3Jtygc8Rlj2HS5ucj9LPXUUFdD7VQ0lucgg4IPhT6t9NYba5lMMSPzoBOS53J/CgzY+HdXsSbtb7kL1JUioujw05bENA/PdS0JLiS45JOSeUUnqaa1VWoL0CIiFhctk1yrYpSKyVkVPH0jaMnbYDZXLVdYa6JgOY5zsY3dSR1I5C5i2XeW2xSMiiY4vOdTidltWy6+5dv5dxma0NiLW4bsPAH9oYuXhynvexJLtp3+EudWdVUSe1BJJt8Gl2/hcBV1c1bMZqh2px6DsBwFYvV+bVQupqRrhG7Z73DBcOAFBQt6XiSpi52LRv6CIiGqEREAREQBERAEREAREQH//Z" alt="" />
                                </div>
                                <h3 class="text-lg leading-normal mb-2 font-semibold text-white">Branding
                                </h3>
                                <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div>


                <div class="py-16 white">
                    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">

                        <p class="mb-4 leading-normal font-thin text-white">What my clients think about me</p>

                        <h2 class="mb-12  text-3xl text-white font-bold md:text-4xl">Testimonials</h2>
                        <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">

                            <div class="row-span-2 p-6 rounded bg-[#161616] text-center sm:p-8">
                                <div class="h-full flex flex-col justify-center space-y-4">
                                    <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                                    <p class="text-gray-400 md:text-xl"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
                                    <div>
                                        <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                        <span class="text-xs text-gray-500">Product Designer</span>
                                    </div>
                                </div>
                            </div>

                            <div class="p-6  rounded bg-[#161616] sm:flex sm:space-x-8 sm:p-8">
                                <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                    <p class="text-gray-500"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
                                    <div>
                                        <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                        <span class="text-xs text-gray-500">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-6 rounded bg-[#161616] sm:flex sm:space-x-8 sm:p-8">
                                <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                    <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
                                    <div>
                                        <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                        <span class="text-xs text-gray-500">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;