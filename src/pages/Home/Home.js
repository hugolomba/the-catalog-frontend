import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainCard from "../../components/MainCard/MainCard";

const MainHome = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <MainBanner />
      <div className="cards">
        <MainCard type={"Food"} />
        <MainCard type={"Pharmacy"} />
        <MainCard type={"Super Market"} />
        <MainCard type={"Bakery"} />
        <MainCard type={"Service"} />
      </div>
    </div>
  );
};

export default MainHome;
