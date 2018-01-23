var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
    var itemPrice = Math.floor(Math.random()*100)
  var newItem = {}
  newItem[itemName]=itemPrice
cart.push(newItem)
console.log (`${itemName} has been added to your cart.`)
return cart
}
function viewCart() {
  let i = 0
  var printedArr =[]
  if(cart.length===0){
    console.log(`Your shopping cart is empty.`)
  }
 else if(cart.length< 3){
    for (let i= 0; i<cart.length; i++){
   printedArr.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
  console.log (`In your cart, you have ${printedArr.join(" and ")}.`)
  }else{
    for (let i= 0; i<cart.length-1; i++){
      printedArr.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
    console.log(`In your cart, you have ${printedArr.join(", ")}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`)
  }
}

function total(){
 var sum = 0
for(let i=0; i<cart.length; i++){
  sum += parseInt(Object.values(cart[i]))
}
  return sum
}

function removeFromCart(item) {
   var flag = false;
 for (var i = 0; i < cart.length; i++) {
    if (cart[i][item]) {
      flag = true;
      cart.splice(i, 1);
   }
  }
  if (flag === true) {
    return cart;
    } else {
     return 'That item is not in your cart.';
  }
 }


function placeOrder(cardNumber) {
  if (cardNumber===undefined){
    console.log (`Sorry, we don't have a credit card on file for you.`)
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
  // write your code here
}
