import React from 'react';
import { connect } from 'react-redux';
import { Box,InnBox, InnerBox, StyledLink2,AttribFlex2,AttribButton3 } from '../moreComponent/styledComponent';
import { Attribute, cart,refresh } from '../redux/action';


class Card2 extends React.Component {
 
  constructor(props) {
    super(props);
    this.state={Arr1:{}}
    this.AddCart = this.AddCart.bind(this)
  
  } 
  

 componentDidMount(){

 }


 AddCart(e,valueId){
   this.props.Refresh(true)
  const uid=  e.target.id
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
             
                      <StyledLink2 to={val} key="#0%" >
                         
                        <InnerBox>
                        
                          <InnBox><img src={this.props.gallery[0]} alt={this.props.id} width="100%" height="100%" /></InnBox>
                          <button className='cart'onClick={e=>this.AddCart(e,this.props.attributes)} id={this.props.name} >cart</button>
                          <div>{this.props.id} </div>
                          <div><span>{price[0].currency.symbol}</span><span>{price[0].amount}</span></div>
                          </InnerBox>
                          <div className='Stock'>OUT OF STOCK</div>
                        </StyledLink2>
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
      
  }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Card2);