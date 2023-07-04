import { useEffect, useState } from "react";
import { createContext } from "react";
import debounce from "lodash.debounce";

export const Context = createContext();
export const ContextProvider = (props) => {
  const localStorageItems = JSON.parse(localStorage.getItem("cartItems"));
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState(localStorageItems || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

  // SORT
  const sortProduct = (sortBy) => {
    let sortedProduct = [...product];

    if (sortBy === "asc") {
      sortedProduct.sort((a, b) => a.cost - b.cost);
    } else if (sortBy === "desc") {
      sortedProduct.sort((a, b) => b.cost - a.cost);
    }

    setProduct(sortedProduct);
  };

  // LOGIN
  const [isLogin, setIsLogin] = useState(false);

  //SEARCH
  const [keyword, setKeyword] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);

  const handleClickSearch = () => {
    const result = product.filter((product) => {
      return product.name.toLowerCase().includes(keyword);
    });

    setSearchProduct(result);
    setKeyword("");
  };

  // MAINPAGE
  const [listProduct, setListProduct] = useState([]);
  const [page, setPage] = useState(1);

  const handleSelectPage = (pg) => {
    setPage(pg);
  };
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch(
      `https://6491ce492f2c7ee6c2c8efa9.mockapi.io/api/v1/blogs?page=${page}&limit=8`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListProduct(data);
        setLoad(false);
      });
  }, [page]);

  const contextValue = {
    product,
    setProduct,
    cartItems,
    setCartItems,
    onAdd,
    onRemove,
    handleClickSearch,
    onchange,
    isLogin,
    setIsLogin,
    keyword,
    setKeyword,
    searchProduct,
    handleSelectPage,
    listProduct,
    load,
    page,
    sortProduct,
  };
  // console.log(cartItems);
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
