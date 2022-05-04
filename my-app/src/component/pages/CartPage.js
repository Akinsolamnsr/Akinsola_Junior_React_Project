import React from 'react';
import { connect } from 'react-redux';
import {CartDIV,AttribButton,AttribFlex, CartAttribDIV,
   CartWrapDIV, WrapDIV, IMGSDIV, WrapDIVS, WRAPDIVS, CaroBtn, OrderBtn, OrderDiv, OrderBtn3} from "../moreComponent/styledComponent"
import { cart, CartDel, refresh } from '../redux/action';

class CartPage extends React.Component {
 
    constructor(props) {
        super(props);
        this.state={Imgs:{},ImgLth:[],count:{},sum:{},Atb:{},attribute:{},Acc:[]}
        this.Delete = this.Delete.bind(this) 
        this.carosel = this.carosel.bind(this) 
        this.count = this.count.bind(this) 
      }


    

  

   count(e,val){
    let ID=e.target.id
  
    const LeftVal=()=>{
      this.state.count[ID]===1?this.setState({count:{...this.state.count,[ID]:1}}): this.setState({count:{...this.state.count,[ID]:this.state.count[ID]-1}}) 
    }
  
    const RightVal=()=>{
    this.setState({count:{...this.state.count,[ID]:this.state.count[ID]+1}})
    }
  
      val[e.target.id]==="L"? LeftVal() : RightVal()

   }




   carosel(e,val){
    let ID=e.target.id
    const LeftVal=()=>{
      this.state.Imgs[ID]===0?this.setState({Imgs:{...this.state.Imgs,[ID]:0}}): this.setState({Imgs:{...this.state.Imgs,[ID]:this.state.Imgs[ID]-1}}) 
    }
  
    const RightVal=()=>{
      const Length=this.state.ImgLth[ID]-1
      console.log(Length)
      this.state.Imgs[ID]===Length?this.setState({Imgs:{...this.state.Imgs,[ID]:Length}}):  this.setState({Imgs:{...this.state.Imgs,[ID]:this.state.Imgs[ID]+1}})
    }
  
      val[e.target.id]==="L"? LeftVal() : RightVal()
   }

