import Link from 'next/link';
import React from 'react';

const InfoNav = () => {
    return (
        <nav className='bg-white text-[#151515] z-10 hidden md:block'>
            <section className='container-width px-3 md:px-6 flex items-center justify-between text-xs py-1.5 font-semibold'>
                <ul className='flex justify-around items-center gap-8'>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>Contact Us</li>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>About Us</li>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>Trams & Conditions</li>
                </ul>
                <ul className='flex justify-around items-center gap-8'>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>Privacy Policy</li>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>
                        <Link href={'/user/account'}>
                            Accounts
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default InfoNav;