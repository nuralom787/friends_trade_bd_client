import React from 'react';

const InfoNav = () => {
    return (
        <nav className='bg-white text-[#151515] z-10'>
            <section className='container-width flex items-center justify-between text-xs py-1.5 font-semibold'>
                <ul className='flex justify-around items-center gap-8'>
                    <li className='cursor-pointer'>Contact Us</li>
                    <li className='cursor-pointer'>About Us</li>
                    <li className='cursor-pointer'>Trams & Conditions</li>
                </ul>
                <ul className='flex justify-around items-center gap-8'>
                    <li className='cursor-pointer'>Privacy Policy</li>
                    <li className='cursor-pointer'>Accounts</li>
                </ul>
            </section>
        </nav>
    );
};

export default InfoNav;