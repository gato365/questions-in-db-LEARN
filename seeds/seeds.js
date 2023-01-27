const sequelize = require('../config/connection');
const { Users, Notes } = require('../models');


const userData = require('./userData.json');
const notesData = require('./notesData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Users.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Notes.bulkCreate(notesData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedDatabase();


