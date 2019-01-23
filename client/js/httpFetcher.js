const clickRandomizer = () => {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    method: 'POST',
    dataType: 'text',
    success: data => {
      console.log(`Queueing ${data}...`);
    },
    error: (request, status, err) => {
      console.log('error: failed to send command greg', err);
    }
  });
  //   const WebSocket = require('ws');

  // const wss = new WebSocket.Server({ port: 8080 });

  // wss.on('connection', function connection(ws) {
  //   ws.on('message', function incoming(message) {
  //     console.log('received: %s', message);
  //   });

  //   ws.send('something');
  // });
};

const fetcher = () => {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    method: 'GET',
    dataType: 'text'
  })
    .done(data => {
      SwimTeam.move(data);
    })
    .fail((request, something, err) => {
      console.log('error: failed to retrieve command', err);
    });
};

setInterval(fetcher, 25);
