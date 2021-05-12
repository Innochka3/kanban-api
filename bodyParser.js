const bodyParser = require("body-parser");

function parserResponse(app){
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
}
module.exports = parserResponse;
