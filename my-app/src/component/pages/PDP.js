
import React from 'react';
import {connect} from "react-redux"
import { AttribButton, AttribDiv,AttribFlex,CartBtn,DescDiv,
    FWrap,ImgDIV,LImgDIV,LPanel,RPanel,SImgDIV, Swatch, SWrap, TWrap} from '../moreComponent/styledComponent';
import { renderToString } from "react-dom/server";
import { Attribute,AttributeList,cart } from '../redux/action';
import parse from 'html-react-parser';



class PLP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Arr1:[],Active:null,imgs:null,cart:{},stat:{}} 

    this.handleChange = this.handleChange.bind(this);
    this.Change = this.Change.bind(this);
    this.AddCart = this.AddCart.bind(this) 
  
  } 

 


   Cart(){
    const data={}
      data.brand=this.props.brand
      data.Img=this.props.gallery
      data.name=this.props.name
      data.attribute=this.props.attributeData
      data.price = this.props.prices
      data.attributes=this.props.attributes
      return data
   }

   Cart2(){
    const data={}
      data.brand=this.props.brand
      data.Img=this.props.gallery[0]
      data.name=this.props.name
      data.attribute=this.props.attributeData
      data.price = this.props.prices
      
   }


  componentDidMount(){
   const dataStat= this.Cart()
     this.setState({...this.state,imgs:this.props.gallery[0]})
    this.props.AttribList(this.props.attributes)
    this.setState({cart:dataStat})
    
   
  }

 componentDidUpdate(){
    this.Cart2()
 }
  Change(e) {
  
    const SN=e.target.id

     this.setState({
       imgs: SN
     })  
 
   }

   handleChange(e,val) {
  
    const SN=e.target.id
    const value=e.target.innerText
    this.props.attributeData[SN]=value
    this.setState({stat:{...this.state.stat,[SN]:this.props.attributeData[SN]}})
    this.props.Attribute(this.props.attributeData)
    console.log(this.props.attributeData)
    
   }
 
 
   AddCart(e,value){
    this.props.Cart(value)
    console.log(value)
   }

  render() {
    const price=this.props.prices.filter((x)=>x.currency.symbol===this.props.Symbol)
      
    return (
        <AttribDiv>
        <LPanel>
        <SImgDIV  >
        {this.props.gallery.map((x,i)=>{
             return(
                    <div key={i}  >
                                                 
                    <ImgDIV  key="9u" className='ImgHover'>
                    <img src={x} alt="Logo" width="100%" height="80px" onClick={this.Change} id={x} />
                    </ImgDIV>                      
                    </div>
                     )
                    })}
            </SImgDIV>
        <LImgDIV >
                         <div style={{height:"1000px"}}>
                         <img src={this.state.imgs} alt="Logo" width="90%" height="50%" />
                         </div>
            </LImgDIV>
        </LPanel>
        <RPanel>


           <DescDiv >
               <FWrap>
               <div className='Name2'>{this.props.id}</div>
           <div className='Brand2'>{this.props.brand}</div>
           
             </FWrap>
           <div>

           </div>
           {this.props.attributes && 
                             (<SWrap>
                               {this.props.attributes.map((List,i)=>{
                                    
                                     return(
                                       <div key={List.name} >
                                         <div className='AttribId2'> {List.id.toUpperCase()}:</div>
                                        
                                        
                                         <AttribFlex >
                                           {List.items.map((x)=>{
                                           const status=List.type
       
                                           
                                             return(
                                                <>
                                                {status==="swatch"? 
                                                  <div key={x.id} style={{marginRight:"3%"}} >
                                                  <button swatch style={{background:`${x.value}`,color:"transparent"}} onClick={this.handleChange} id={List.id} className={this.props.attributeData[List.id]===x.value? "swatch":"AttribButton"}  >{x.value}</button>
                                                </div>
  
                                                :
                                                <div key={x.id} style={{marginRight:"3%"}} >
                                                <AttribButton onClick={e=>this.handleChange(e,x.value)} id={List.id} className={this.props.attributeData[List.id]===x.value? "select":null}  >{x.value}</AttribButton>
                                              </div>

                                                }
                                                </>
                                            )
                                           })}    
                                            
                            
                                           </AttribFlex>
                                       </div>
                                     )
                               })}
                             </SWrap>)}
            <SWrap>
                <div className='AttribId2'>PRICE:</div>
           <div className='price'><span >{price[0].currency.symbol}</span><span>{price[0].amount}</span></div>
           </SWrap>
           <CartBtn to="/cart"><button className='CatBtn'  onClick={e=>this.AddCart(e,this.state.cart)}>ADD TO CART</button></CartBtn>
            <TWrap>
           <div>{parse(this.props.description) }</div>
           </TWrap>
           </DescDiv>
        </RPanel>
        </AttribDiv>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        Symbol:state.symbol,
        attributeData:state.attribData,
        cart:state.CartData
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        Attribute:(select) => dispatch(Attribute(select)),
        Cart:(select) => dispatch(cart(select)),
        AttribList:(select) => dispatch(AttributeList(select))
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(PLP);