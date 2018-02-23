// burgers table model
module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("burger", {
    burger_name: {
    type: DataTypes.STRING,
    allowNull: false
},
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
  return Burger
};
