const express = require('express');



const app = express();

app.use(express.static('./dist/sharing-app'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/sharing-app/'}
);
});


app.listen(process.env.PORT || 8080);

