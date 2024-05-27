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
    activeFillColor: 'LightSeaGreen',
    activeStrokeColor: '#99F6E4',
    inactiveFillColor: '#99F6E4',
    inactiveStrokeColor: 'LightSeaGreen'
}

const ratingValue = ["Food", "Service", "Value"];



const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    return (
        <div className="border p-4">
            <img src={restaurant.logoUrl} alt={restaurant.name} className="w-full h-[60] object-cover mb-2" />
            <h2 className="text-lg font-bold">{restaurant.name}</h2>
            <p>{restaurant.cuisineType}</p>
            <p>{restaurant.location}</p>
            <div className='flex flex-col items-center justify-center'>
                <ul className="space-y-4 text-left text-gray-700 dark:text-gray-400">
                    {Object.values(restaurant.rating).map((rate, ndx) => {
                        return (<li key={ndx} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rate}
                                readOnly
                                itemStyles={myStyles} />

                            <span className='font-semibold text-gray-900 dark:text-gray-500'>
                                {ratingValue[ndx]}</span>
                        </li>);
                    })}

                </ul>
            </div>

            <p className='text-secondary'>Opening Hours: {restaurant.openingHours}</p>
        </div>
    );
};

export default RestaurantCard;
