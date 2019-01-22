const fetcher = () => {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    type: 'GET',
    dataType: 'json',
    success: data => {
      SwimTeam.move(data.move);
      console.log(`Sliiiiide to the ${data.move}. Take it back now y'all.`);
    },
    error: () => {
      console.log('error: failed to retrieve command');
    }
  });
};
