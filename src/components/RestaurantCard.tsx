import React from 'react';

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

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    return (
        <div className="border p-4">
            <img src={restaurant.logoUrl} alt={restaurant.name} className="w-full h-32 object-cover mb-2" />
            <h2 className="text-lg font-bold">{restaurant.name}</h2>
            <p>{restaurant.cuisineType}</p>
            <p>{restaurant.location}</p>
            <p>Rating: {restaurant.rating.food}/5 (Food), {restaurant.rating.service}/5 (Service), {restaurant.rating.value}/5 (Value)</p>
            <p>Opening Hours: {restaurant.openingHours}</p>
        </div>
    );
};

export default RestaurantCard;
