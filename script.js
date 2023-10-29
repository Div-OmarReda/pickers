const teams = [
  `Arsenal`,
  `Milan`,
  `Liverpool`,
  `West Germany`,
  `France`,
  `Real Madrid`,
  `Manchester United`,
  `Barcelona`,
  "Real Madrid",
  `Bayern Munich`,
  `Manchester City`,
  `Chelsea`,
  `Juventus`,
  `Paris-Saint-German`,
  `inter millan`,
  `Atlético Madrid`,
  "Borussia Dortmund",
  `AC Milan`,
  `SSC Napoli`,
  `Fiorentina`,
  `tottenham`,
  `lazio`,
  `benfica`,
  `fc porto`,
  `Roma`,
  `Sevilla`,
  `Ajax`,
];
let gues = Math.trunc(Math.random() * teams.length);
let gues2 = Math.trunc(Math.random() * teams.length);
console.log(gues, gues2);

const btnPicker = document.querySelector(".btn-pick");
const labelPlayer1 = document.querySelector(".player--1");
const labelPlayer2 = document.querySelector(".player--2");

btnPicker.addEventListener("click", function () {
  // console.log(`${teams[Math.trunc(Math.random() * teams.length)]}`);
  if (gues === gues2) {
    gues = Math.trunc(Math.random() * teams.length);
    gues2 = Math.trunc(Math.random() * teams.length);
    console.log(gues, gues2);
    labelPlayer1.textContent = `${teams[gues]} العب ب`;
    labelPlayer2.textContent = `${teams[gues2]} العب ب`;
  } else {
    gues = Math.trunc(Math.random() * teams.length);
    gues2 = Math.trunc(Math.random() * teams.length);
    labelPlayer1.textContent = `${teams[gues]} العب ب`;
    labelPlayer2.textContent = `${teams[gues2]} العب ب`;
  }
});
