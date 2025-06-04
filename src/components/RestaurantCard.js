import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>⭐ {avgRating} | {costForTwo}</p>
      <p>⏱️ {sla?.deliveryTime ? `${sla.deliveryTime} mins` : "N/A"}</p>
    </div>
  );
};

export default RestaurantCard;
