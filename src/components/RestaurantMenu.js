import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants"; // Import the API constant

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams(); // Get the restaurant ID from the URL

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resid);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  if (resInfo === null) {
    return <div>Loading...</div>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines ? cuisines.join(", ") : ""} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} +{"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
