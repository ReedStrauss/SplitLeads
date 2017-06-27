Global.gs
//Global Variables
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var ui = SpreadsheetApp.getUi();

//Create macros menu on open
function onOpen(e) {
      var menuEntries = [];

                      menuEntries.push({ name: "Split Leads", functionName: "splitLeads" });   

                      
 ss.addMenu("Split Leads", menuEntries);
}

