import './Product.css'
import useProduct from "../hooks/useProduct";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import { Navigation } from '../components/Navigation';


const Product = () => {

    const { product, loading, error, selectedColor, activeImage, selectedSize, handleColorChange, handleChangeImageNext, handleChangeImagePrev, handleSizeChange } = useProduct();

    const { cartState, addToCart, getCartSize } = useCart();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
                <Navigation />
        <div className='products-container'>

            <div className="product">
            <h1>{product.name}</h1>
            <div>
                {product.colors.map((color) => (
                <button key={color.id} onClick={() => handleColorChange(color)}>
                    {color.name}
                </button>
                ))}
            </div>
            {selectedColor && (
                <div className="product__card">
                    <button onClick={() => handleChangeImagePrev(selectedColor.images)}>{'<-'}</button>
                    <button onClick={() => handleChangeImageNext(selectedColor.images)}>{'->'}</button>

                <img className="product__image" style={{'width': '200px', 'height': '200px'}} src={selectedColor.images[activeImage]} alt={product.name} />
                <p  className="product__description">{selectedColor.description}</p>
                <p className="product__price">Price: {selectedColor.price}</p>
                <div>
                    <label htmlFor="size">Size:</label>
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((size) => (
                        <button
                        key={size}
                        onClick={() => handleSizeChange(size)}
                        disabled={!selectedColor.sizes.includes(size)}
                        className={selectedSize === size ? 'selected-size' : ''}
                        >
                        {size}
                        </button>
                    ))}
                    </div>
                <button disabled={!selectedColor.sizes.length} onClick={() => addToCart({selectedColor, size: selectedSize})} className="product__cart">🛒</button>
                </div>
            )}
            </div>
        </div>
    </div>
  );
};

export default Product;