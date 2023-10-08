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
  };
  queryResult = result;
  
});
pool.query(`SELECT * FROM exercises WHERE exercise_name = 'Back'`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  backQuery = result;
  
});
pool.query(`SELECT * FROM exercises WHERE exercise_name = 'Chest'`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  chestQuery = result;
  
});
pool.query(`SELECT * FROM exercises WHERE exercise_name = 'Shoulders'`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  shouldersQuery = result;
  
});
pool.query(`SELECT * FROM exercises WHERE exercise_name = 'Legs'`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  legsQuery = result;
  
});
pool.query(`SELECT * FROM exercises WHERE exercise_name = 'Biceps'`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  bicepsQuery = result;
  
});
pool.query(`SELECT * FROM exercises WHERE exercise_name = 'Triceps'`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  tricepsQuery = result;
  
});
pool.query(`SELECT * FROM exercises WHERE exercise_category = 'Pull'`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  pullQuery = result;
  
});
pool.query(`SELECT * FROM exercises WHERE exercise_category = 'Push'`, (err, result, fields) => {
  if(err){
    return console.log(err);
  };
  pushQuery = result;
  console.log(pushQuery)
});

const all = {
  backQuery,
  chestQuery,
  shouldersQuery,
  tricepsQuery,
  bicepsQuery,
  pullQuery,
  pushQuery,
};
export default all;