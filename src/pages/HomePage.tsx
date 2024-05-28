import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import useFetchRestaurant from '../hooks/useFetchRestaurants';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import NavTab from '../components/NavTab';

const HomePage: React.FC = () => {
    const [searchQry, setSearchQry] = React.useState<string>('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [restaurants, fetchRestaurants, loading, error] = useFetchRestaurant();

    const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetchRestaurants(searchQry);
    };
    return (
        <div className="container mx-auto p-4">
            <NavBar />
            <NavTab />
            <SearchBar
                fetchRestaurant={handleSearch}
                setSearchQuery={setSearchQry}
                searchQuery={searchQry} />

            <Carousel />
            {error && (
                <div className="flex items-center p-4 mb-4 w-8/12 mx-auto text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Oh, Blimey! </span>
                        Sorry, no restaurants found for your search "{searchQry}".
                        Please try a different search term.
                    </div>
                </div>
            )}
            {loading ? (
                <div className="loading-message">Loading restaurants...</div>
            ) : restaurants.length === 0 ? (
                <div className="no-results-message">
                    No results found for your search "{searchQry}". Try a different term or browse all restaurants.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default HomePage;
