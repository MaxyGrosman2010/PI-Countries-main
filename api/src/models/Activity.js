const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.FLOAT(1),
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
            validate: {
                min: 0,
                max: 23
            }
        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        }
    }, { timestamps: false});
};