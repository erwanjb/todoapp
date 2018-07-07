const express = require("express");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 8080;
const app = express();
const tab =[
	"tache 1",
	"tache 2"
];
app.get('/todo',(req, res)=>{
	res.render('todo.ejs', {tab: tab});
})
.get('/todo_aleatoire', (req, res)=>{
	var tab1=[
        "aller voir",
        "manger avec",
        "parler à",
        "jouer avec",
        "partir avec"
    ];
    var tab2=[
     	"Pierre",
        "Paul",
        "Jacque",
        "Benoit",
        "Arthur"
    ];
    var nb1 = Math.floor(Math.random()*5);
    var nb2 = Math.floor(Math.random()*5);
    var sum = tab1[nb1]+" "+tab2[nb2];
    tab.push(sum);
	res.redirect('/todo');

})
.get('/todo_supprimer/:id', (req, res)=> {
    if (req.params.id != '') {
        tab.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})
.post('/todo_ajouter/', urlencodedParser, (req, res)=> {
    if (req.body.todo != '') {
        tab.push(req.body.todo);
    }
    res.redirect('/todo');
})
.post('/todo_modifier/', urlencodedParser, (req, res)=> {
    if (req.body.change != '' && req.body.change2 != '') {
        tab.splice(tab.indexOf(req.body.change2),1,req.body.change);
    }
    res.redirect('/todo');
})


app.listen(port); 