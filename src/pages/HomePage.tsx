import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';

const HomePage: React.FC = () => {
    const [restaurants, setRestaurants] = useState<unknown[]>([]);
    const [search, setSearch] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        const fetchRestaurants = async () => {
            const response = await axios.get('http://localhost:5000/api/restaurants');
            setRestaurants(response.data);
        };
        fetchRestaurants();
    }, []);

    const handleSearch = async () => {
        const response = await axios.get('http://localhost:5000/api/restaurants/search', {
            params: { name: search, city }
        });
        setRestaurants(response.data);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Filter by city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
                    Search
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant._id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
