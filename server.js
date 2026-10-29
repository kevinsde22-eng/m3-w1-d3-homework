var express = require('express');
var path = require('path');
var posts = require('./data/posts.json');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// styles.css and images/ are served from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('content', { posts: posts });
});

app.listen(3000, function(){
    console.log('Food Blog running at http://localhost:3000');
});
