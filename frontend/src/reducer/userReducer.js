export const userReducer = (state,action)=>{
    switch (action.type) {
        case "INITIALIZE_LISTS":
            return {
                ...state,
                cartList: action.payload.cartList || [],
                paymentList: action.payload.paymentList || [],
                addressList : action.payload.addressList || [],
                orderList:action.payload.orderList || [],
            }

        case "ADD_TO_CART":{

            return {
                ...state,
                cartList:[...state.cartList,action.payload.savedItem]
            }
        }
        case "REMOVE_FROM_CART":{
            return {
                ...state,
                cartList:state.cartList.filter((p)=>p._id !== action.payload._id)
            }
        }
        case "INCREMENT_CART":{
            return{
                ...state,
                cartList:state.cartList.map((p)=> {
                    if(p._id ===action.payload._id){
                       return {
                        ...p,
                        quantity:p.quantity + 1
                       }
                    }
                    return p;
                })
            }
        }
        case "DECREMENT_CART":{
            return{
                ...state,
                cartList:state.cartList.map((p)=> {
                    if(p._id ===action.payload._id){
                       return {
                        ...p,
                        quantity:p.quantity - 1
                       }
                    }
                    return p;
                })
            }
        }
        case "ADD_ADDRESS": {
            return {
                ...state,
                addressList:[...state.addressList,action.payload.newAddress]
            }
        }
        case "UPDATE_ADDRESS":{
            return{
                ...state,
                addressList:state.addressList.map((a)=>{
                    if(a._id===action.payload._id){
                        return{
                        ...action.payload
                        }
                    }
                    return a;
                })
            }
        }
        case "DELETE_ADDRESS":{
            return{
               ...state,
                addressList:state.addressList.filter((address)=>address._id!==action.payload.addressId)
            }
        }
        case "ADD_TO_ORDER":{
            return{
                ...state,
                orderList:[...state.orderList,action.payload.savedItem],
                cartList:[]
            }
        }
        case "FLUSH_DATA":
            return {
              cartList: [],
              wishList: [],
              paymentList: [],
              addressList: [],
              orderList: [],
            };
        default:
            break;
    }
}