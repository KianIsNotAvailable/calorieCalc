const {createPool} = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "kian",
  password: "Eight1etters",
  database: "workoutdatabase",
  connectionLimit: 10
})

pool.query(`SELECT * FROM exercises`, (err, result, fields) => {
  if(err){
    return console.log(err);
  }
  return console.log(result);
})