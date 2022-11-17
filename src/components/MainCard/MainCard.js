import "./MainCard.css";
import Card from "@mui/material/Card";
import food from "../../img/types/food.png";
import pharmacy from "../../img/types/pharmacy.png";
import services from "../../img/types/services.png";
import superMarket from "../../img/types/supermarket.png";
import domestico from "../../img/types/domestico.png";
import tec from "../../img/types/tec.png";

import events from "../../img/types/events.png";
import drinks from "../../img/types/drinks.png";

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
      img = services;
      break;
    case "Market":
      img = superMarket;
      break;

    case "Events":
      img = events;
      break;
    case "Drinks":
      img = drinks;
      break;
    case "Doméstico":
      img = domestico;
      break;
    case "Tecnologia":
      img = tec;
      break;

    default:
      break;
  }

  return (
    <Card>
      <div className="main-card">
        <img src={img} />
        <h3>{type}</h3>
      </div>
    </Card>
  );
};

export default MainCard;
