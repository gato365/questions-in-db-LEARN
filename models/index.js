const Users = require('./Users');
const Notes = require('./Notes');


Users.hasMany(Notes, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


Notes.belongsTo(Users, {
    foreignKey: 'user_id'
});


module.exports = { Users, Notes };