import React from 'react';
import { MdOutlineHeadsetMic } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-width px-3 md:px-6 py-16 flex justify-between items-start gap-8 text-white font-rajdhani'>
                <section className='w-2/6 flex flex-col'>
                    <h1 className='font-semibold text-xl leading-12 mb-5 border-b border-gray-200'>Feel Free To Say Hello.</h1>
                    <div className='space-y-2.5 mb-3.5'>
                        <h2 className='font-medium text-lg hover:text-[#eb9235] w-fit inline-flex items-center gap-1.5'>
                            <MdOutlineHeadsetMic className='text-2xl' /> <a href="tel:+8801711247713">01711247713</a>
                        </h2>
                        <h2 className='font-medium text-lg hover:text-[#eb9235] w-fit inline-flex items-center gap-1.5'>
                            <IoIosMail className='text-2xl' /> <a href='mailto:friends.tiltd@gmail.com'>friends.tiltd@gmail.com</a>
                        </h2>
                    </div>
                    <div className='inline-flex items-center gap-3 text-2xl'>
                        <a className='block' href="http://facebook.com/friendstradebd" target="_blank" rel="noopener noreferrer">
                            <p className='p-2.5 rounded-full text-gray-300 hover:text-blue-500 border border-gray-300 hover:border-blue-500 cursor-pointer'>
                                <FaFacebook />
                            </p>
                        </a>
                        <a className='block' href="http://instagram.com/friendstradebd" target="_blank" rel="noopener noreferrer">
                            <p className='p-2.5 rounded-full text-gray-300 hover:text-blue-500 border border-gray-300 hover:border-blue-500 cursor-pointer'>
                                <FaInstagram />
                            </p>
                        </a>
                        <a className='block' href="http://youtube.com/friendstradebd" target="_blank" rel="noopener noreferrer">
                            <p className='p-2.5 rounded-full text-gray-300 hover:text-blue-500 border border-gray-300 hover:border-blue-500 cursor-pointer'>
                                <FaYoutube />
                            </p>
                        </a>
                    </div>
                </section>
                <section className='w-4/6 '>
                    <h1 className='font-semibold text-xl leading-12 mb-5 border-b border-gray-200'>About Us.</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div>
                            <ul>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Trams & Condition.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Return Policy.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Refound Policy.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Blogs.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Privacy Policy.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>About Us.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Career.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Brands.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Online Delivery.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Payments.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>EMI Trams.</li>
                                <li className='cursor-pointer hover:underline hover:text-[#eb9235] duration-300 w-fit'>Contacts.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='w-2/6 '>
                    <h1 className='font-semibold text-xl leading-12 mb-5 border-b border-gray-200'>Reach Out Offline.</h1>
                    <h2 className='font-semibold text-2xl text-[#eb9235] mb-3'>Friends Trade International.</h2>
                    <p className=''>City Plaza Market 2nd Floor, Fazlul Haque Avenue, <br /> Barishal Sador-8200, Barishal. </p>
                </section>
            </div>
        </div>
    );
};

export default Footer;