export const Switcher= (symbol) => {
    return {
      type: 'SWITCHER',
      symbol
    }
  }


  export const categories= (Category) => {
    return {
      type: 'CATEGORY',
      Category
    }
  }


  export const Attribute= (AttribData) => {
    return {
      type: 'ATTRIBUTE',
      AttribData
    }
  }

  export const cart= (CartData) => {
    return {
      type: 'CART',
      CartData
    }
  }

  export const AttributeList= (List) => {
    return {
      type: 'ATTRIB_LIST',
      List
    }
  }


  export const CartDel= (del) => {
    return {
      type: 'CART_DEL',
      del
    }
  }      


  export const refresh= (fresh) => {
    return {
      type: 'REFRESH',
      fresh
    }
  }


  export const Visbility= (visibility) => {
    return {
      type: 'VISIBILITY',
      visibility
    }
  }


  export const cartList= (cartList) => {
    return {
      type: 'CART_LIST',
      cartList
    }
  }

  export const cartID= (cartId) => {
    return {
      type: 'CARTID',
      cartId
    }
  }