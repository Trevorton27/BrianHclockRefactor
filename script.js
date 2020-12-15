const dateData = new Date();

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let displayMilitaryTime = false;

const timeDisplayButton = document.getElementById('timeDisplayButton');
timeDisplayButton.addEventListener('click', timeFormat);

function initiateDate(dateData) {
  const month = monthNames[dateData.getMonth()];
  const dayOfWeek = weekdays[dateData.getDay()];
  const date = dateData.getDate();
  const dateDisplay = document.getElementById('date');
  dateDisplay.textContent = `${dayOfWeek} ${month}, ${date}`;
}

function initiateTime(dateData) {
  const hours = dateData.getHours();
  const hoursMilitary = hours;
  const hoursStandard = hours > 12 ? hours - 12 : hours;

  const minutes = addLeadingZero(dateData.getMinutes());
  const seconds = addLeadingZero(dateData.getSeconds());
  const universalTime = dateData.getUTCHours();
  const universalTimeDifference = universalTime - dateData.getHours();
  const period = universalTime - universalTimeDifference >= 12 ? 'PM' : 'AM';

  const twelveHourTime = `${hoursStandard}:${minutes}:${seconds}${period}`;
  const twentyFourHourTime = `${hoursMilitary}:${minutes}:${seconds}`;

  const clockDisplay = document.getElementById('time');

  displayMilitaryTime === false
    ? (clockDisplay.textContent = twelveHourTime)
    : (clockDisplay.textContent = twentyFourHourTime);

  displayMilitaryTime === false
    ? (timeDisplayButton.textContent = '24 HR')
    : (timeDisplayButton.textContent = '12 HR');
}

function timeFormat() {
  displayMilitaryTime = !displayMilitaryTime;
}

function addLeadingZero(time) {
  return time < 10 ? `0${time}` : time;
}

initiateDate(dateData);
initiateTime(dateData);

setInterval(() => {
  initiateTime(dateData);
  console.log('Im firing');
}, 1000);
