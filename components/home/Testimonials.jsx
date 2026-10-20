'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from '@/public/assets/images/profile.png'
import Image from "next/image";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IoMdStar } from "react-icons/io";
import MaxContainer from "../shared/MaxContainer";
import Heading from "../shared/Heading";
import { useTranslation } from "react-i18next";



const CustomNextArrow = ({ onClick }) => {
    return (
        <div className="absolute  right-[3%] top-[-30%] h-fit hover:bg-primary bg-[#FF5F2C30] p-2 rounded-full border border-white  group  cursor-pointer z-10" onClick={onClick}>
            <LiaLongArrowAltRightSolid className='text-black text-2xl group-hover:text-white' />
        </div>
    );
};

const CustomPrevArrow = ({ onClick }) => {
    return (
        <div className="absolute xl:right-[7%] right-[10%] top-[-30%] h-fit hover:bg-primary p-2 bg-[#FF5F2C30] rounded-full border border-white  group   cursor-pointer z-10" onClick={onClick}>
            <LiaLongArrowAltLeftSolid className='text-black text-2xl group-hover:text-white' />
        </div>
    );
};


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false
            },
        },
    ],
};


const Testimonials = () => {

    const { t } = useTranslation();

    const carouselItems = [
        { img: profile, name: "John Doe", rank: 'Mnager', des: t('feedback') },
        { img: profile, name: "John Doe", rank: 'Mnager', des: t('feedback') },
        { img: profile, name: "John Doe", rank: 'Mnager', des: t('feedback') },
        { img: profile, name: "John Doe", rank: 'Mnager', des: t('feedback') },
    ];

    return (
        <MaxContainer styleClass={'sm:py-20 py-10'}>
            <div className="lg:w-[90%] w-[94%]">

                <div>
                    <h1 className='text-greenish sm:text-start text-center font-semibold mb-2 lg:text-4xl sm:text-3xl text-2xl'>{t('testimonial')}</h1>
                    <Heading style={'sm:text-start text-center'} text={t('customerSay')} />
                </div>

                <div className="mt-6">
                    <Slider {...settings}>
                        {carouselItems.map((e, i) => (
                            <div key={i} className="py-4 sm:px-4 px-2">
                                <div className="bg-[#F3F6F5]  flex gap-4 p-4 px-6 rounded-lg flex-col">
                                    <div className="flex items-center gap-2">
                                        <Image alt="" src={e.img} className="h-full" />
                                        <div>
                                            <h1 className="font-semibold text-xl">{e.name}</h1>
                                            <p className="text-sm text-gray">{e.rank}</p>
                                        </div>
                                    </div>
                                    <h1 className="text-gray ">{e.des}</h1>
                                    <div className="flex gap-2 items-center">
                                        <IoMdStar className="text-primary text-2xl" />
                                        <IoMdStar className="text-primary text-2xl" />
                                        <IoMdStar className="text-primary text-2xl" />
                                        <IoMdStar className="text-primary text-2xl" />
                                        <IoMdStar className="text-primary text-2xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </MaxContainer>
    );
};

export default Testimonials;
