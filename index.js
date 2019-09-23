
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
const { users } = require('./state')
app.use(bodyParser.json());

/* BEGIN - create routes here */
app.get("/users",(req,res)=> {
  res.json(users);
})

app.get("/users/1",(req,res)=> {
  res.json(users[0]);
})

app.post("/users",(req,res)=>{
  let hardCode = {
    "_id": 55,
    "name": "Johnny Christmas",
    "occupation": "Plumber",
    "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
  };
  users.push(hardCode);
  res.json(hardCode);
})

app.put("/users/1",(req,res)=>{
  let theFirstUser = users[0]
  theFirstUser.name = "Bobby Halloween"
  theFirstUser.occupation = "Engineer"
  res.json(theFirstUser);
})




app.delete('/users/:userId', (req, res) => {
  const no = users.findIndex(
    u => u._id == req.params.userId
  );
  users.splice(no, 1);
  return res.send('deleted')
})

app.post('/users', (req, res) => {
  const newUser = req.body
  const counter = users.length+1
  newUser._id = counter
  console.log(newUser)
  users.push(newUser)
  res.json(newUser)
})






/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))