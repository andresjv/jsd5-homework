
var savedStartup = [];
var txt;

// Madlibs Generator
$( "#create" ).click(function() {
 
    // Sartup arrays
    var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    // Random Generator  
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    // Madlib Generator 
    txt = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

    // Jquery to repalce text
    $("#xForY").replaceWith("<h1 id='xForY'>" + txt +  "</h1>");

});

// Saved Array
$( "#save" ).click(function() {
    
    // Add txt to savedStartup Array
    savedStartup.push(txt);
    console.log(savedStartup);
});

// Print Saved Array

$( "#print" ).click(function() {

      // clear favorites
      $("#favorites").replaceWith("<h2 id='favorites'></h2>");

      // Print favorites
    savedStartup.forEach(function(element) {
      $("#favorites").append("<h2 id='favorites'>" + element +  "</h2>");
    });

});
