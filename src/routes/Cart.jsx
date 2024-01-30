import { Navigation } from "../components/Navigation";
import useCart from "../hooks/useCart";
import { cartStore } from "../store/cartStore";


const Cart = () => {
    const { removeFromCart } = useCart();

  return (
    <div>
        <Navigation />
      <h2>Cart</h2>
      <div className="cart__grid">
        {cartStore.cart.map((cartItem, index) => {
            const item = cartItem.selectedColor;
            const size = cartItem.size;
            return (
                <div className="product">
                    <div className="product__card">
                        <h3>{item.name}</h3>
                        <img className="product__image" style={{'width': '200px', 'height': '200px'}} src={item.images[0]} alt='' />
                        <p  className="product__description">{item.description}</p>
                        <p className="product__price">Price: {item.price}</p>
                        <p className="product__price">Size: {size}</p>
                        <button onClick={()=> removeFromCart(cartStore.cart[index])}>🗑</button>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Cart;
