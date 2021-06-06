Termpage.init(
  document.getElementById("window"),
  (command) => {
    function commandSplit(inputCommand){
      let letters = ""
      inputCommand += " "  
      inputCommand = inputCommand.toLowerCase()
      let commands = []
      for(letter of inputCommand){
        if(letter != " "){
          letters += letter
        } else if(letter == " "){
          commands.push(letters)
          letters = ""
        }
      }
      return commands
    }
    let com
    try {com = commandSplit(command)
    }
    catch { return "Something is wrong with your command input!"}
    let _1stArg = com[0]
    let _2ndArg = com[1]
    let _3rdArg = com[2]
    if (_1stArg === "home") {
      return home()
    } else if (_1stArg === "welcome") {
      return welcome()
    } else if (_1stArg === "toolman" && _2ndArg === "time") {
      return toolman(_2ndArg)
    } else {
      return "Command not found";
    }
  },
  {
    initialCommand: "welcome",
  }
);
