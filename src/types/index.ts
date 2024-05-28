export type TContact = {
    phone: string;
    website: string;
}

export type TRating = {
    food: number;
    service: number;
    value: number;
}
export interface IRestaurant {
    "_id"?: string;
    name: string;
    cuisineType: string;
    specialDiets: string[];
    location: string;
    contact: TContact;
    rating: TRating;
    reviews: string[];
    priceRange: string;
    menu: string[];
    logoUrl: string;
    openingHours: string;
    specialDishes: string[];
}


export type UseFetchRestaurantResult = [
    IRestaurant[],
    (query?: string) => Promise<void>,
    boolean,
    Error | null
];