
function pizzaStore(size) {
  this.cost = 0;
  this.size = size;
  this.topping = [];
}

pizzaStore.prototype.finalPrice = function() {
  if (this.size === 'large') {
    this.cost += 16.50 + (this.topping.length)
  }
  else if (this.size === 'medium') {
    this.cost += 14.50 + (this.topping.length)
  }
  else if (this.size === 'small') {
    this.cost += 12.50 + (this.topping.length)
  }
  else {
    alert("Enter a size if you want to eat!");
  }
}
$(document).ready(function() {
  $('form#pizza').submit(function(event) {
  event.preventDefault();

  var sizeCheck = $("input:checkbox[name='size']:checked").val();
  var newPizza = new pizzaStore(sizeCheck);

  var toppingsCheckArray = [];
   $("input:checkbox[name='topping']:checked").each(function() {
    newPizza.topping.push($(this).val());
  })
  newPizza.finalPrice();
  $("#order").text ("TOTAL:" + newPizza.cost)

  });
});
