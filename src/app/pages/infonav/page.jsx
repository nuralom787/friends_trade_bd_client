import React from 'react';

const InfoNav = () => {
    return (
        <nav className='bg-white text-[#151515] z-10'>
            <section className='container-width flex items-center justify-between text-xs py-1.5 font-semibold'>
                <ul className='flex justify-around items-center gap-8'>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>Contact Us</li>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>About Us</li>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>Trams & Conditions</li>
                </ul>
                <ul className='flex justify-around items-center gap-8'>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>Privacy Policy</li>
                    <li className='cursor-pointer hover:text-[#eb9235] hover:underline duration-300'>Accounts</li>
                </ul>
            </section>
        </nav>
    );
};

export default InfoNav;