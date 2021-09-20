const talkingCalendar = function (date) {
  let newData = date.split("/");
  let month;
  let day;
  let year = newData[0];

  if (newData[1] === "01") {
    month = "January";
  }
  if (newData[1] === "02") {
    month = "Feburary";
  }
  if (newData[1] === "03") {
    month = "March";
  }
  if (newData[1] === "04") {
    month = "April";
  }
  if (newData[1] === "05") {
    month = "May";
  }
  if (newData[1] === "06") {
    month = "June";
  }
  if (newData[1] === "07") {
    month = "July";
  }
  if (newData[1] === "08") {
    month = "August";
  }
  if (newData[1] === "09") {
    month = "September";
  }
  if (newData[1] === "10") {
    month = "October";
  }
  if (newData[1] === "11") {
    month = "November";
  }
  if (newData[1] === "12") {
    month = "December";
  }
  if (newData[2] === "01") {
    day = "1st";
  } else if (newData[2] === "21" || newData[2] === "31") {
    day = newData[2] + "st";
  } else if (newData[2] === "02") {
    ndSecond = newData[2].split("");
    day = ndSecond[1] + "nd";
  } else if (newData[2] === "22") {
    day = newData[2] + "nd";
  } else {
    day = newData[2] + "th";
  }

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
