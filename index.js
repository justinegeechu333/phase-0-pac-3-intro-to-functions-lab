function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function isLowerCase(string) {
  return string === string.toLowerCase();
}

function isUpperCase(string) {
  return string === string.toUpperCase();
}
function sayHiToHeadphonedRoommate(string) {
  if (isLowerCase(string)) {
    return "I can't hear you!";
  } else if (isUpperCase(string)) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
