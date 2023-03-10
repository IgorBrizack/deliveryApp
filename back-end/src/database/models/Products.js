module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProducts, { 
      constraint: true,
      foreignKey: 'productId',
      as: 'product_id'
    });
  };

  return Product;
};