
function pizzaStore(pizzaSize, pizzaTopping) {
  this.cost = 0
  this.size = pizzaSize;
  this.topping = pizzaTopping;
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
}

var totalToppings =[]
$(".toppings input[type='checkbox']:checked").each(function() {
  totalToppings.push($(this).val())
})
alert(totalToppings)
