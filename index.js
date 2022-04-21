

function introduction(name) {
    return "Hi, my name is " + name + ".";
}

function introductionWithLanguage(a,  b){
    return "Hi, my name is " + a + " and I am learning to program in " + b + "."; 
}


function introductionWithLanguageOptional(name, language = "JavaScript"){
    return "Hi, my name is " + name + " and I am learning to program in " + language + "."; 
}
