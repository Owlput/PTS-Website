function sysman(command) {
    if (command == "status") {
      return getServiceStatus();
    } else if (command == "statistic") {
      return getStatistic();
    } else {
        return sysmanHelp
    }
  }