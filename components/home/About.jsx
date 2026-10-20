'use client'
import React from 'react'
import img from '@/public/assets/images/aboutPic.png'
import dots from '@/public/assets/images/dots.svg'
import MaxContainer from '../shared/MaxContainer'
import Image from 'next/image'
import Heading from '../shared/Heading'
import { useTranslation } from 'react-i18next'

const About = () => {

    const { t } = useTranslation();

    const data = [
        {
            name: t('fresh'), des: t('freshDes')
        },
        {
            name: t('ultimate'), des: t('ultimateDes')
        },
        {
            name: t('sustainability'), des: t('sustainabilityDes')
        },
        {
            name: t('fast'), des: t('fastDes')
        },
    ]

    return (
        <MaxContainer styleClass={'relative sm:py-20 py-10'}>

            {/* dots */}
            <div className='absolute md:block hidden left-0 top-[20%]'>
                <Image alt='' src={dots} />
            </div>

            {/* main content */}
            <div className='flex lg:w-[90%] w-[94%] items-center gap-2' >
                <div className='md:flex hidden w-1/2 h-full' >
                    <div>
                        <Image alt='' src={img} className='w-full lg:h-[500px] h-[400px] object-cover' />
                    </div>
                </div>
                <div className='md:w-1/2 w-full' >
                    <div>
                        <h1 className='text-greenish font-semibold mb-2 lg:text-4xl sm:text-3xl text-2xl'>{t('about')}</h1>
                        <Heading text={t('aboutHeading')} />
                    </div>
                    <p className='text-gray mt-3'>{t('aboutDes')}</p>
                    <div className='mt-5'>
                        <h1 className='text-greenish font-semibold sm:text-2xl text'>{t('principle')}</h1>
                        <div className='grid grid-cols-2 gap-4 gap-y-8 my-3 w-full' >
                            {
                                data.map((e, i) => (
                                    <div className='flex flex-col gap-2' key={i} >
                                        <h1 className='font-medium text-lg'>{e.name}</h1>
                                        <p className='text-gray'>{e.des}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </MaxContainer>
    )
}

export default About
