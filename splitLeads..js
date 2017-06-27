function splitLeads() {
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var ui = SpreadsheetApp.getUi();





//creates the 'question' function.
//the quetion function is called to gather user input, and will quickly recall itself if the user enters an unsatisfactory input. 
this.question = function(){ 
var r = ui.prompt(
'How many people would you like to divide this list for?',
      ui.ButtonSet.OK_CANCEL);    
      return r;
}


//Logs the information that the user prompt returned
var answer = question().getResponseText();      
Logger.log("You are diving this list by " + answer);
Logger.log(answer);


//checks to see if the input was a number, and returns a boolean expression
var isNum = isNaN(answer);
Logger.log(isNum);


//checks to see if the user input was neither empty, nor a string. You wouldn't really be able to divide by a letter, now would you?
if (answer == '' || isNum == true) {

    ui.alert('Please enter a valid number, that is greater than 1. You arn\'t trying to take these leads for yourself are you?');
var answer = question().getResponseText(); 
}


//Preparing the sheet for manipulation
//sorts sheet by email address
var targetsheet = ss.getSheetByName("Out");
var range = targetsheet.getRange(2, 1, targetsheet.getLastRow(), targetsheet.getLastColumn());
range.sort(7);


var users = [["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],];
var contactLength = targetsheet.getLastRow(); 
//var contactLength = (contactL - 1);
var numUsers = answer;
var modtest = contactLength % numUsers;
var divtest = Math.floor(contactLength / numUsers);
var userSplit = []
//Logger.log("this is the contact list var: " + contactlist);
Logger.log("this is the contact length var: " + contactLength);
Logger.log("this is the numUsers var: " + numUsers);
Logger.log("this is the modtest var: " + modtest);
Logger.log("this is the divtest var: " + divtest);

//
//for (i=0; i < divtest; i++){
//  for (s=0; s < numUsers; s++){
//  userSplit.push(users[s]);
//  }
//}
//
//
//s=0
//
//for (i=0; i < modtest; ) {
//  i++
//  userSplit.push(users[s]);
//  s++
//}

for (i=0; i < (contactLength-1); i++){
userSplit.push(users[i%numUsers]);
Logger.log(i%numUsers);
}

Logger.log(i%numUsers);
Logger.log(userSplit);
var destrange = targetsheet.getRange(2, 23, (targetsheet.getLastRow()-1), 1)
destrange.setValues(userSplit);

}
