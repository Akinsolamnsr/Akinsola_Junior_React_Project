import gql from 'graphql-tag'


export const catFilter=gql `
query Quest($ID:String!){
  category(input:{title:$ID}){
    name
    products{
      id
      category
      name
      brand
      inStock
      gallery
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      
    }
  }
}
    
`


export const CatCurrency=gql `
{
    categories{
        name  
        }
        
        currencies{
          label
          symbol
        }
  }  

`

export const attribute=gql `
query Quest($Attrib:String!){
  product(id:$Attrib){
    id
    name
    inStock
    description
    gallery
    brand
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
      
    }
  }
}

`