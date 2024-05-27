import { useState, useEffect } from 'react';
import axios from 'axios';
import { IRestaurant } from '../types';

function useFetchRestaurant(): [IRestaurant[], (query?: string) => Promise<void>] {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    const fetchRestaurants = async (query?: string) => {
        const url = query
            ? `http://localhost:5001/api/restaurants/search?query=${query}`
            : 'http://localhost:5001/api/restaurants';
        const response = await axios.get(url);
        setRestaurants(response.data);
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    return [restaurants, fetchRestaurants];
}

export default useFetchRestaurant;