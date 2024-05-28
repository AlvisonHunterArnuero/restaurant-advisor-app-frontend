import React from 'react'

import img01 from '../assets/slides/01.jpg';
import img02 from '../assets/slides/02.jpg';
import img03 from '../assets/slides/03.jpg';
import img04 from '../assets/slides/04.jpg';
import img05 from '../assets/slides/05.jpg';
import img06 from '../assets/slides/06.jpg';

const images = [img01, img02, img03, img04, img05, img06];
console.log(images);

const Carousel: React.FC = () => {
    return (
        <div id="default-carousel" className="relative w-full mb-4" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((img, k) => {
                    return (
                        <div key={k} id={`carousel-item-${k + 1}`} className="duration-700 ease-in-out" data-carousel-item>
                            <img src={img} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt={`Slide ${k + 1}`} />
                        </div>)
                })}
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, k) => (
                    <button
                        key={k + 2}
                        type="button"
                        className="w-4 h-4 rounded-full bg-gray-300"
                        aria-current={k === 0 ? "true" : "false"}
                        aria-label={`Slide ${k + 1}`}
                        data-carousel-slide-to={k}
                    ></button>
                ))}
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 start-0 z-50 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default Carousel


