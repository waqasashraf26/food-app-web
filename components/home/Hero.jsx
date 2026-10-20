'use client'
import React from 'react'
import Navbar from '../shared/Navbar'
import Image from 'next/image'
import img from '@/public/assets/images/heroPic.png'
import MaxContainer from '../shared/MaxContainer'
import Heading from '../shared/Heading'
import Button from '../shared/Button'
import { useTranslation } from 'react-i18next'

const Hero = () => {

    const { t } = useTranslation();

    return (
        <MaxContainer styleClass={'bg-hero-bg relative bg-no-repeat bg-cover bg-center '}>
            <div className='lg:w-[90%] w-[94%]'>
                <div className=''>
                    <Navbar />
                </div>
                <div className='w-full flex justify-between items-center gap-10 sm:py-6 py-10'>
                    <div className='sm:w-1/2 w-full flex flex-col gap-5 sm:items-start items-center'>
                        <Heading style={'sm:text-start text-center'} text={<span className='text-brownish'><span className='text-greenish' >{t('mainGreen')} </span>{t('mainHeading')}</span>} />
                        <p className='text-brownish lg:text-2xl sm:text-xl sm:text-start text-center'>{t('getFruits')}</p>
                        <Button label={t('orderNow')} />
                    </div>
                    <div className='sm:block hidden w-1/2'>
                        <Image alt='' src={img} className='w-full h-full' />
                    </div>
                </div>
            </div>
        </MaxContainer>
    )
}

export default Hero
