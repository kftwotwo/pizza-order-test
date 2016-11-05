var pizzaSizes = [
  "small",
  "medium",
  "large",
  "xlarge"
]

var pizzaCrusts = [
  "hand-tossed",
  "thin",
  "stuffed",
  "pretzel",
  "deep-dish"
]

var pizzaCheese = [
  "american",
  "swiss",
  "cheddar",
  "smoked-cheddar",
  "provolone"
]

var pizzaSauce = [
  "tomato-paste",
  "garlic-basil-aiello",
  "spicy-tomato",
  "somked-white-cheedar-alfredo"
]

var pizzaMeat = [
  "ground-beef",
  "Smoked-apple-wood-bacon",
  "sausage",
  "peperoni",
  "candian-bacon"
]

var pizzaVeggie = [
  "lettece",
  "oinion",
  "hummus",
  "bell-peppers"
]

function pizzaOptions (options) {
  var optionList = "";
  for (var i = 0; i < options.length; i++) {
    optionList += "<option value='" + options[i] + "'>" + options[i].capitalizeFirstLetter().removeDashes() + "</option><br>";
  }
  return optionList;
}

function pizzaToppings (toppings) {
  var toppingList = "";
  for (var i = 0; i < toppings.length; i++) {
    toppingList += "<label><input type='checkbox' value='" + toppings[i] + "'>" + toppings[i].capitalizeFirstLetter().removeDashes() + "</label><br>"
  }
  return toppingList;
}

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.removeDashes = function () {
  return this.replace(/-|\s/g, " ");
}


$(document).ready(function() {
  $("#size").append(pizzaOptions(pizzaSizes));
  $("#crust").append(pizzaOptions(pizzaCrusts));
  $("#cheese").append(pizzaOptions(pizzaCheese));
  $("#sauce").append(pizzaOptions(pizzaSauce));
  $("#meat").append(pizzaToppings(pizzaMeat))
  $("#veggie").append(pizzaToppings(pizzaVeggie))
})
