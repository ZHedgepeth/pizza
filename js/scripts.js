
function pizzaStore(pizzaSize, pizzaTopping) {
  this.cost = 0
  this.size = pizzaSize;
  this.topping = [];
}

pizzaStore.prototype.finalPrice = function() {
  if (this.size === 'large') {
    this.cost += 16.50 + (this.topping.length * 1)
  }
  else if (this.size === 'medium') {
    this.cost += 14.50 + (this.topping.length * 1)
  }
  else if (this.size === 'small') {
    this.cost += 12.50 + (this.topping.length * 1)
  }
  else if (this.size != 'large', 'medium', 'small') {
    alert("Enter a size if you want to eat!");
  }
}
$(document).ready(function() {
  $('#pizza').submit(function(event) {
  event.preventDefault();
  var toppingsCheckArray = [];
    var sizeCheck

  var newPizza = new pizzaStore(toppingCheckArray, sizeCheck);

  var sizeCheck = $("input:checkbox[name='size']:checked").each(function() {
    newPizza.size.push($(this).val());
  })

  var toppingsCheckArray = [];
   $("input:checkbox[name='topping']:checked").each(function() {
    newPizza.topping.push($(this).val());
  })


  $("").text('stringtest');

  });
});
