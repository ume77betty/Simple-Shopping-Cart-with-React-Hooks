import { useState } from 'react';
import Avocado from '../img/avocado-small.jpg';
import Banana from '../img/banana-small.jpg';
import Chili from '../img/chili-small.jpg';
import Kiwi from '../img/kiwi-small.jpg';
import Lemon from '../img/lemon-small.jpg';
import Orange from '../img/orange-small.jpg';

const Shop = () => {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '酪梨',
      price: 50,
      unit: '顆',
      pic: Avocado,
      quantity: 1,
      cart: false
    },
    {
      id: 2,
      name: '香蕉',
      price: 45,
      unit: '包(3~4根)',
      pic: Banana,
      quantity: 1,
      cart: false
    },
    {
      id: 3,
      name: '辣椒',
      price: 40,
      unit: '包(100g)',
      pic: Chili,
      quantity: 1,
      cart: false
    },
    {
      id: 4,
      name: '奇異果',
      price: 30,
      unit: '顆',
      pic: Kiwi,
      quantity: 1,
      cart: false
    },
    {
      id: 6,
      name: '檸檬',
      price: 40,
      unit: '袋(600g)',
      pic: Lemon,
      quantity: 1,
      cart: false
    },
    {
      id: 5,
      name: '橘子',
      price: 70,
      unit: '袋(600g)',
      pic: Orange,
      quantity: 1,
      cart: false
    }
  ]);

  const list = products.map((p) => {
    return (
      <div key={p.id} className="product-list">
        <img src={p.pic} className="product-list__img"></img>
        <p className="product-list__name">{p.name}</p>
        <p className="product-list__price">${p.price}/{p.unit}</p>
        {p.cart ? <div className="text-btn product-list__in-cart">已加入購物車</div> : <button onClick={() => { addToCart(p) }} className="text-btn product-list__cart-botton">加入購物車</button>}
      </div>
    )
  })

  const addToCart = (p) => {
    const data = {
      id: p.id,
      name: p.name,
      price: p.price,
      quantity: 1,
      cart: true
    };
    console.log(data);
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

  const cartList = cart.map((p) => {
    return (
      <div key={p.name} className="cart">
        <p className="cart__name">{p.name}</p>
        <p className="cart__price">${p.price}</p>
        <div className="cart__botton-area">
          <a href="#" onClick={() => { decreaseItem(p) }} className="btn cart__decrease-botton">-</a>
          <p className="cart__quantity">{p.quantity}</p>
          <a href="#" onClick={() => { increaseItem(p) }} className="btn cart__increase-botton">+</a>
        </div>
        <p className="cart__total">${p.price * p.quantity}</p>
        <a href="#" onClick={() => { deleteItem(p) }} className="cart__delete-botton">刪除</a>
      </div>
    )
  })

  const decreaseItem = (p) => {
    let x = cart.map((item) => {
      if (item.id === p.id && item.quantity > 1) {
        item.quantity -= 1
      }
      return item;
    })
    setCart(x)
  }

  const increaseItem = (p) => {
    let x = cart.map((item) => {
      if (item.id === p.id) {
        item.quantity += 1
      }
      return item;
    })
    setCart(x)
  }

  const deleteItem = (p) => {
    let tempCart = cart.filter((i) => i.id !== p.id)
    products.map((item) => {
      if (item.id === p.id) {
        item.cart = false
      }
    })
    setCart(tempCart);
  }

  const totalAmount = () => {
    let total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        let price = cart[i].price * cart[i].quantity;
        total += price;
      }
      return `總計　$ ${total}`;
    } else {
      return '購物車還沒有東西喔！'
    }

  }


  return (
    <div className="shop">
      <div className="shop-list">
        {list}
      </div>
      <div className="cart-list">
        <h2 className="cart__header">Cart</h2>
        <div className="cart-list__category">
          <div>商品名稱</div>
          <div>單價</div>
          <div>數量</div>
          <div>總價</div>
          <div>刪除品項</div>
        </div>
        {cartList}
      </div>
      <div className="cart-list__total-amount">{totalAmount()}</div>
    </div>
  )
}

export default Shop;