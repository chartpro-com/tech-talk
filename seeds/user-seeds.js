const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'JalenHurts',
    email: 'jalenhurts@gmail.com',
    password: 'password1'
  },
 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
