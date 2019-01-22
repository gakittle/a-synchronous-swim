const clickRandomizer = () => {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    method: 'POST',
    dataType: 'json',
    success: data => {
      console.log(`Queueing ${data}...`);
    },
    error: err => {
      console.log('error: failed to send command', err);
    }
  });
};

const fetcher = () => {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    method: 'GET',
    dataType: 'json',
    success: data => {
      data.forEach(move => {
        SwimTeam.move(move);
        console.log(`Sliiiiide to the ${move}. Take it back now y'all.`);
      });
    },
    error: () => {
      console.log('error: failed to retrieve command');
    }
  });
};

setInterval(fetcher, 100);
