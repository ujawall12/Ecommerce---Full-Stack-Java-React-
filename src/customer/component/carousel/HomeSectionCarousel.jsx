import React, {useState, useRef, useEffect} from 'react';
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import {Button} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {mensKurta} from "../../data/mensKurta";
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsInView, setItemsInView] = useState(5);
    const carouselRef = useRef(null);

    const responsive = {
        0: {items: 1},
        720: {items: 3},
        1024: {items: 5},
    };

    const items = data.map((item) => (
        <HomeSectionCard product={item}/>
    ));

    useEffect(() => {
        const updateItemsInView = () => {
            if (window.innerWidth < 720) {
                setItemsInView(1);
            } else if (window.innerWidth < 1024) {
                setItemsInView(3);
            } else {
                setItemsInView(5);
            }
        };

        updateItemsInView();
        window.addEventListener('resize', updateItemsInView);

        return () => {
            window.removeEventListener('resize', updateItemsInView);
        };
    }, []);

    const slidePrev = () => {
        if (activeIndex > 0) {
            const newIndex = Math.max(activeIndex - itemsInView, 0);
            setActiveIndex(newIndex);
            carouselRef.current.slideTo(newIndex);
        }
    };

    const slideNext = () => {
        if (activeIndex < items.length - itemsInView) {
            const newIndex = Math.min(activeIndex + itemsInView, items.length - itemsInView);
            setActiveIndex(newIndex);
            carouselRef.current.slideTo(newIndex);
        }
    };

    const syncActiveIndex = ({item}) => {
        setActiveIndex(item);
    };

    return (
        <div className='px-4 lg:px-8 border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                    activeIndex={activeIndex}
                    ref={carouselRef}
                    onSlideChanged={syncActiveIndex}
                    controlsStrategy="responsive"
                />
                {activeIndex !== items.length - 5 && <Button
                    onClick={slideNext}
                    variant='contained'
                    className='z-50 bg-white'
                    sx=
                        {{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(-90deg)',
                            bgcolor: 'white'
                        }}
                    aria-label='next'
                    disabled={activeIndex >= items.length - itemsInView}
                >
                    <ArrowLeftIcon sx={{transform: 'rotate(-90deg)', color: 'black'}}/>
                </Button>
                }
                {activeIndex !== 0 && <Button
                    onClick={slidePrev}
                    variant='contained'
                    className='z-50 bg-white'
                    sx=
                        {{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(-90deg)',
                            bgcolor: 'white'
                        }}
                    aria-label='prev'
                    disabled={activeIndex === 0}
                >
                    <ArrowLeftIcon sx={{transform: 'rotate(90deg)', color: 'black'}}/>
                </Button>
                }
            </div>
        </div>
    );
}
export default HomeSectionCarousel;