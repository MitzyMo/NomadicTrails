import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addItem = (item, counter) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex((product) => product.id === item.id); // Corrected here
            cart[pos].counter += counter;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, counter: counter }]);
        }
    };
    

    const removeItem = (id) => {
        const items = cart.filter((product) => product.id != id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const CantTotalProductos = () => {
        return cart.reduce((acum, product) => (acum += product.counter), 0);
    };

    const SumaTotalProductos = () => {
        return cart.reduce(
        (acum, product) => (acum += product.counter * product.price),
        0
        );
    };

    return (
        <CartContext.Provider
        value={{
            cart,
            addItem,
            removeItem,
            clear,
            CantTotalProductos,
            SumaTotalProductos
        }}
        >
        {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;