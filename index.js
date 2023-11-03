var express = require ('express')
var ejs = require('ejs')
// Create the express application object
const app = express()
const port = 8000
// with bodyParser we can remove the information from the Url
// create the variable to store the equire
var bodyParser= require ('body-parser')
var shopData  = {shopName: " 24/7 ",
                productCategories: ["Beer 🍺", "Wine 🍷","Cider 🧉", "Whiskey 🥂","Rom 🍸",'Soft Drinks 🍹']}

//static files 
//all documents are grouped in a folder called public for easier access
app.use(express.static('public'));
//I changed from html to ejs to make it easier to connect between files
app.use('/css',express.static(__dirname +'public/css'))
app.set('views', __dirname + '/views');
//we use the ejs module
app.set('view engine', 'ejs');
// we use the module body - parser
app.use(bodyParser.urlencoded({ extended: true }))

 //we call the function rendering the index,
app.get('/',function(req,res){
    res.render('index',shopData)
});
//we call the function rendering the about,
app.get('/about',function(req,res){
    res.render('about',shopData);
});
 //we call the function rendering the search,
app.get('/search',function(req,res){
    res.render("search",shopData);
});
 // generate a response directly to the url
app.get('/search-result',function(req,res){
    res.render("search",shopData)
    res.send(req.query)
});
//we call the function rendering the register where the form will be
app.get('/register', function (req,res) {
    res.render('register',shopData);
}); 
// will generate a response in a new address with the desired message
app.post('/registered', function (req,res) {
    // saving data in database
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!'
    + " we will  send a email  confirmation to this address:  " + req.body.mail);
});
   
//confirmation of connection with the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))