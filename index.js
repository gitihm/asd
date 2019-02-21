var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/img'));
app.get('/fruit', function(req, res){
   res.render('fruit', {fruits: ['banana', 'apple'] , foo: 'bar'})
})
app.get('/computer', function(req, res){
    res.render('computer', {
        computers : [{
            pic:'1.jpg',
            name:'windows'
        },
        {
            pic:'2.jpg',
            name:'OSX'
        },
        {
            pic:'3.png',
            name:'Android'
        },
        {
            pic:'4.jpg',
            name:'IOS'
        },] 
            
        }, 
       
    )
   
 })
app.listen(8000,()=>{
    console.log("server running : 8000")
})