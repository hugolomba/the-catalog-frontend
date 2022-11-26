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
        <p>
          Main Banner <br /> Pega as informações de ofertas das emopresas,
          apenas as ultimas cadastradas
        </p>
      </div>
    </Card>
  );
};

export default MainBanner;
