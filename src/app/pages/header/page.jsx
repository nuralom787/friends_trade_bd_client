import Image from 'next/image';
import React from 'react';
import brandLogo from '../../../../public/brandlogo.jpg';
import { FaUser, FaGift } from "react-icons/fa";
import Link from 'next/link';


const Header = () => {
    return (
        <div className='header sticky top-0 z-10'>
            <section className='container-width py-2.5 flex justify-between items-center gap-6'>
                <div className='w-2/6'>
                    <Link href={'/'} className='max-w-fit'>
                        <Image src={brandLogo} alt='company logo' width={100} height={100} loading='lazy' />
                    </Link>
                </div>
                <div className='w-4/6'>
                    <input
                        type="search"
                        name=""
                        id=""
                        className='w-full bg-white border border-gray-200 outline-0 rounded-md py-2 px-3'
                        placeholder='search for any products'
                    />
                </div>
                <div className='w-2/6 text-white text-2xl flex justify-end items-center gap-8'>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaGift className='primary' />
                        <span className='text-sm'>
                            Offers
                        </span>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaUser className='primary' />
                        <span className='text-sm'>
                            Accounts
                        </span>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Header;