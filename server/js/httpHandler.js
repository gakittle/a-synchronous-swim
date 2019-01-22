const headers = require('./cors');
const messages = require('./messageQueue.js');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    headers['Content-Type'] = 'application/json';
    res.writeHead(201, headers);

    var directions = ['up', 'down', 'left', 'right'];
    var move = directions[Math.floor(Math.random() * 4)];
    messages.enqueue(move);
    res.end(move);
  } else if (req.method === 'GET') {
    headers['Content-Type'] = 'application/json';
    res.writeHead(200, headers);

    var move = messages.dequeue();
    res.end(JSON.stringify([move]));
  }
};
