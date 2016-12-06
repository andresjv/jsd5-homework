/* Convert the existing web page, which contains data hard coded in HTML,
 * to instead pull the data from a data object into a structure created by a 
 * Handlebars template.
 * Specify your JavaScript app using an object rather than a set of functions.
 */

var App = {};

// Data is usually obtained from an online source
App.Recipes =   
    { "recipe" : [
        {
            "name" : "Shakshuka",
            "serves" : 4,
            "meal" : "breakfast",
        },
        {
            "name" : "Black Bean Chili",
            "serves" : 8,
            "meal" : "dinner",
        },
        {
            "name" : "Classic Peanut Butter Cookies",
            "serves" : 4,
            "meal" : "dessert",
        }
    ]
  };

  App.build = function() {
  var source = $("#recipeTemplate").html();
  // Handlebars compiles the template into a callable function
  var template = Handlebars.compile(source);
  
  // call the compiled function with the template data
  var compiledTemplate = template(App.Recipes);
  return compiledTemplate;
};

$("document").ready(function() {
  $("body").append(App.build);
});