export const cartReducer = (state, action) =>{
    const {type, payload } = action;

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
               cartList: payload.product
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
               cartList: payload.product
            };
       
         case 'UPDATE_CART':
                return {
                    ...state,
                    total: payload.total
                };

        default:
            return state;
    }
}

