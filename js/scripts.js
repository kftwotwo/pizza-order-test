// var bigSize = ["Large-18", "X-Large-20"];
// var normal = ["Small", "Medium"]
// var crust = ["Stuffed cheese", "Pretzel"];
// var sauce = ["Somked White Cheedar Alfredo","Garlic Basil Aiello"]
// function Pizza(pSize, crust, sauce, cheese, meat, veggie, price) {
//   this.pSize = pSize;
//   this.crust = crust;
//   this.sauce = sauce;
//   this.cheese = cheese;
//   this.meat = meat;
//   this.veggie =veggie;
//   this.price = 0;
// }
// Pizza.prototype.addToPrice = function () {
//   if(bigSize.includes(this.pSize)) {
//     this.price += 25.39;
//   }
//   if(normal.includes(this.pSize)) {
//     this.price += 20.54;
//   }
//   if(sauce.includes(this.sauce)) {
//     this.price += 2.55;
//   }
//   if(crust.includes(this.crust)) {
//     this.price += 2.01;
//   }
// };
// $(document).ready(function() {
//   $("#inputForm").submit(function(event) {
//     event.preventDefault();
//     var pSize = $("#size").val();
//     var crust = $("#crust").val();
//     var sauce = $("#sauce").val();
//     var cheese = $("#cheese").val();
//     var meat = $("#meat").val();
//     var veggie = $("#veggie").val();
//     var price = 0;
//     var newPizza = new Pizza(pSize, crust, sauce, cheese, meat, veggie, price);
//     newPizza.addToPrice();
//
//     $("#selectedSize").append(newPizza.pSize);
//     $("#selectedCrust").append(newPizza.crust);
//     $("#selectedSauce").append(newPizza.sauce);
//     $("#selectedCheese").append(newPizza.cheese);
//     $("#selectedMeat").append(newPizza.meat);
//     $("#selectedveggie").append(newPizza.veggie);
//     $("#selectedPrice").append(newPizza.price.toFixed(2));
//     $("#inputForm").hide();
//     $("#recipt").show();
//   });
// });
