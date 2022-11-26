import "./MainBanner.css";
import Card from "@mui/material/Card";

const MainBanner = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        border: "none",
        borderRadius: "30px",
        backgroundColor: "rgba(244, 244, 244, 0.665)",
      }}
    >
      <div className="main-banner">
        <p>Aqui você encontra várias as opções de serviços disponiveis</p>
      </div>
    </Card>
  );
};

export default MainBanner;
