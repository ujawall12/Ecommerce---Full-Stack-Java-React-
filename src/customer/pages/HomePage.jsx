import React from 'react';
import MainCarousel from "../component/carousel/MainCarousel";
import HomeSectionCarousel from "../component/carousel/HomeSectionCarousel";
const HomePage = () => {
    return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
        </div>
    </div>
    )
}
export default HomePage;
