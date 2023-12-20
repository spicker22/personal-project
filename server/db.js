// Importing 'Sequelize' which maps database entries to Javascript objects
import { Sequelize } from 'sequelize';

// Setting up function 'connectToDB' to connect to database
async function connectToDB(dbURI) {
  console.log(`Connecting to DB: ${dbURI}`);

  // Create Sequelize instance & defining properties
  const sequelize = new Sequelize(dbURI, {
    logging: false,                       
    define: {
      underscored: true,       // Use snake_case for field names
      timestamps: false,       // Disable timestamps
    },
  });

// Attempts to authenicate to db using 'authenicate' method of Sequelize instance
  try {
    await sequelize.authenticate();
    console.log('Connected to DB successfully!');
  } catch (error) {
    console.error('Unable to connect to DB:', error);
  }
  return sequelize;
}

export default connectToDB;