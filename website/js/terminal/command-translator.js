Termpage.init(document.getElementById('window'), (command) => {
    command = command.toLowerCase().trim();
    let isValid = false
    let termVer = "2021.6.5"
    for(let input of validCommand){
        if(input === command){
         isValid = true
         break
        } else{
            isValid = false
        }
    }
    if (isValid === true && command === 'home') {
      return "Ptilopsis Terminal Service   Version 2021.6.5";
    } else if(isValid === true && command === "welcome"){
        return "Ptilopsis Terminal started\n\
        " + "Terminal Version "+ termVer + "\n\
        More info: https://github.com/PTS-Maintainers/PTS-Website"
    } else if(isValid === true && command === "toolman time"){
        return Date()
    }
    else if (isValid === false){
      return 'Command not found';
    }
  }, {
    initialCommand: 'welcome'
  });