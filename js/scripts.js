var bigSize = ["Large", "X-Large"];
var crust = ["Stuffed cheese", "Pretzel"];
function Pizza(pSize, crust, topping, top1, top2, price) {
  this.pSize = pSize;
  this.crust = crust;
  this.topping = topping;
  this.top1 = top1;
  this.top2 =top2;
  this.price = 20;
}
Pizza.prototype.addToPrice = function () {
  if(bigSize.includes(this.pSize)) {
    this.price += 6;
  }
  if(crust.includes(this.crust)) {
    this.price += 2;
  }
};
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var pSize = $("#size").val();
    var crust = $("#crust").val();
    var top = $("#top").val();
    var top1 = $("#top1").val();
    var top2 = $("#top2").val();
    var price = 20;
    var newPizza = new Pizza(pSize, crust, top, top1, top2, price);
    newPizza.addToPrice();

    $("#selectedSize").append(newPizza.pSize);
    $("#selectedCrust").append(newPizza.crust);
    $("#selectedTop").append(newPizza.topping);
    $("#selectedTop1").append(newPizza.top1);
    $("#selectedTop2").append(newPizza.top2);
    $("#selectedPrice").append(newPizza.price);

    $("#inputForm").hide();
    $("#recipt").show();

  });
});
