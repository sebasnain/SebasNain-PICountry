const { DataTypes } = require("sequelize");

// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // Defino el modelo
  sequelize.define("Country", {
    countryid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
     allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue: " ",
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    timestamps: false,
  });
};

/* 📍 MODELO 1 | Country

ID (Código de tres letras). *
Nombre. *
Imagen de la bandera. *
Continente. *
Capital. *
Subregión.
Área.
Población. * */