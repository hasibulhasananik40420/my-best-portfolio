import React from 'react';
import './MyWork.css'
const MyWork = () => {
    return (
        <div className='bg-black pt-2 pb-8 w-full overflow-hidden'>
            <div className='md:px-14 px-6'>

                <div className='text-white text-center'>
                    <p className='pt-8 font-mons'>Showcasing some of my best work</p>
                    <h1 className='text-4xl font-bold mt-2 font-san'>My Work </h1>
                    <div className='border border-[#009e66] md:w-1/4 w-full mt-4 mx-auto'></div>
                </div>
                <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8 mt-12'>


                    <div data-aos="fade-up-right" className='card'>

                        <img className='card-img' src="https://i.ibb.co/b2bSp17/screencapture-assignment-12-fe1d7-web-app-2022-10-03-23-01-44.png" alt="" />

                        <div className="card-body ">

                            <h1 className='card-title'>Bicycle Parts Manufacturers</h1>
                            <p className='card-sub-title'>3rd Jan 2022</p>
                            <p className='card-info'>Authorization and authorization Implementation
                                Admin and user inter Connection system
                                Connect Stripe Payment Method system with card payment.</p>
                            <div className='flex gap-4 text-red-600 p-2'>
                                <a href="https://assignment-12-fe1d7.web.app/">Live Link</a>
                                <a href="https://github.com/hasibulhasananik40420/Bicycle-parts-manufacturers-client">Client Repo</a>
                                <a href="https://github.com/hasibulhasananik40420/Bicycle-parts-manufacturers-server">Server Repo</a>
                            </div>
                            <button className='card-btn'>Learn more</button>
                        </div>
                    </div>

                    <div data-aos="fade-left" className='card'>
                        <img className='card-img' src="https://i.ibb.co/k1tc1N1/screencapture-assginment-11-web-app-2022-10-04-10-26-25.png" alt="" />

                        <div className="card-body">

                            <h1 className='card-title'>IZMO STOCK Inventory Management</h1>
                            <p className='card-sub-title'>5th May 2022</p>
                            <p className='card-info'>Authorization and authorization Implementation
                                Admin and user inter Connection system
                                Connect Stripe Payment Method system with card payment.</p>
                            <div className='flex gap-4 text-red-600 p-2'>
                                <a href="https://assginment-11.web.app/">Live Link</a>
                                <a href="https://github.com/hasibulhasananik40420/Izmo-stock-client">Client Repo</a>
                                <a href="https://github.com/hasibulhasananik40420/Izmo-stock-server">Server Repo</a>
                            </div>
                            <button className='card-btn'>Learn more</button>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='card'>
                        <img className='card-img' src="https://i.ibb.co/v1V7wkb/screencapture-desgin-agency-web-app-2022-10-04-10-27-31.png" alt="" />

                        <div className="card-body">

                            <h1 className='card-title'>DESIGN AGENCY -service provider</h1>
                            <p className='card-sub-title'>11 July 2022</p>
                            <p className='card-info'>Authorization and authorization Implementation
                                Admin and user inter Connection system
                                Connect Stripe Payment Method system with card payment.</p>

                            <div className='flex gap-4 text-red-600 p-2'>
                                <a href="https://desgin-agency.web.app/">Live Link</a>
                                <a href="https://github.com/hasibulhasananik40420/desgin-agency">Client Repo</a>
                                <a href="https://github.com/hasibulhasananik40420/desgin-agency-server">Server Repo</a>
                            </div>
                            <button className='card-btn'>Learn more</button>
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" className='card'>
                        <img className='card-img' src="https://i.ibb.co/SXCthdk/Screenshot-4.png" alt="" />

                        <div className="card-body ">

                            <h1 className='card-title'>Traditional Barbar Shop</h1>
                            <p className='card-sub-title'>25 July 2021</p>
                            <p className='card-info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis consequatur cumque harum ducimus officia deserunt alias quaerat culpa quos, eum consectetur voluptatum? Placeat, repellat fugit.</p>

                            <div className='flex gap-4 text-red-600 p-2'>
                                <a href="">Live Link</a>
                                <a href="">Client Repo</a>
                                <a href="">Server Repo</a>
                            </div>
                            <button className='card-btn'>Learn more</button>
                        </div>
                    </div>

                    <div data-aos="zoom-in-left" className='card'>
                        <img className='card-img' src="https://i.ibb.co/bzy7fH3/Screenshot-8.png" alt="" />

                        <div className="card-body">

                            <h1 className='card-title'>Genius Cars Service </h1>
                            <p className='card-sub-title'>11th Dec 2021</p>
                            <p className='card-info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis consequatur cumque harum ducimus officia deserunt alias quaerat culpa quos, eum consectetur voluptatum? Placeat, repellat fugit.</p>
                            <div className='flex gap-4 text-red-600 p-2'>
                                <a href="">Live Link</a>
                                <a href="">Client Repo</a>
                                <a href="">Server Repo</a>
                            </div>
                            <button className='card-btn'>Learn more</button>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" className='card'>
                        <img className='card-img' src="https://i.ibb.co/TMhBDpG/Screenshot-10.png" alt="" />

                        <div className="card-body">

                            <h1 className='card-title'>Ecommarce Website</h1>
                            <p className='card-sub-title'>22 Feb 2022</p>
                            <p className='card-info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis consequatur cumque harum ducimus officia deserunt alias quaerat culpa quos, eum consectetur voluptatum? Placeat, repellat fugit.</p>

                            <div className='flex gap-4 text-red-600 p-2'>
                                <a href="">Live Link</a>
                                <a href="">Client Repo</a>
                                <a href="">Server Repo</a>
                            </div>
                            <button className='card-btn'>Learn more</button>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default MyWork;