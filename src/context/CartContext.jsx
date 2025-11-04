import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { useEffect ,useState } from "react";


const initialState = {
    cartList: [],
    total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        const updatedCartList = [...state.cartList, product];  
        updateTotal(updatedCartList);
        dispatch({
            type: 'ADD_TO_CART',
            payload: { product: updatedCartList },
        });
    };

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter((current) => current.id !== product.id);
        updateTotal(updatedCartList);
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { product: updatedCartList },
        });
    };

    const updateTotal = (product , itemcount) => {
        let total = 0; 
        product.forEach((product) => {
          total += product.price;
        });
        dispatch({
            type: 'UPDATE_CART',
            payload: { total },
        });
    }

    

    const value = {
        total: state.total,
        ProductTotal: state.ProductTotal,
        itemcount: state.itemcount,
        cartList: state.cartList,
        addToCart,
        removeFromCart,
<<<<<<< HEAD
        updateTotal,
        cartCount: state.cartList.length,
    };

    

=======
        updateTotal
    };

>>>>>>> fea1d54f4cfc0bcd278831b40495d5dc42e190b8
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
};
