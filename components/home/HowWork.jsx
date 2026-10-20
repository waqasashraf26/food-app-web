'use client'
import React from 'react'
import MaxContainer from '../shared/MaxContainer'
import Heading from '../shared/Heading'
import img1 from '@/public/assets/images/how1.png'
import img2 from '@/public/assets/images/how2.png'
import img3 from '@/public/assets/images/how3.png'
import rope from '@/public/assets/images/rope.svg'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const HowWork = () => {

    const { t } = useTranslation();

    const data = [
        { img: img1, name: t('browse') },
        { img: img2, name: t('place') },
        { img: img3, name: t('delivery') },
    ]

    return (
        <MaxContainer styleClass={'bg-[#F3F6F5] sm:py-12 py-10'}>
            <div className='lg:w-[90%] w-[94%]' >
                <Heading style={'text-center'} text={t('howWork')} />
                <div className='grid sm:grid-cols-3 grid-cols-1 lg:gap-20 sm:gap-12 gap-5 sm:mt-14 mt-8 relative' >

                    <div className='absolute top-1/2 left-1/2 sm:block  hidden -translate-x-1/2 -translate-y-1/2 z-20'>
                        <Image alt='' src={rope} />
                    </div>

                    {
                        data.map((e, i) => (
                            <div className='bg-white px-6 pt-6 flex gap-2 z-20 flex-col items-center rounded-xl py-2' key={i} >
                                <div>
                                    <Image alt='' src={e.img} />
                                </div>
                                <h1 className='lg:text-3xl sm:text-2xl text-center text-xl font-semibold'>{e.name}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </MaxContainer>
    )
}

export default HowWork
