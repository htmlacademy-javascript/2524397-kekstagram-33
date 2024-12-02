function lengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

function resultComparison(string, maxLength) {
  return string.length <= maxLength;
}

lengthString('проверяемая строка', 20);
lengthString('проверяемая строка', 18);
lengthString('проверяемая строка', 10);

resultComparison('проверяемая строка', 20);
resultComparison('проверяемая строка', 18);
resultComparison('проверяемая строка', 10);

function isPalindrom(string) {
  string = string.toLowerCase();
  string = string.replaceAll(' ','');
  const reverseString = string.split('').reverse().join('');
  if (reverseString === string) {
    return true;
  }
  return false;
}

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');
isPalindrom('Лёша на полке клопа нашёл ');


// Не получилось
function getNumber (string) {
  for (let i = 0; i < string.length; i++) {
    let resultParse = parseInt(string[i], 10);
    resultParse = (Math.round(resultParse));
  }
}

getNumber('2023 год');
//getNumber('ECMAScript 2022');
//getNumber('1 кефир, 0.5 батона');
//getNumber('агент 007');
//getNumber('а я томат');

const meetingIsReally = function (workStart, workEnd, meetingStart, meetingTime) {
  const splitWorkStart = workStart.split(':');
  const splitWorkTimeEnd = workEnd.split(':');
  const splitMeetingStart = meetingStart.split(':');

  const timeConversion = function (TimeForConversion) {
    const hours = Math.floor(TimeForConversion / 60);
    const minutes = TimeForConversion - (hours * 60);
    const meetingTimeConversionResult = `${hours }:${minutes}`;
    return meetingTimeConversionResult;
  };

  const conversionResult = timeConversion(meetingTime);
  const splitMeetingTime = conversionResult.split(':');

  const workTimeWithMeetingHours = Number(splitMeetingStart[0]) + Number(splitMeetingTime[0]);
  const workTimeWithMeetingMinutes = Number(splitMeetingStart[1]) + Number(splitMeetingTime[1]);
  const workTimeWithMeeting = [workTimeWithMeetingHours,workTimeWithMeetingMinutes];

  return (Number(workTimeWithMeeting[0]) >= Number(splitWorkStart[0]) && Number(workTimeWithMeeting[1]) >= Number(splitWorkStart[1]) && Number(workTimeWithMeeting[0]) <= Number(splitWorkTimeEnd[0]) && Number(workTimeWithMeeting[1]) <= Number(splitWorkTimeEnd[1]));
};

meetingIsReally('08:00', '17:30', '14:00', 90);
meetingIsReally('8:0', '10:0', '8:0', 120);
meetingIsReally('08:00', '14:30', '14:00', 90);
meetingIsReally('14:00', '17:30', '08:0', 90);


