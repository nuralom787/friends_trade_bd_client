import Image from 'next/image';
import React from 'react';
import brandLogo from '../../../../public/brandlogo.jpg';
import { FaUser, FaGift, FaShoppingBasket, FaSearch } from "react-icons/fa";
import Link from 'next/link';
import DrawerComponent from '@/app/components/Drawer';
import LoginButton from '@/app/components/login';


const Header = () => {
    return (
        <div className='header sticky top-0 z-20'>
            <section className='container-width px-3 md:px-6 py-2.5 flex justify-between items-center gap-6'>
                <div className='md:hidden'>
                    <DrawerComponent />
                </div>
                <div className='md:w-2/6'>
                    <Link href={'/'} className='max-w-fit'>
                        <Image src={brandLogo} alt='company logo' width={80} height={80} loading='lazy' />
                    </Link>
                </div>
                <form className='w-4/6 hidden md:block'>
                    <span className='w-full bg-white border border-gray-200 rounded-sm inline-flex items-center font-rajdhani font-semibold text-[#151515]'>
                        <input
                            type="search"
                            name=""
                            id=""
                            className='w-full outline-0 py-2 px-3'
                            placeholder='search for any products'
                        />
                        <button type="submit" className='cursor-pointer'>
                            <FaSearch className='mx-4 text-gray-600 font-medium' />
                        </button>
                    </span>
                </form>
                <div className='md:w-2/6 text-white md:text-3xl flex justify-end items-center gap-4 md:gap-8 md:me-3'>
                    <div title='Offers' className=' hidden md:flex items-center gap-3 cursor-pointer'>
                        <FaGift className='primary' />
                    </div>
                    <div title='Search' className='flex items-center gap-3 cursor-pointer md:hidden'>
                        <FaSearch className='text-xl md:text-3xl' />
                    </div>
                    <div title='Cart' className='relative flex items-center gap-3 cursor-pointer'>
                        <FaShoppingBasket className='primary text-2xl md:text-3xl' />
                        <span className='absolute -top-1 -right-2 px-1 rounded-full bg-red-600 text-white text-[10px] md:text-xs font-medium'>8</span>
                    </div>
                    <div title='Account' className='hidden md:flex items-center gap-3 cursor-pointer'>
                        {/* <FaUser className='primary' /> */}
                        <LoginButton />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;