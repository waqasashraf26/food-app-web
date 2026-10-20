import React from 'react'
import logo from '@/public/assets/images/footerLogo.png'
import MaxContainer from '../shared/MaxContainer'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {

    const navs = [
        { src: '#', label: 'Home' },
        { src: '#feature', label: 'Products' },
        { src: '#howWork', label: 'How It Works' },
        { src: '#about', label: 'About Us' },
    ]

    return (
        <MaxContainer styleClass={'bg-[#1AAD83]'}>
            <div className='w-full'>
                <div className='flex flex-col items-center sm:py-16 py-10 sm:px-8 px-4' >
                    <Link href={'/'}>
                        <Image alt='' src={logo} />
                    </Link>
                    <div className='flex items-center justify-center flex-wrap sm:gap-x-10 gap-x-5 gap-y-4 mt-6'>
                        {
                            navs.map((e, i) => (
                                <Link key={i} href={e.src} className='text-white text-center' >{e.label}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className='border-t py-3 border-[#FFFFFF8C] w-full text-white' >
                    <h1 className='text-lg text-center'>Design by ZySoftec</h1>
                </div>
            </div>
        </MaxContainer>
    )
}

export default Footer
