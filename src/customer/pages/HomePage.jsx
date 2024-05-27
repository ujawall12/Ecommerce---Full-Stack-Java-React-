import React from 'react';
import MainCarousel from "../component/carousel/MainCarousel";
import HomeSectionCarousel from "../component/carousel/HomeSectionCarousel";
const HomePage = () => {
    return (
    <div>
        <MainCarousel />
        <div>
            <HomeSectionCarousel />
        </div>
    </div>
    )
}
export default HomePage;
