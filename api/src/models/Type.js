const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            autoIncrement:true
        },
        type : {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false,
    }
    )
}