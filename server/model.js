import { Model, DataTypes } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

// Establishes connection to PostgreSQL db using 'connectToDB function
// Resulting database connection object 'db' is used
export const db = await connectToDB('postgresql:///doctors');

// 'Category' class
export class Category extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// 'Category' model
Category.init(
  {
    categoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    }
  },
  {
    modelName: 'category',
    sequelize: db,
  },
);


// 'Doctor' class
export class Doctor extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// 'Doctor' model
Doctor.init(
  {
    doctorId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.TEXT
    },
    categoryId: {
      type: DataTypes.INTEGER
    },
    accountId: {
      type: DataTypes.INTEGER
    },
  },
  {
    modelName: 'doctor',
    sequelize: db,
  },
);


// 'Account' class
export class Account extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// 'Account' model
Account.init(
  {
    accountId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }
  },
  {
    modelName: 'account',
    sequelize: db,
  },
);



// Define Relationship: movie to rating -> one to many
Category.hasMany(Doctor, {foreignKey: 'categoryId'})
Doctor.belongsTo(Category, {foreignKey: 'categoryId'})


Account.hasOne(Doctor, {foreignKey: 'accountId'})
Doctor.belongsTo(Account, {foreignKey: 'accountId'})

// Forcing changes. It clears previously existing tables. Creates new tables
// db.sync({force: true})