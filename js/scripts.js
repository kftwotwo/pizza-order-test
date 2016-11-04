var bigSize = ["Large", "X-Large"];
var veterans  = ["Veterans"];
function Pizza(pSize, sides, drinks, price) {
  this.pSize = pSize;
  this.sides = sides;
  this.drinks = drinks;
  this.price = 20;
}
Pizza.prototype.addToPrice = function () {
  if(newReleases.includes(this.pSize)) {
    this.price += 6;
  }
  if(senior.includes(this.sides)) {
    this.price -= 2;
  }
  if(drinks.includes(this.drinks)) {
    this.price +=2;
  }
};
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var pSize = $("#").val();
    var Sides = $("#").val();
    var drinks = $("#").val();
    var price = 20;
    var newPizza = new Pizza(pSize, sides, drinks, price);
    newPizza.addToPrice();

    $("#").append(newPizza.pSize);
    $("#").append(newPizza.sides);
    $("#").append(newPizza.drinks);
    $("#").append(newPizza.price);

    $("#inputForm").hide();
    $("#").show();

  });
});
