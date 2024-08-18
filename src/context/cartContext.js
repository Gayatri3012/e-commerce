import { createContext, useReducer, useEffect, useMemo } from "react";
import PRODUCTS from '@/products-data.json';

export const CartContext = createContext({
    items:[],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
})
  
 const cartReducer = async (state, action) => {
    const { type, payload } = action;

    if(type === 'ADD_ITEM'){
      console.log(state.items)
      const updatedItems = [...state.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem._id === payload.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if(existingCartItem){
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        };
        updatedItems[existingCartItemIndex] = updatedItem;


        return {
          ...state,
          items: updatedItems,
        }
      } else {
        const product = PRODUCTS.find((product) => product._id === payload.id);
        updatedItems.push({
          ...product,
          quantity: 1
        })
        const response = await fetch(`/api/cart/${userId}`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedItems),
        }) 
        return {
          ...state,
          items: updatedItems,
        }
      }
    
    }

    if(type === 'UPDATE_ITEM'){
      console.log('updating')
    }

    if(type === 'SET_CART'){
      return {
        ...state, 
        items: payload
      }
    }
    return state;
};
  

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  let userId;
  useEffect(() => {
    userId= sessionStorage.getItem('userId');  
    async function getCart() {
      try{
        fetch(`/api/cart/${userId}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(res => {
          return res.json();
        })
        .then(result => {
          console.log(result.items)
          dispatch({type: 'SET_CART', payload: result.items})
        })
      }catch(err){
        console.error('Error fetching cart : ',err)
      }
    }
    if(userId){
      getCart();
    }
  },[userId])

  const handleAddToCart = async (id, userId) => {
    console.log(userId);
    const response = await fetch(`/api/cart/${userId}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ productId: id, quantity: 1 }]),
    })
    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }
    console.log()

    console.log('adding to cart');
      dispatch({
          type: 'ADD_ITEM',
          payload: {id, userId} ,
      })

  };

  const handleUpdateCartItem = (id) => {
      dispatch({
          type: "UPDATE_ITEM",
          payload: {
            items: updatedCart,
          },
      });
  };

  const contextValue = useMemo(() => ({
    items: state.items,
    addItemToCart: handleAddToCart,
    updatedItem: handleUpdateCartItem,
}), [state.items]);

  return <CartContext.Provider value={contextValue}>
    {children}
    </CartContext.Provider>;
};