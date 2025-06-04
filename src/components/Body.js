import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ResCardShimmer from "../shimmer/ResCardShimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // To keep original list for search reset
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const swiggyAPI =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING";

        const response = await fetch(swiggyAPI);
        const data = await response.json();

        const cards = data?.data?.cards || [];

        // Look for the card with id "top_brands_for_you"
        const topBrandsCard = cards.find(
          (card) =>
            card?.card?.card?.id === "top_brands_for_you" &&
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurantsList =
          topBrandsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListOfRestaurants(restaurantsList);
        setAllRestaurants(restaurantsList);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchRestaurants();
  }, []);


  const handleSearch = () => {
    const filteredList = allRestaurants.filter(
      (res) => res.info && res.info.avgRating > 4.5
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Top Rated Restaurant" />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {loading ? (
           <ResCardShimmer />
        ):listOfRestaurants.length === 0 ? (
          <p>No restaurants found</p>
        ) : (
          listOfRestaurants.map((res) =>
            res.info ? (
              <RestaurantCard key={res.info.id} resData={res.info} />
            ) : null
          )
        )}
      </div>

    </div>
  );
};

export default Body;
