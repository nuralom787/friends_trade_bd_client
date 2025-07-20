'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import offer1 from "../../../../public/free-service-campaign-web-banner-982x500.jpg"
import offer2 from "../../../../public/star-link-home-banner.png-new-982x500.jpg"
import offer3 from "../../../../public/free-service-campaign-web-banner-982x500.jpg"

const BannerPage = () => {
    return (
        <div className='space-y-10 font-poppins'>
            <section className='flex flex-col md:flex-row justify-between items-center content-center gap-6'>
                <section className='w-full md:w-4/6'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        <SwiperSlide>
                            <Image src={offer1} alt="offer" loading='lazy' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={offer2} alt="offer" loading='lazy' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={offer3} alt="offer" loading='lazy' />
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className='w-full md:w-2/6 space-y-6'>
                    <Image src={offer2} alt="offer" loading='lazy' />
                    <Image src={offer3} alt="offer" loading='lazy' />
                </section>
            </section>
            <section className='bg-white rounded-full py-2.5 px-6'>
                <Marquee pauseOnHover speed={100}>
                    <p className='text-sm font-medium capitalize'>
                        offline services are available 9am to 10pm. online services are available in 24/7. call for assistance 01711247713, 01711001756.
                    </p>
                </Marquee>
            </section>
        </div>
    );
};

export default BannerPage;