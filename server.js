// ******************************************************************
// SSD Assignment 02   - Software Engineering 
// Udayangani Hamy W.C - IT 1602 3574 
// Ranawake P I        - IT 1609 7520
// ******************************************************************

const express = require('express');



const app = express();

app.use(express.static('./dist/sharing-app'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/sharing-app/'}
);
});


app.listen(process.env.PORT || 8080);

