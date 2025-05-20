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
        default:
            return state;
    }
}

export default reducer;