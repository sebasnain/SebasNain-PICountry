const axios = require("axios");
const { Country } = require("./src/db");

const loadDB = async () => {
  try {
    // esto es para la  petición a la API de paises
    const response = await axios.get("http://localhost:5000/countries");
    const countries = response.data;

    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      const countryToCreate = {
        countryid: country.cca3,
        name: country.name.common,
        image: country.flags.svg,
        continent: country.continents[0],
        capital: Array.isArray(country.capital) ? "" : country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };

      // Guardar el país en la base de datos
      await Country.create(countryToCreate);
    }

    console.log("Países guardados en la base de datos");
  } catch (error) {
    console.error(
      "Error al obtener los países desde la API o guardarlos en la base de datos:",
      error
    );
  }
};

module.exports = { loadDB };
