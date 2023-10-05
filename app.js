const {createPool} = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "5551",
  database: "workoutDatabase",
  connectionLimit: 10
})
pool.query(`SELECT * FROM exercises`, (err, result, fields) => {
  if(err){
    return console.log(err);
  }



  queryResult = result;




  console.log(queryResult);
  
});

