import { Model, Optional, DataTypes, Sequelize } from "sequelize";
import { database } from './index';

interface ShopAttributes {
    id: String,
    name: String,
    logo: String,
}


export class Shop extends Model<ShopAttributes, ShopAttributes> implements ShopAttributes {
    public id!: String;
    public name!: String;
    public logo!: String;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;


}

console.log('Iniciando Model Shop');

Shop.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    },
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
}, { tableName: 'shops', sequelize: database, updatedAt: 'updated_at', createdAt: 'created_at', deletedAt: 'deleted_at' });

Shop.sync().then(() => {
    console.log('Shop synced');
});

