const express = require('express');
const https = require('node:https');
const bodyParser = require ('body-parser');
const app = express();
const port = 3000;
let items = [];
app.set('view engine', 'ejs');
//this line we use to show our data in the console log or in the html
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));


app.get('/', (req, res) => {

  let today = new Date();
let options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
};


let day = today.toLocaleDateString('en-US',options);
res.render('list', {kindofday: day, newListItems: items});
})

app.post('/', function(req,res){
  //to read the users input
  let item = req.body.newItem;
   items.push(item);
  res.redirect('/');
    })



app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening on port ${port}`)
})
