module.exports = (sequelize, DataTypes) => {
    const Offer = sequelize.define('offers', {
      offer: DataTypes.JSON
    });
  
    return Offer;
  }