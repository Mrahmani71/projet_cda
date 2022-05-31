var day = new Date().toLocaleDateString('fr-FR').split('/').reverse()

const nowDay = day[0] + "-" + day[1] + "-" + day[2]
console.log(nowDay); // Apr 30 2000
let date = []
var nextDay = new Date(day);

// for (var i = 0; i < 5; i++) {
// nextDay.setDate(day.getDate() + i);
// console.log(nextDay)
// }

// console.log(date)