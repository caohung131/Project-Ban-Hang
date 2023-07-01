import { useEffect, useState } from "react";
import { createContext } from "react";

export const Context = createContext();
export const ContextProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`https://6491ce492f2c7ee6c2c8efa9.mockapi.io/api/v1/blogs`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, []);

  // ADD TO CART

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // SEARCH
  const [value, setValue] = useState("");
  const onchange = (e) => {
    setValue(e.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(searchTerm);
  };

  const contextValue = {
    product,
    setProduct,
    cartItems,
    setCartItems,
    onAdd,
    onRemove,
    value,
    setValue,
    onchange,
    onSearch,
  };
  // console.log(cartItems);
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
