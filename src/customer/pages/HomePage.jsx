import React from 'react';
import MainCarousel from "../component/carousel/MainCarousel";
import HomeSectionCarousel from "../component/carousel/HomeSectionCarousel";
import {mensKurta} from "../data/mensKurta";
import {mensShirt} from "../data/mensShirt";
const HomePage = () => {
    return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeSectionCarousel data={mensKurta} sectionName={'Mens Kurta'}/>
            <HomeSectionCarousel data={mensShirt} sectionName={'Mens Shirt'}/>
            <HomeSectionCarousel data={mensKurta} sectionName={'Mens Kurta'}/>
            <HomeSectionCarousel data={mensKurta} sectionName={'Mens Kurta'}/>
            <HomeSectionCarousel data={mensKurta} sectionName={'Mens Kurta'}/>
        </div>
    </div>
    )
}
export default HomePage;
