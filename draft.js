// function viewCart()
  // var cart = [{ itemName: 'bananas', itemPrice: 17 },
  //             { itemName: 'pancake batter', itemPrice: 5 },
  //             { itemName: 'eggs', itemPrice: 49 }
  //            ];
  // var cartString = [];
  // cart.forEach(function(element, index, array) {
  //       cartString.push(`${element.itemName} at $${element.itemPrice}`);
  //       console.log(`length ${array.length} index ${index}`);
  //       if (array.length == index + 1 && array.length != 1) {
  //         cartString.splice(cartString.length - 1, 0, 'and ')
  //         }
  //       if (array.length == index + 1) {
  //         cartString.push('.');
  //         cartString.unshift(`In your cart, you have `);
  //       }
  //   	  if (array.length != index + 1) {
  //         cartString.push(', ');
  //       }
  //     });
  //
  // console.log(cartString.join(''));

// function removeFromCart
var item = 'watermelon'

var cart = [{ itemName: 'bananas', itemPrice: 17 },
            // { itemName: 'watermelon', itemPrice: 5 },
            { itemName: 'eggs', itemPrice: 49 }
           ];


var newArray = [];
cart.forEach(function(element) {
               if (element.itemName == item) {
                 newArray.push(true)
               } else {
                 newArray.push(false)
               }
             });
console.log(newArray.includes(true));
if (newArray.includes(true)) {
  
} else {
  console.log(`That item is not in your cart.`);
  return `That item is not in your cart.`
}
