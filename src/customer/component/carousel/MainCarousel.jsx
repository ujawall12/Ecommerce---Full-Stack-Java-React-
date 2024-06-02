import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {mainCarouselData} from "./MainCarouselData";



const MainCarousel = () => {
    console.log(mainCarouselData);
    const items = mainCarouselData.map((item) => <img className = 'cursor-pointer carousel-image'
                                                      role = 'presentation' src={item.image}  alt=''/>);
    return (
        <div className='relative z-10'>
            <AliceCarousel
                items={items}
                autoPlay
                autoPlayInterval={2000}
                infinite
            />
        </div>
    );
}

export default MainCarousel;