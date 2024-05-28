import { useState, useEffect } from 'react';
import axios from 'axios';
import { IRestaurant, UseFetchRestaurantResult } from '../types';
import { toast } from 'react-toastify';

/**
 * Custom hook to fetch restaurants data from an API.
 *
 * @returns {UseFetchRestaurantResult} - An array containing the list of restaurants,
 * a function to fetch restaurants based on a query, the loading state, and any error encountered.
 */
const useFetchRestaurant = (): UseFetchRestaurantResult => {
    // State to hold the list of restaurants
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
    // State to hold the loading status
    const [loading, setLoading] = useState<boolean>(false);
    // State to hold any error encountered during the fetch operation
    const [error, setError] = useState<Error | null>(null);

    /**
     * Function to fetch restaurants from the API. Killing 2 Birds with 1 stone 😉
     *
     * @param {string} [query] - Optional search query to filter restaurants.
     */
    const fetchRestaurants = async (query?: string) => {
        setLoading(true); // Set loading state to true before starting fetch
        setError(null);   // Clear any previous errors
        try {
            // Determine the URL based on the presence of a query
            const url = query
                ? `http://localhost:5001/api/restaurants/search?query=${query}`
                : 'http://localhost:5001/api/restaurants';

            // Make the API request using axios
            const response = await axios.get(url);

            // Update the restaurants state with the fetched data
            setRestaurants(response.data);
        } catch (err) {
            // Handle errors by setting the error state
            if (err instanceof Error) {
                setError(err);
                toast.error(`Error: ${error?.message}`);
            } else {
                setError(new Error('Unknown error occurred'));
                toast.error("An Unknown error has occurred");
            }
        } finally {
            // Set loading state to false after the fetch completes
            setLoading(false);
        }
    };

    // useEffect to fetch restaurants data on component mount
    useEffect(() => {
        fetchRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Return the state variables and fetch function as a tuple
    return [restaurants, fetchRestaurants, loading, error];
}

export default useFetchRestaurant;
