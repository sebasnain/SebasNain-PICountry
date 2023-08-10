
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);

  if (countries === undefined) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={style.caja}>
      {countries.map((country) => (
        <Card
          key={country.countryid}
          id={country.countryid}
          image={country.image}
          name={country.name}
          continent={country.continent}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
