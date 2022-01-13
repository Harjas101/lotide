/*
You will write a function that identifies whether a supposedly chocolate chip cookie also has raisins in it. 
Your function, raisinAlarm, will receive a cookie which is an array of chocolate chips ("🍫")
Your function must search through the array to see whether or not a raisin is present.("🍇") 
*/

const raisinAlarm = function (cookie) {
  let alarm = 'All good!'
  for (let snacks in cookie) {
    if (cookie[snacks] === "🍇") {
      alarm = "Raisin alert!"
    }
  }
  return alarm
};



// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function (cookies) {
  let alarm = []

  for (let i = 0; i < cookies.length; i++) {
    alarm[i] = 'All good!'

    for (let j = 0; j < cookies[i].length; j++) {

      if (cookies[i][j] === "🍇") {
        alarm[i] = "Raisin alert!"
      }
    }
  }
  return alarm
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));