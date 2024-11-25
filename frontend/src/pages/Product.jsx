import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProduct(item);
        setImage(item.image[0]);
        console.log(item);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return <div>Product</div>;
};

export default Product;
