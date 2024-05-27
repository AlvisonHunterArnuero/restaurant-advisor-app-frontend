import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import useFetchRestaurant from '../hooks/useFetchRestaurants';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
    const [searchQry, setSearchQry] = React.useState<string>('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [restaurants, fetchRestaurants] = useFetchRestaurant();

    const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetchRestaurants(searchQry);
    };

    const error = false;
    const loading = false;
    return (
        <div className="container mx-auto p-4">
            <SearchBar
                fetchRestaurant={handleSearch}
                setSearchQuery={setSearchQry}
                searchQuery={searchQry} />

            {error && (
                <div className="error-message">
                    Sorry, no restaurants found for your search "{searchQry}". Please try a different search term.
                </div>
            )}
            {loading ? (
                <div className="loading-message">Loading restaurants...</div>
            ) : restaurants.length === 0 ? (
                <div className="no-results-message">
                    No results found for your search "{searchQry}". Try a different term or browse all restaurants.
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
