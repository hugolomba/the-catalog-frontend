import "./MainCard.css";
import food from "../../img/types/food.png";
import pharmacy from "../../img/types/pharmacy.png";
import service from "../../img/types/service.png";
import superMarket from "../../img/types/supermarket.png";
import bakery from "../../img/types/bakery.png";

const MainCard = ({ type }) => {
  let img;

  switch (type) {
    case "Food":
      img = food;
      break;
    case "Pharmacy":
      img = pharmacy;
      break;
    case "Service":
      img = service;
      break;
    case "Super Market":
      img = superMarket;
      break;
    case "Bakery":
      img = bakery;
      break;

    default:
      break;
  }

  return (
    <div className="main-card">
      <img src={img} />
      <h3>{type}</h3>
    </div>
  );
};

export default MainCard;
