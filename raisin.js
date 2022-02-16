const raisinAlarm = function(cookie) {
   let alarm = 'all good';
  for(snacks in cookie){
    if (cookie[snacks] === '🍇'){
      alarm = 'raisin alert'
    }
  }
  return alarm
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));