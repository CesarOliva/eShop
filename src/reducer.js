//Define actions to make the changes to the state

export const initialState = {
    cart: []
}

export const getCartTotal = (cart) =>{
    return (cart?.reduce((amount, item) => item.price + amount, 0));
}

//Selector
const reducer = (state, action) => {
    switch(action.type){
        case "addToCart":
            return{
                ...state,
                cart: [...state.cart, action.item]
            }

        case "removeFromCart":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            let newCart = [...state.cart];

            if(index >=0){
                newCart.splice(index, 1)
            }else{
                console.warn(`Cant remove product(id: ${action.id})`);
            }

            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
}

export default reducer;