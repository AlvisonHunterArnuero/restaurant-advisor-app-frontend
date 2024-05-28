import React from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

interface RestaurantCardProps {
    restaurant: {
        name: string;
        cuisineType: string;
        location: string;
        rating: { food: number; service: number; value: number };
        logoUrl: string;
        openingHours: string;
    };
}


const myStyles = {
    itemShapes: ThinStar,
    itemStrokeWidth: 1,
    activeFillColor: '#196aaa',
    activeStrokeColor: '#0c5461',
    inactiveFillColor: '#7dc7e5 ',
    inactiveStrokeColor: '#0c5461'
}

const ratingValue = ["Food", "Service", "Value"];



const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    return (
        <div className="border-2 rounded-lg p-4 bg-gray-200">
            <img src={restaurant.logoUrl} alt={restaurant.name} className="w-full h-[60] object-cover mb-2" />
            <h2 className="text-lg font-bold">{restaurant.name}</h2>
            <p>{restaurant.cuisineType}</p>
            <p className='text-slate-600 mx-auto w-8/12 my-2 font-light'>{restaurant.location}</p>
            <div className='flex flex-col items-center justify-center'>
                <ul className="space-y-4 text-left text-gray-700 dark:text-gray-400">
                    {Object.values(restaurant.rating).map((rate, ndx) => {
                        return (
                            <li key={ndx} className="flex items-center space-x-3 rtl:space-x-reverse">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rate}
                                    readOnly
                                    itemStyles={myStyles} />

                                <span className='font-semibold text-gray-900 dark:text-gray-500'>
                                    {ratingValue[ndx]}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <p className='text-gray-700 my-4 font-light font-mono flex flex-row gap-2 justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-sky-700">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                </svg>
                {restaurant.openingHours}
            </p>
        </div>
    );
};

export default RestaurantCard;
