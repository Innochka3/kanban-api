
const express = require('express')
const routes = require("./routes");
const parserResponse = require("./bodyParser");

const app = express()
const PORT = process.env.PORT || 3000


routes(app);
parserResponse(app);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})