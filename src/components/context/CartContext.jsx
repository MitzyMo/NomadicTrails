import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [showCartElements, setShowCartElements] = useState(false);

    const handleAddToCart = () => {
        setQuantity(1);
        setShowCartElements(true);
        setCart([{ id: Date.now(), quantity: 1 }, ...cart]); 
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        } else {
            setShowCartElements(false);
        }
    };

    const addItem = (item, quantityToAdd) => {
        const index = cart.findIndex((product) => product.id === item.id);
        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart[index].quantity += quantityToAdd;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity: quantityToAdd }]);
        }
        setQuantity((prevQuantity) => prevQuantity + quantityToAdd);
        setShowCartElements(true);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        const removedProduct = cart.find((product) => product.id === id);
        setCart(updatedCart);
        setQuantity((prevQuantity) => prevQuantity - removedProduct.quantity);
        if (updatedCart.length === 0) {
            setShowCartElements(false);
        }
    };

    const clear = () => {
        setCart([]);
        setQuantity(0);
        setShowCartElements(false);
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const totalProducts = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };

    const basePrice = () => {
        return cart.reduce((total, product) => total + product.quantity * product.price, 0);
    };

    const grossPrice = () => {
        const taxRate = 0.08; // 8% tax
        return basePrice() * (1 + taxRate);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                totalProducts,
                basePrice,
                grossPrice,
                handleAddToCart,
                handleDecrease,
                handleIncrease,
                showCartElements,
                quantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
