import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";

const useProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setProduct(data);
      })
      .then(()=> {
        if(product) {
            setSelectedColor(product.colors[0])
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(()=> {
        setLoading(false);
      })
  }, [id, product]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setActiveImage(0)
    setSelectedSize(null)
  };

  const handleChangeImageNext = (images) => {
    activeImage < images.length - 1 && setActiveImage(activeImage + 1)
  }

  const handleChangeImagePrev = () => {
    activeImage > 0 && setActiveImage(activeImage - 1)
  }

  return {
    product,
    loading,
    error,
    selectedColor,
    activeImage,
    selectedSize,
    handleColorChange,
    handleChangeImageNext,
    handleChangeImagePrev,
    handleSizeChange
  };
};

export default useProduct;