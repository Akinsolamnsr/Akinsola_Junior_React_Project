

const InitState={
    symbol:"$",
    category:"all",
    CartData:[],
    attribData:{},
    AttribList:[],
    Refresh:true,
    Visibility:"hidden",
    cartList:[],
    cartId:""
  }
  
  
  
  export function rootReducer(state =InitState, action) {
    switch (action.type) {
      case 'SWITCHER':
        return {...state, symbol:action.symbol }
        case 'REFRESH':
        return {...state, Refresh:action.fresh }
        case 'CATEGORY':
        return {...state, category:action.Category }
        case 'ATTRIBUTE':
        return {...state, attribData:action.AttribData}
        case 'ATTRIB_LIST':
          return {...state, attribList:action.List}
        case 'CART':
          const update=action.CartData
          const status=state.CartData.find((x)=>x.name===update.name && x.brand===update.brand)
          if(status){
            return state
          } 
          else{return {...state, CartData:[...state.CartData, update] }}
         
        case 'CART_DEL':
          const  updateDel=action.del
          return {...state, CartData:[...updateDel] }
        case 'VISIBILITY':
            return {...state, Visibility:action.visibility}
        case 'CART_LIST':
              const ListUpdate=action.cartList
              return {...state, cartList:[...state.cartList, ListUpdate] }
        case 'CARTID':
                return {...state, cartId:action.cartId }

      default:
        return state
    }
  }
  
  