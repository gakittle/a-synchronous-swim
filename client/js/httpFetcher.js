const clickRandomizer = () => {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    method: 'POST',
    dataType: 'json',
    success: data => {
      console.log(`Queueing ${data}...`);
    },
    error: (request, status, err) => {
      console.log('error: failed to send command greg', err);
    }
  });
};

const fetcher = () => {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    method: 'GET',
    dataType: 'json'
  })
    .done(data => {
      data.forEach(move => {
        if (move) {
          SwimTeam.move(move);
        }
      });
    })
    .fail(() => {
      console.log('error: failed to retrieve command');
    });
};

setInterval(fetcher, 100);
