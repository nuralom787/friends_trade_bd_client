import React from 'react';

const CategoriesNav = () => {
    return (
        <div className='bg-white sticky top-[75px] z-10'>
            <nav className='container-width shadow-2xl'>
                <ul className='flex justify-between items-center gap-4 flex-wrap text-sm font-semibold py-2.5'>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Desktop</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Laptop</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Camera</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Drone</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Storage</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Monitor</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Security</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Tablet</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>UPS</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Networking</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Antivirus</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Component</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Accessories</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Gadget</li>
                    <li className='cursor-pointer hover:text-[#eb9235] duration-300'>Gaming</li>
                </ul>
            </nav>
        </div>
    );
};

export default CategoriesNav;