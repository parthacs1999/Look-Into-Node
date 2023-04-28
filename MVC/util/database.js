// const mysql=require('mysql2');
// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'SQL@620pc'
// });

// module.exports=pool.promise();

const { Sequelize } = require('sequelize');

const sequelize=new Sequelize('node-complete','root','SQL@620pc',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;
