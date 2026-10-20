'use client'
import React from 'react'
import img from '@/public/assets/images/mobile.png'
import store from '@/public/assets/images/store.svg'
import apple from '@/public/assets/images/apple.svg'
import MaxContainer from '../shared/MaxContainer'
import Heading from '../shared/Heading'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const DownloadApp = () => {

    const { t } = useTranslation();

    return (
        <MaxContainer styleClass={'bg-app-bg bg-no-repeat bg-cover bg-center'}>
            <div className='lg:w-[90%] w-[94%] pt-14 flex items-center gap-6 lg:flex-row flex-col' >
                <div className='lg:w-1/2'>
                    <div>
                        <h1 className='text-greenish sm:text-start text-center font-semibold mb-2 lg:text-4xl sm:text-3xl text-2xl'>{t('shop')}</h1>
                        <Heading style={'sm:text-start text-center'} text={t('downloadHeading')} />
                        <p className='md:text-2xl sm:text-xl mt-3 md:text-start text-center'>{t('downloadDes')}</p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-gray md:text-3xl text-xl'>{t('downaloadApp')}</h1>
                        <div className='flex items-center sm:flex-row flex-col  gap-6 mt-6 flex-wrap'>
                            <button className='bg-[#1C1B1E] px-6 py-3 flex items-center gap-4 rounded-lg'>
                                <Image alt='' src={store} />
                                <div className='text-white'>
                                    <p className='text-[12px]'>Get it on</p>
                                    <p className='lg:text-xl'>Google Play</p>
                                </div>
                            </button>
                            <button className='bg-[#1C1B1E] px-6 py-3 flex items-center gap-4 rounded-lg'>
                                <Image alt='' src={apple} />
                                <div className='text-white'>
                                    <p className='text-[12px]'>Download on the</p>
                                    <p className='lg:text-xl'>Apple Store</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 flex justify-center items-center'>
                    <div >
                        <Image alt='' src={img} />
                    </div>
                </div>
            </div>
        </MaxContainer>
    )
}

export default DownloadApp
