import "./MainCard.css";
import Card from "@mui/material/Card";
import food from "../../img/types/food.png";
import pharmacy from "../../img/types/pharmacy.png";
import services from "../../img/types/services.png";
import superMarket from "../../img/types/supermarket.png";
import domestico from "../../img/types/domestico.png";
import tec from "../../img/types/tec.png";
import fashion from "../../img/types/fashion.png";
import construction from "../../img/types/const.png";
import school from "../../img/types/school.png";
import other from "../../img/types/other.png";

import events from "../../img/types/events.png";
import drinks from "../../img/types/drinks.png";

const MainCard = ({ type }) => {
  let img;

  switch (type) {
    case "Restaurante":
      img = food;
      break;
    case "Educação":
      img = school;
      break;
    case "Serviços":
      img = services;
      break;
    case "Mercado":
      img = superMarket;
      break;

    case "Eventos":
      img = events;
      break;
    case "Bebidas":
      img = drinks;
      break;
    case "Serv. Domésticos":
      img = domestico;
      break;
    case "Tecnologia":
      img = tec;
      break;
    case "Moda":
      img = fashion;
      break;
    case "Const. Civil":
      img = construction;
      break;
    case "Farmácia":
      img = pharmacy;
      break;

    case "Outros":
      img = other;
      break;

    default:
      break;
  }

  return (
    <>
      <Card
        // variant="outlined"
        elevation={0}
        sx={{
          borderRadius: "30px",
          maxWidth: "7rem",
          border: "none",
        }}
      >
        <div className="main-card">
          <div className="main-card-img">
            <img src={img} />
          </div>
        </div>
      </Card>
      <p className="card-name">{type}</p>
    </>
  );
};

export default MainCard;
