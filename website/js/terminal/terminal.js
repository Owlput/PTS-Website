/* Text */
let toolmanHelp =
  "toolman is a tool set manager.\nAvaliable commands:\n\
time\n\
calc\n\
help\n";
let welcomeMessage =
  "Ptilopsis Terminal loaded\n\
Ptilopsis Terminal Service connected\n\
Ptilopsis Terminal Version " +
  getServiceVersion()[0] +
  "   PTS-API Version " +
  getServiceVersion()[1] +
  "\n\
Visit https://github.com/Owlput/PTS-Website for more info";
let wipFlag = "WORK IN PROGRESS";
let helpMessage =
  "Enter a command\n\
Commands avaliable:\n\
 help\n legaldocs\n welcome\n toolman\n sysman\n ";
let sysmanHelp = wipFlag;

/********************/
/* Terminal Builder */
/********************/

Termpage.init(
  document.getElementById("window"),
  (command) => {
    function commandSplit(inputCommand) {
      let letters = "";
      inputCommand += " ";
      inputCommand = inputCommand.toLowerCase();
      let commands = [];
      for (letter of inputCommand) {
        if (letter != " ") {
          letters += letter;
        } else if (letter == " ") {
          commands.push(letters);
          letters = "";
        }
      }
      return commands;
    }
    let com;
    try {
      com = commandSplit(command);
    } catch {
      console.log("Something is wrong with your command input!");
    }
    let _1stArg = com[0];
    let _2ndArg = com[1];
    let _3rdArg = com[2];
    if (_1stArg === "home") {
      return home();
    } else if (_1stArg === "welcome") {
      return welcome();
    } else if (_1stArg === "toolman") {
      return toolman(_2ndArg);
    } else if (_1stArg === "sysman") {
      return sysman(_2ndArg);
    } else if (_1stArg === "help") {
      return helpMessage;
    } else {
      return "Command not found";
    }
  },
  {
    initialCommand: "welcome",
  }
);

/***********************/
/* Function Definition */
/***********************/
function getServiceVersion() {
  return ["2021.6.6", "2021.6.6"];
  //WIP
}
function getStatistics() {
  return wipFlag;
}
function getServiceStatus() {
  return "Online";
  //WIP
}

/* command-single */
function legalDocs() {
  return "LICENSE: MIT License";
}
function home() {
  return "Ptilopsis Terminal Service   " + getServiceVersion()[0];
}
function welcome() {
  return welcomeMessage;
}
function help() {
  return helpMessage;
}

/* Manager Functions */
function dbman() {
  return wipFlag;
}

function sysman(command) {
  if (command == "status") {
    return getServiceStatus();
  } else if (command == "statistic") {
    return getStatistics();
  } else {
    return sysmanHelp;
  }
}

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

function idman(...arg) {
  return wipFlag;
}
