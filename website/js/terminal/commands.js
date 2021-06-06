function toolman(command){
    if(command == "time"){
        return Date()
    } else if(command = calc){
        return "function in progress"
    }
}
function sysman(command){
    let serviceStatus = "Online"
    if(command == "status"){
        return serviceStatus
    } else if( command == "statistic"){
        return getStatistic()
    }
}
function legalDocs(){
    return "LICENSE: MIT License"
}
function home(){
    return "Ptilopsis Terminal Service   "+getServiceVersion()[0]
}
function welcome(){
    return "Ptilopsis Terminal loaded\n\
    Ptilopsis Terminal Service connected\n\
    Ptilopsis Terminal Version "+getServiceVersion()[0]+ "   PTS-API Version "+getServiceVersion()[1]+"\n\
    Visit https://github.com/PTS-Maintainers/PTS-Website for more info"
}