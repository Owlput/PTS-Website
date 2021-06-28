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