   ImageValue(){
    const image=this.props.Cart.reduce((v,x)=>{
      const obj={[x.name]:0}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
      this.setState({Imgs:NewOBj})
  }


  CountValue(){
    const image=this.props.Cart.reduce((v,x)=>{
      const obj={[x.name]:1}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
      this.setState({count:NewOBj})
  }

  AttribValue(){
    const image=this.props.Cart.reduce((v,x)=>{
      const obj={[x.name]:[x.attribute]}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
      this.setState({attribute:NewOBj})
  }  

  ImageLenght(){
    const image=this.props.Cart.reduce((v,x)=>{
      const obj={[x.name]:x.Img.length}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
      this.setState({ImgLth:NewOBj})
  }
 
  Delete(e,propVal,cat){
    const Cat=cat.filter((x)=>x.name!==propVal)
    this.props.CartDel(Cat)
    this.setState({Acc:Cat})
   
   }

  componentDidUpdate(){
      
  }

     componentDidMount(){
     this.ImageValue()
     this.ImageLenght() 
     this.CountValue()  
     this.AttribValue()

     const Datum=this.props.Cart===undefined?[] :this.props.Cart
     const dataSet=Datum[0]===undefined?[] : Datum
      this.setState({Atb:dataSet})
     const cat=this.props.Cart.sort((a,b)=>a.brand.localeCompare(b.brand)) 
      this.setState({Acc:cat})
      
     }
 
    render() {
       // const cat=this.props.Cart.sort((a,b)=>a.brand.localeCompare(b.brand)) 
        const storage=[]
        const Qty=[]
        let QtyAmount=0
         let sumAmount=0 
         let SumTotal=0
        const current=[{"$":20},{"£":14.4},{"A$":108.51},{"¥":75.98},{"₽":25.95}]    
        
        const  Tax=current.filter((x)=>x[this.props.Symbol]!==undefined)
              const taxValue=Object.values(Tax[0])===undefined?"":Object.values(Tax[0])
              const DataCat=this.state.Acc===undefined?[]:this.state.Acc
                
      return (  
      <>    
      
      <CartDIV>
      <div style={{borderBottom:"1px solid #ced0ce"}} ><h3>CART</h3></div>
      
      <CartAttribDIV>

      <CartWrapDIV>
      {DataCat===undefined?[] : DataCat.map((x,i)=>{
      
      
        const price=x.price.filter((x)=>x.currency.symbol===this.props.Symbol)
            const LeftBtn={[x.name]:"L"}
            const RightBtn={[x.name]:"R"}
            const Sum=price[0].amount * this.state.count[x.name]
                   storage.push(Sum)
                   Qty.push(this.state.count[x.name])
                    sumAmount=storage.reduce((x,y)=>{
                    return x+y
                  },0)

                  QtyAmount=Qty.reduce((x,y)=>{
                    return x+y
                  },0)

                  const AttribArray=this.state.attribute[x.name]
                        const array=AttribArray===undefined? "":AttribArray
                        const array2=array[0]===undefined? "":array[0]
                    SumTotal=sumAmount + taxValue[0]
           return(
               <WrapDIVS key={x.name}>
                  <div className='Parent'>
                     <div className='Name'>{x.name}</div>
                     <div className='Brand' >{x.brand}</div>
                      <div className='currency'><span>{price[0].currency.symbol}</span><span>{price[0].amount}</span></div>
                     <div className='Attrib'>
                     {x.attributes.map((List,i)=>{
                            const ID=List.id===undefined? "":List.id
                           
                                    return(
                                      <div key="POooq12"  >
                                       
                                    <div className='AtrribId'>{List.id.toUpperCase()}:</div>
                                        <AttribFlex >
                                        {List.items.map((x)=>{
                                          const status=List.type
                                             
                                           
                                            return(  
                                               <div key="keys">  
                                               {status==="swatch"? 
                                                 <div key="09*%" style={{marginRight:"5px"}} >
                                                  
                                                 <button swatch style={{background:`${x.value}`,color:"transparent"}}  id={List.id}  className={array2[ID]===x.value?"swatch2":"AttribButton"}   >{x.value}</button>
                                               </div>
                                
                                               :
                                               <div key={x.id} style={{marginRight:"5px"}}  >     
                                                 
                                               <AttribButton id={List.id} className={array2[ID]===x.value?"select2":"AttribButton2"} >{x.value}</AttribButton>
                                             </div>
                                
                                               }
                                               </div>
                                           )
                                          })}    
                                           
                                            
                                          </AttribFlex>
                                      </div>
                                    )
                                })}
                     </div>

                  </div>

               <WRAPDIVS>
                 
                <WrapDIV>
                <button onClick={e=>this.count(e,RightBtn)} id={x.name} className="caro">+</button>
                 <div >{this.state.count[x.name]}</div>
                <button onClick={e=>this.count(e,LeftBtn)} id={x.name} className="caro">-</button>
                </WrapDIV>
                <IMGSDIV>
                <img src={x.Img[this.state.Imgs[x.name]]} alt={x.id} width="120px" height="175px" style={{marginTop:"10px"}} />
                <CaroBtn id={x.name}  onClick={e=>this.carosel(e,LeftBtn)} >&lt;</CaroBtn><CaroBtn id={x.name} onClick={e=>this.carosel(e,RightBtn)}  >&gt;</CaroBtn>
                </IMGSDIV>
                <div>
                                           <button onClick={e=>this.Delete(e,x.name,this.state.Acc)} className='del'>Remove</button>
                                           </div>
                </WRAPDIVS>
               
               </WrapDIVS>
           )
       })}
       
       </CartWrapDIV>

       </CartAttribDIV>
       <div className='PadButtom'>
       <OrderDiv>Tax:<span className='boldIt'>{this.props.Symbol}{taxValue[0]}</span></OrderDiv>
       <OrderDiv>Qty:<span className='boldIt'>{QtyAmount}</span></OrderDiv>
       <div >Total:<span className='boldIt2' >{this.props.Symbol}{SumTotal.toFixed(2)}</span></div> 
       <OrderBtn3 >ORDER</OrderBtn3>
       </div>
      </CartDIV>
      </>
    );
  } 
} 

const mapStateToProps = (state) => {
  return {
   Symbol:state.symbol,
   Cart:state.CartData,
   attribList:state.attribList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  
      cart:(select) => dispatch(cart(select)),
      CartDel:(select) => dispatch(CartDel(select)),
      
      
  }
}
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(CartPage);