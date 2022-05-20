//DEPENDENCIES
var dateDisp = moment().format("MMMM Do, dddd");
var currentHour = moment().format("H")

var container = $(".container");
var btn = $(".btn");

var block9 = $("#9");
var input9 = $("input[name='input9']").val();


//STATES

//FUNCTIONS
// Change color when the hour is in
function colorTime(currentHour) {

};


//USER INTERACTIONS

//INITIALIZATION
//  displays today's date
$("#currentDay").text(dateDisp);
