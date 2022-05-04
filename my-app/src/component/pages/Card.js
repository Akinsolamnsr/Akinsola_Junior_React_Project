import React from 'react';
import { connect } from 'react-redux';
import { Box,InnBox, InnerBox, StyledLink,AttribFlex2,AttribButton3 } from '../moreComponent/styledComponent';
import { Attribute, cart,cartID,cartList,refresh } from '../redux/action';


class Card extends React.Component {
 
  constructor(props) {
    super(props);
    this.state={Arr1:{}}
    this.AddCart = this.AddCart.bind(this)
  
  } 
  
  LoadData(valueId){
    const data={}
    const cat=valueId.sort((a,b)=>a.id.localeCompare(b.id))
      const CatObj=cat.map((x,i)=>{
        const value=x.items[0].value
        return {[x.id]:value}
      })  
   const NewOBj= CatObj.reduce((obj, item) => ({...obj,...item}) ,{});
     this.props.Attribute(NewOBj)


      data.brand=this.props.brand
      data.Img=this.props.gallery 
      data.name=this.props.name
      data.attribute=NewOBj
      data.attributes=valueId
      data.price = this.props.prices
      this.props.cartList(data)
  }

 componentDidMount(){
    this.LoadData(this.props.attributes)
 }


 AddCart(e,name,valueId){
   this.props.cartID(name)
   this.props.Refresh(true)
   e.preventDefault()
    const data={}
    const cat=valueId.sort((a,b)=>a.id.localeCompare(b.id))
      const CatObj=cat.map((x,i)=>{
        const value=x.items[0].value
        return {[x.id]:value}
      })  
   const NewOBj= CatObj.reduce((obj, item) => ({...obj,...item}) ,{});
     this.props.Attribute(NewOBj)


      data.brand=this.props.brand
      data.Img=this.props.gallery 
      data.name=this.props.name
      data.attribute=NewOBj
      data.attributes=valueId
      data.price = this.props.prices
      this.props.Cart(data)
  }
      
    render() {
      const price=this.props.prices.filter((x)=>x.currency.symbol===this.props.Symbol)
      const val=`/attr/${this.props.id}`
                 
      return (    
             
                      <StyledLink to={val} key="#0%" >
                        <InnerBox>
                          <InnBox><img src={this.props.gallery[0]} alt={this.props.id} width="100%" height="100%" /></InnBox>
                          <button className={this.props.status?"cart2":"cart"} onClick={e=>this.AddCart(e,this.props.name,this.props.attributes)} id={this.props.name} >
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve" fill='white'>
<g><path d="M872.3,620.6c-15.8,44.9-57.9,75-104.9,75H325.7c-53,0-98.9-38.3-109.2-91l-74.9-384.1l-24.8-115.2H33.9C20.7,105.3,10,94.5,10,81.2C10,67.8,20.7,57,33.9,57H136c3.8,0.6,5.3,0.9,6.9,1.4c1.4,0.5,2.7,0.9,4,1.7c1.4,0.7,2.6,1.6,3.8,2.6c1.2,1,2.3,2,3.3,3.2c0.9,1.2,1.7,2.4,2.4,3.7c0.8,1.4,1.5,2.9,2,4.5c0.2,0.7,0.7,1.3,0.9,2l24.8,115.3h726.9c25.6,0,49.7,12.6,64.5,33.8c14.8,21.2,18.5,48.5,9.9,73L872.3,620.6z M936.6,253c-5.9-8.5-15.2-13.4-25.5-13.4H194l69.3,355.6c5.9,30.1,32.1,52,62.4,52h441.7c26.9,0,51-17.2,60-42.9l113.1-322.5C944,272.1,942.6,261.5,936.6,253L936.6,253L936.6,253z M308.4,748.1c53.1,0,96.2,43.7,96.2,97.4c0,53.8-43.2,97.5-96.2,97.5c-53,0-96.2-43.7-96.2-97.5C212.2,791.8,255.3,748.1,308.4,748.1L308.4,748.1L308.4,748.1z M308.4,894.7c26.7,0,48.5-22,48.5-49.1c0-27.1-21.8-49.1-48.5-49.1c-26.7,0-48.4,22-48.4,49.1C259.9,872.6,281.6,894.7,308.4,894.7L308.4,894.7L308.4,894.7z M733.5,748.1c53.1,0,96.2,43.7,96.2,97.4c0,53.8-43.1,97.5-96.2,97.5c-53,0-96.2-43.7-96.2-97.5C637.4,791.8,680.5,748.1,733.5,748.1L733.5,748.1L733.5,748.1z M733.5,894.7c26.8,0,48.5-22,48.5-49.1c0-27.1-21.8-49.1-48.5-49.1s-48.5,22-48.5,49.1C685.1,872.6,706.8,894.7,733.5,894.7L733.5,894.7L733.5,894.7z"/></g>
</svg>
                          </button>
                          <div>{this.props.id}</div>
                          <div><span>{price[0].currency.symbol}</span><span>{price[0].amount}</span></div>
                          <div className="AtrribPlP">{this.props.attributes.map((List,i)=>{
                                   let Items= List
                                    return(
                                      <div key={List.name}  >
                                        <div className='AttribId3'> {List.id.toUpperCase()}:</div>
                                        <AttribFlex2 >
                                          {List.items.map((x)=>{
                                          const status=List.type
                                                 
                                            return(
                                               <>
                                               {status==="swatch"? 
                                                 <div key={x.id} style={{marginRight:"3%"}} >
                                                 <button swatch style={{background:`${x.value}`,color:"transparent"}} id={List.id} className={List.items[0].value===x.value? "swatch3":"AttribButton3"}  >{x.value}</button>
                                               </div>
 
                                               :
                                               <div key={x.id} style={{marginRight:"3%"}} >
                                               <AttribButton3  id={List.id} className={List.items[0].value===x.value? "select":null}  >{x.value}</AttribButton3>
                                             </div>

                                               }
                                               
                                               </>
                                           )
                                          })}    
                                           
                           
                                          </AttribFlex2>
                                          
                                      </div>
                                    )
                              })}
                              
                              </div>
                          </InnerBox>
                          
                        </StyledLink>
                  )
  } 
} 

const mapStateToProps = (state) => {
  return {
   Symbol:state.symbol,
   attributeData:state.attribData,
  }
}
  

const mapDispatchToProps = (dispatch) => {
  return {
      Attribute:(select) => dispatch(Attribute(select)),
      Cart:(select) => dispatch(cart(select)),
      Refresh:(select) => dispatch(refresh(select)),
      cartList:(select) => dispatch(cartList(select)),
      cartID:(select) => dispatch(cartID(select)),
  }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Card);