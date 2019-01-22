const fetcher = () => {
  const serverUrl = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverUrl,
    type: 'GET',
    contentType: 'application/json',
    success: data => {
      console.log(data);
      SwimTeam.move(data);
      console.log(`Sliiiiide to the ${data}. Take it back now y'all.`);
    },
    error: () => {
      console.log('error: failed to retrieve command');
    }
  });
};
