function whatCanIDoLegally(age){
if (age < 18){
    return "You can't do anything!" 
}
else if (age > 18 && age <= 20){
    return "You can drive!"
}
else{
    return "You can do both but not as the same time!"
}
}

module.exports = whatCanIDoLegally;