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
    } else if(_1stArg === "help" ){
      return helpMessage
    }
    else {
      return "Command not found";
    }
  },
  {
    initialCommand: "welcome",
  }
);
