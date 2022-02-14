const path = require('path');
const express = require('express');
 
const app = express();
 
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static("public"));
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
 
const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
