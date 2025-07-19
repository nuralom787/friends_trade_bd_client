import Image from 'next/image';
import React from 'react';
import brandLogo from '../../../../public/brandlogo.jpg';
import { FaUser, FaGift, FaShoppingBasket, FaSearch } from "react-icons/fa";
import Link from 'next/link';


const Header = () => {
    return (
        <div className='header sticky top-0 z-20'>
            <section className='container-width py-2.5 flex justify-between items-center gap-6'>
                <div className='w-2/6'>
                    <Link href={'/'} className='max-w-fit'>
                        <Image src={brandLogo} alt='company logo' width={100} height={100} loading='lazy' />
                    </Link>
                </div>
                <form className='w-4/6'>
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
                <div className='w-2/6 text-white text-3xl flex justify-end items-center gap-8 me-3'>
                    <div title='Offers' className='flex items-center gap-3 cursor-pointer'>
                        <FaGift className='primary' />
                    </div>
                    <div title='Cart' className='relative flex items-center gap-3 cursor-pointer'>
                        <FaShoppingBasket className='primary' />
                        <span className='absolute -top-1 -right-2 px-1.5 py-0.5 rounded-full bg-red-600 text-white text-xs font-medium'>8</span>
                    </div>
                    <div title='Account' className='flex items-center gap-3 cursor-pointer'>
                        <FaUser className='primary' />
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Header;