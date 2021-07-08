# Simple Shopping Cart with React Hooks

### Demo: https://ume77betty.github.io/Simple-Shopping-Cart-with-React-Hooks/

---
#### --- About Shopping Cart ---
In this project, I only use useState to manage the shopping cart.
<br/>
I put the products into useState, so it's easy to manage.
<br/>
<br/>
In this project, I think the thing that confused me the most is to change the item's quantity.
<br/>
I create a new Obj and push it into cart(Array), so that people can change the item quantity in cart.
```js
const addToCart = (p) => {
    const data = {
      id: p.id,
      name: p.name,
      price: p.price,
      quantity: 1,
      cart: true
    };
    setCart((prev) => {
      return [
        ...prev,
        data
      ]
    })
    products.map((item) => {
      if (item.id === p.id) {
        item.cart = true
      }
    })
  }
```
After that, I can change the item's quantity in cart:
```js
  const increaseItem = (p) => {
    let x = cart.map((item) => {
      if (item.id === p.id) {
        item.quantity += 1
      }
      return item;
    })
    setCart(x)
  }
```
This shopping cart's function is really basic, I just want to practice my data flow and map, but I still add some simple RWD in it.
<br/>
And, that's it!