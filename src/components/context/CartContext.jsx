import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === id);
            cart[pos].quantity += quantity; 
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }


    const removeItem = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updatedCart);
        setTotalQuantity(totalQuantity - 1); // Decrement total quantity
    };

    const clear = () => {
        setCart([]);
        setTotalQuantity(0); // Clear total quantity
    };

    const CantTotalProductos = () => {
        // implement logic for total quantity calculation if needed
    };

    const SumaTotalProductos = () => {
        // implement logic for sum of total products if needed
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                CantTotalProductos,
                SumaTotalProductos,
                totalQuantity, // Pass totalQuantity to the context value
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
