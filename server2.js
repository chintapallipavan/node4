pp.get('/about',function(requestobject,responseObject){
    responseObject.redirect('/node');
});

app.get('/node',function(requestobject,responseObject){
    responseObject.send("Welcome to my Node Js project");
});

app.listen(4000,function(){
    console.log(`PAVAN`);
})