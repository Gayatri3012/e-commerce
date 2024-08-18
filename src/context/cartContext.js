import { createContext, useReducer, useEffect, useMemo } from "react";
import { PRODUCTS } from "@/data";


export const CartContext = createContext({
    items:[],
    addItemToCart: () => {},
    updateCartItem: () => {},
})
  
 const cartReducer = (state, action) => {
    const { type, payload } = action;

    if(type === 'ADD_ITEM'){
      if(state.items === undefined) {
        console.log('state is undefined')
        return;
      }
      const updatedItems = [...state.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem._id === payload.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if(existingCartItem){
        console.log('item exists')
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        console.log(updatedItems)
        return {
          ...state,
          items: updatedItems,
        }
      } else {
        console.log('item does not exists')
        const product = PRODUCTS.find((product) => product._id === payload.id);
        updatedItems.push({
          ...product,
          quantity: 1
        })
       
        return {
          ...state,
          items: updatedItems,
        }
      }
    
    }

    
  if(action.type === 'UPDATE_ITEM'){
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item._id === action.payload.id
    );
 
    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };
    
    updatedItem.quantity += action.payload.amount;
    
    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
    
    return {
      ...state,
      items: updatedItems,
    };
  }

    if(type === 'SET_CART'){
      return {
        ...state, 
        items: payload || []
      }
    }
    return state;
};
  

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: []});

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        dispatch({ type: 'SET_CART', payload: JSON.parse(storedCart) });
    }
  }, []);
  useEffect(() => {
    if (Array.isArray(state.items) && state.items.length > 0) {
        localStorage.setItem('cart', JSON.stringify(state.items));
    } else {
        localStorage.removeItem('cart'); // Remove cart from localStorage if items array is empty
    }
  }, [state.items]);
  

  const handleAddToCart = async (id, userId) => {

    console.log('adding to cart');
      dispatch({
          type: 'ADD_ITEM',
          payload: {id, userId} ,
      })
      console.log(state.items);
  };

  const handleUpdateCartItem = (id, amount) => {
      dispatch({
          type: "UPDATE_ITEM",
          payload: {
            id,
            amount
          },
      });
  };

  const contextValue = useMemo(() => ({
    items: state.items,
    addItemToCart: handleAddToCart,
    updateCartItem: handleUpdateCartItem,
}), [state.items]);

  return <CartContext.Provider value={contextValue}>
    {children}
    </CartContext.Provider>;
};