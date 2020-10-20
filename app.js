const express = require('express')
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8080;

app.use(express.static('public'))

app.post('/updateRecord', (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let email = req.query.email;
    let line = firstName + ',' + lastName + ',' + email + ',' + new Date() + ',I Agree' + '\n';
    fs.appendFile(path.join(__dirname + '/users.csv'), line, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    res.sendFile(path.join(__dirname + '/public/confirmation.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
})
