'use client';

import { useState } from 'react';
import Drawer from 'react-modern-drawer'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



const DrawerComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };


    return (
        <div className='flex content-center'>
            <button onClick={toggleDrawer}>
                <GiHamburgerMenu className='text-white text-2xl font-normal' />
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size={'80vw'}
            >
                <div>
                    <div className='header px-4 py-3.5'>
                        <span className='bg-[#ffffff1a] rounded-full p-2 flex content-center w-fit'>
                            <button onClick={toggleDrawer} className='text-white'>
                                <IoMdClose className='text-xl' />
                            </button>
                        </span>
                    </div>
                    <div className='px-2 py-4'>
                        <h1>Friends Trade BD.</h1>
                        <h1>Friends Trade BD.</h1>
                        <h1>Friends Trade BD.</h1>
                        <h1>Friends Trade BD.</h1>
                        <h1>Friends Trade BD.</h1>
                        <h1>Friends Trade BD.</h1>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;