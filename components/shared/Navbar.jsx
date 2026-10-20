'use client'
import React, { useEffect, useState } from 'react'
import logo from '@/public/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/shared/Button'
import { usePathname } from 'next/navigation'
import { CgMenu } from "react-icons/cg";
import i18n from '@/utils/i18n'

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);
    const pathname = usePathname();
    const [isFrench, setIsFrench] = useState(false);

    // Function to change the language
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        setIsFrench(e.target.value === 'fr'); // Update state based on selected language
    };

    // Function to handle navbar toggle
    const handleToggleNav = () => {
        setOpenNav((prev) => !prev);
    };

    const navs = [
        { src: '#', label: 'Home' },
        { src: '#feature', label: 'Products' },
        { src: '#howWork', label: 'How It Works' },
        { src: '#about', label: 'About Us' },
    ]

    // Effect to close navbar when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (openNav && !event.target.closest('.mobile-nav') && !event.target.closest('.menu-icon')) {
                setOpenNav(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [openNav]);

    useEffect(() => {
        setOpenNav(false)
    }, [pathname])

    return (
        <div className='flex justify-between items-center w-full py-2'>
            <Link href={'/'}>
                <Image alt='' src={logo} />
            </Link>
            <div className='md:flex hidden items-center gap-6'>
                {
                    navs.map((e, i) => (
                        <Link key={i} href={e.src} >{e.label}</Link>
                    ))
                }
            </div>
            <div className='w-fit md:flex hidden  items-center gap-2' >
                <select onChange={changeLanguage} className='p-2 outline-none rounded-lg bg-transparent' name="" id="">
                    <option value="eng">English</option>
                    <option value="fr">French</option>
                </select>
                <Button label={'Contact Us'} />
            </div>

            {/* Mobile Menu Icon */}
            <div className='md:hidden flex items-center gap-4'>
                <select onChange={changeLanguage} className='p-2 outline-none rounded-lg bg-transparent' name="" id="">
                    <option value="eng">Eng</option>
                    <option value="fr">Frc</option>
                </select>
                <div onClick={handleToggleNav} className=' menu-icon'>
                    <CgMenu className="text-2xl" />
                </div>
            </div>


            {/* Overlay and Mobile Navbar toggle */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${openNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleToggleNav}
            ></div>


            <div className={`fixed top-0 left-0 h-full w-[60%] bg-white overflow-auto shadow-lg md:px-12 p-5 z-40 transition-transform transform ${openNav ? 'translate-x-0' : '-translate-x-full'} duration-300 ease-in-out mobile-nav`}>
                <div className='mobile-nav flex flex-col items-center justify-between h-full'>

                    <div className='flex flex-col items-center  justify-between'>
                        <Link href={'/'} className="mb-4">
                            <Image alt='' src={logo} unoptimized />
                        </Link>
                        <div className='flex flex-col  gap-3 justify-between'>
                            {
                                navs.map((e, i) => (
                                    <Link key={i} href={e.src} >{e.label}</Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className='w-fit ' >
                        <Button label={'Contact Us'} />
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Navbar
