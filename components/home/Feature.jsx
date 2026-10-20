'use client'
import React from 'react'
import MaxContainer from '../shared/MaxContainer'
import Heading from '../shared/Heading'
import img from '@/public/assets/images/featureIMg.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Feature = () => {

    const { t } = useTranslation(); 

    const data = [
        { name: t('gurantee'), des: t('guranteeDes') },
        { name: t('gurantee'), des: t('guranteeDes') },
        { name: t('gurantee'), des: t('guranteeDes') },
        { name: t('gurantee'), des: t('guranteeDes') },
    ]

    return (
        <MaxContainer styleClass={''}>
            <div className='md:pl-16 sm:py-20 py-10 md:px-0 px-4 md:w-full  flex items-center'>
                <div className='md:w-1/2 w-full'>
                    <div>
                        <h1 className='text-greenish sm:text-start text-center font-semibold mb-2 lg:text-4xl sm:text-3xl text-2xl'>Features</h1>
                        <Heading style={'sm:text-start text-center'} text={t('choose')} />
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-5' >
                        {
                            data.map((e, i) => (
                                <div key={i} className='bg-[#F3F6F5] px-4 flex flex-col gap-2 py-6' >
                                    <h1 className='font-semibold text-lg'>{e.name}</h1>
                                    <p>{e.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-1/2 relative md:flex hidden items-center ' >
                    <div className=''>
                        <Image alt='' src={img} />
                    </div>
                </div>
            </div>
        </MaxContainer>
    )
}

export default Feature
