
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('button').on('click', () => {
  var directions = ['up', 'down', 'left', 'right'];
  var move = directions[Math.floor(Math.random() * 4)];
  SwimTeam.move(move);
});

console.log('Client is running in the browser!');
