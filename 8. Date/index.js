// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

const options = { weekday: 'narrow', year: 'numeric', month: 'long', day: 'numeric' };
const today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016
console.log(today.toLocaleDateString("en-US", options)); 


console.log(`${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`);


const option2 = { month: 'long'};
const monthLongName = new Intl.DateTimeFormat('en-US', option2).format(today);


console.log(`${today.getDate()} / ${monthLongName} / ${today.getFullYear()}`);

// December

//day: 
//The representation of the day. 
//Possible values are "numeric", "2-digit".
//weekday: 
//The representation of the weekday. 
//Possible values are "narrow", "short", "long".
//year: 
//The representation of the year. 
//Possible values are "numeric", "2-digit".
//month: 
//The representation of the month. 
//Possible values are "numeric", "2-digit", "narrow", "short", "long".
//hour: 
//The representation of the hour. 
//Possible values are "numeric", "2-digit".
//minute: The representation of the minute. 
//Possible values are "numeric", "2-digit".
//second: 
//The representation of the second. 
//Possible values are "numeric", 2-digit".