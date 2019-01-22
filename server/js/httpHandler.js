const headers = require('./cors');

module.exports = (req, res) => {
  headers['Content-Type'] = 'application/json';
  res.writeHead(200, headers);
  var directions = ['up', 'down', 'left', 'right'];
  var move = directions[Math.floor(Math.random() * 4)];
  res.end(JSON.stringify(move));
  return;
};
