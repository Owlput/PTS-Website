function toolman(command) {
  if (command == "time") {
    return Date();
  } else if (command == "calc") {
    return wipFlag;
  } else if (command == "help") {
    return toolmanHelp;
  } else {
    return toolmanHelp;
  }
}
function sysman(command) {
  let serviceStatus = "Online";
  if (command == "status") {
    return serviceStatus;
  } else if (command == "statistic") {
    return getStatistic();
  } else {
      return sysmanHelp
  }
}
function legalDocs() {
  return "LICENSE: MIT License";
}
function home() {
  return "Ptilopsis Terminal Service   " + getServiceVersion()[0];
}
function welcome() {
  return welcomeMessage;
}
function dbman() {
  return wipFlag;
}
function help() {
  return helpMessage;
}
