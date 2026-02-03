function generateRandomNumber() {
  const x = Math.floor(Math.random() * 6) + 1;
  return x;
}

$("#start").click(function () {
  let a = generateRandomNumber();
  let b = generateRandomNumber();

  $("#dice1").text(a);
  $("#dice2").text(b);

  if (a > b) {
    $("#result").text("Player 1 Wins");
  } else if (a < b) {
    $("#result").text("Player 2 Wins");
  } else {
    $("#result").text("Draw");
  }
});
