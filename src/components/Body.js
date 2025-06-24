import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ResCardShimmer from "../shimmer/ResCardShimmer";
import {Link} from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); // To manage search input
  const [allRestaurants, setAllRestaurants] = useState([]); // To keep original list for search reset
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const swiggyAPI = process.env.REACT_APP_SWIGGY_API;
        

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
        <input
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}   
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurants = allRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
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
              <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
                <RestaurantCard resData={res.info} />
              </Link>
            ) : null
          )
        )}
      </div>

    </div>
  );
};

export default Body;
