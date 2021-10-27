import{
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../constants';

const cartItems = (state = [], action) =>{
    switch(action.type){
        case ADD_TO_CART:
            return [...state, action.payload]// UNIR LA CART
        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem != action.payload) //  RETORNA TODOS MENOS LA CART
        case CLEAR_CART:
            return state = []// BORRA EL ARRAY
    }

    return state;
}

export default cartItems;