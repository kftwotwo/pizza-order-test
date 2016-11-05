var pizzaSizes = {
  "small": 10,
  "medium": 12,
  "large": 14,
  "xlarge": 16
}

var pizzaCrusts = {
  "hand-tossed": 0,
  "thin": 0,
  "stuffed": 2,
  "pretzel": 2,
  "deep-dish": 1
}

var pizzaCheese = {
  "american": 0,
  "swiss": 0,
  "cheddar": 0,
  "smoked-cheddar": .5,
  "provolone": 0
}

var pizzaSauce = {
  "tomato-paste": 0,
  "garlic-basil-aiello": 1,
  "spicy-tomato": .6,
  "somked-white-cheedar-alfredo": 1
}

var pizzaMeats = {
  "ground-beef": .2,
  "Smoked-apple-wood-bacon": .2,
  "sausage": .2,
  "peperoni": .2,
  "candian-bacon": .2
}

var pizzaVeggie = {
  "lettece": .2,
  "oinion": .3,
  "hummus": .2,
  "bell-peppers": .3
}

function pizzaOptions (options) {
  var optionList = "";
  for (var key in options) {
    optionList += "<option value='" + key + "'>" + key.capitalizeFirstLetter().removeDashes() + "</option><br>";
  }
  return optionList;
}

function pizzaToppings (toppings) {
  var toppingList = "";
  for (var key in toppings) {
    toppingList += "<label><input type='checkbox' name='options[]' value='" + key + "'>" + key.capitalizeFirstLetter().removeDashes() + "</label><br>"
  }
  return toppingList;
}

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.removeDashes = function () {
  return this.replace(/-|\s/g, " ");
}

class Pizza {
  constructor(pSize, crust, sauce, cheese, toppings) {
    this.pSize = pSize;
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
  }

  toppingsTotal () {
    var toppingsPrice = 0;
    for (var i = 0; i < this.toppings.length; i++) {
      if (pizzaMeats[this.toppings[i]] != undefined) {
        toppingsPrice += pizzaMeats[this.toppings[i]];
      } else if (pizzaVeggie[this.toppings[i]] != undefined) {
        toppingsPrice += pizzaVeggie[this.toppings[i]];
      }
      pizzaToppings[this.toppings[i]]
    }
    return toppingsPrice;
  }
}

Pizza.prototype.price = function () {
  return pizzaSizes[this.pSize] + pizzaCrusts[this.crust] + pizzaSauce[this.sauce]+ pizzaCheese[this.cheese] + this.toppingsTotal();
}
var order = [];
$(document).ready(function() {
  $("#size").append(pizzaOptions(pizzaSizes));
  $("#crust").append(pizzaOptions(pizzaCrusts));
  $("#cheese").append(pizzaOptions(pizzaCheese));
  $("#sauce").append(pizzaOptions(pizzaSauce));
  $("#meat").append(pizzaToppings(pizzaMeats))
  $("#veggie").append(pizzaToppings(pizzaVeggie))

  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var pSize = $("#size").val();
    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var cheese = $("#cheese").val();
    var toppings = [];
    $("input[name='options[]']:checked").each(function () {
          toppings.push($(this).val());
      });
    var newPizza = new Pizza (pSize, crust, sauce, cheese, toppings);
    order.push(new Pizza)
    $("#selectedSize").append(newPizza.pSize);
    $("#selectedCrust").append(newPizza.crust);
    $("#selectedSauce").append(newPizza.sauce);
    $("#selectedCheese").append(newPizza.cheese);
    $("#selectedToppings").append(newPizza.toppings.join(", "));
    $("#selectedPrice").append(newPizza.price());
    $("#recipt").show();
  });
})
