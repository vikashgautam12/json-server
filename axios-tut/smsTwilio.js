const express = require('express');
const client = require('twilio')(accountSid, authToken, {
    logLevel: 'debug'
  });


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    sendTextMessage();
    res.send(`<div style = "text-align:center;padding-top:40px;">
        <h1>welcome to my website</h1>
        <p>this is my first website</p>


    </div>`)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
function sendTextMessage() {

}