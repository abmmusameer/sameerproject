var express = require("express");
var myParser = require("body-parser");
var app = express();


app.use(myParser.json());       // to support JSON-encoded bodies
app.use(myParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.post("/postData", function (request, response) {
    var name = request.body.name;
    var age = request.body.age;
    var address = request.body.address;


    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({
        joint: name + '-' + address + '-' + age
    }));

});

app.listen(3000);
