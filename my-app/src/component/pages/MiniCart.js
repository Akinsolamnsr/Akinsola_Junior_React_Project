import React from 'react';
import { connect } from 'react-redux';
import {CartDIV,AttribFlex, CartAttribDIV,MiniCartDiv,
   CartWrapDIV, WrapDIV, IMGSDIV2, WrapDIVS, WRAPDIVS, CaroBtn, OrderBtn,
    OrderDiv, OrderDiv2, AttribButton4, FlexSpan, Overlay, OrderBtn2} from "../moreComponent/styledComponent"
import { cart, CartDel, refresh } from '../redux/action';

class MiniCartPage extends React.Component {
 
    constructor(props) {
        super(props);
        this.state={Imgs:{},ImgLth:[],count:{},sum:{},Atb:{},attribute:{},Sum:0,Acc:[],load:[],loadCart:[],loader:{}}
         this.SortData=[]
        this.carts=[]
        this.DataList=[]
        this.carosel = this.carosel.bind(this) 
        this.count = this.count.bind(this) 
        this.Delete = this.Delete.bind(this) 
        
      }


      Delete(e,propVal,cat){
        const Cat=cat.filter((x)=>x.name!==propVal)
        this.props.CartDel(Cat)
        this.carts=Cat
       }
    


   count(e,val){
    let ID=e.target.id
  
    const LeftVal=()=>{
      this.state.loader[ID]===1?this.setState({loader:{...this.state.loader,[ID]:1}}): this.setState({loader:{...this.state.loader,[ID]:this.state.loader[ID]-1}}) 
    }
  
    const RightVal=()=>{
    this.setState({loader:{...this.state.loader,[ID]:this.state.loader[ID]+1}})
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
     
      this.state.Imgs[ID]===Length?this.setState({Imgs:{...this.state.Imgs,[ID]:Length}}):  this.setState({Imgs:{...this.state.Imgs,[ID]:this.state.Imgs[ID]+1}})
    }
  
      val[e.target.id]==="L"? LeftVal() : RightVal()
   }

   ImageValue(val){
    const image=val.reduce((v,x)=>{
      const obj={[x.name]:0}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
                   return NewOBj
  }


  CountValue(val){
    const image=val.reduce((v,x)=>{
      const obj={[x.name]:1}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
      return NewOBj
  }

  AttribValue(val){
    const image=val.reduce((v,x)=>{
      const obj={[x.name]:[x.attribute]}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
       return NewOBj
  }  

  Attributes(val){
    const image=val.reduce((v,x)=>{
      const obj={[x.name]:[x.attributes.flat()]}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
       return NewOBj
  }    

  ImageLenght(val){
    const image=val.reduce((v,x)=>{
      const obj={[x.name]:x.Img.length}
     v.push(obj)
       return v
  },[])
  const NewOBj= image.reduce((obj, item) => ({...obj,...item}) ,{});
             return NewOBj
  }


  Delete(e,propVal,cat){
    const Cat=cat.filter((x)=>x.name!==propVal)
    this.props.CartDel(Cat)
   
   }

   dataFunction(data,Id){
     
     
    try {
   
      const objectData={}
           objectData.Img=data.Img[Id]
           objectData.ImgLth=data.ImgLth[Id]
           objectData.count=data.count[Id]
           objectData.attribute=data.attribute[Id]
           objectData.attributes=data.attributes[Id]
           return objectData
           
    } catch (error) {
        return
    }
   }
    

     componentDidMount(){
      this.timer= setTimeout(() => {
       
       
      
      const  SortData= this.props.cartList.map((x,i,arr)=>{
       const  body={}
        body.Img=this.ImageValue(arr)
        body.ImgLth=this.ImageLenght(arr)
        body.count=this.CountValue(arr)
        body.attribute=this.AttribValue(arr)
        body.attributes=this.Attributes(arr)
               return {[x.name] : body}
      })
      const CountData=this.CountValue(this.props.cartList)
                    
         return  this.setState({load:SortData,loader:CountData})
         
          
    },175);
     
     
     }


componentDidUpdate(){
  
   
   //
}

  componentWillUnmount(){
  clearInterval(this.timer)
  clearInterval(this.timer2)

  }
    

     
 
    render() {
        const storage=[]
        const Qty=[]
        let QtyAmount=0
         let sumAmount=0 
         let SumTotal=0
         let sumation=0
        const current=[{"$":20},{"£":14.4},{"A$":108.51},{"¥":75.98},{"₽":25.95}]    
        
        const  Tax=current.filter((x)=>x[this.props.Symbol]!==undefined)
              const taxValue=Object.values(Tax[0])===undefined?"":Object.values(Tax[0])
              const DataCat=this.state.load===undefined?[]:this.state.load
              const dataID=DataCat.find((x)=>x[this.props.cartId]!==undefined)
                 const Cartdata=dataID===undefined?[] : dataID
                  const Carts=Cartdata[this.props.cartId]===undefined?[] : Cartdata[this.props.cartId]
                   let CartsId =Carts===undefined? {} : Carts

                   const DataCart=this.props.cart===undefined?[]:this.props.cart
                   
                   const tempData= this.dataFunction(CartsId,this.props.cartId)
                   
                           let Attribdata
                   try {
                    if(this.props.refresh){
                       console.log(this.state.loader)
                      Attribdata= tempData.attribute[0]
                     
                     }
                   } catch (error) {
                     return
                   }
                   
                
      return (  
      <>    
      
      <MiniCartDiv  style={{visibility:`${this.props.Visibility}`}}  >
      <div style={{padding:"3%"}} ></div>
      
      <CartAttribDIV>
   
      <CartWrapDIV>
      {DataCart.map((x,i)=>{
        
        const price=x.price.filter((x)=>x.currency.symbol===this.props.Symbol)
            const LeftBtn={[x.name]:"L"}
            const RightBtn={[x.name]:"R"}
            const Sum=price[0].amount * this.state.loader[x.name]
                   storage.push(Sum)
                   Qty.push(this.state.loader[x.name])
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
                  <FlexSpan >
                     <div >{x.name}</div>
                     <div className='Brand' >{x.brand}</div>
                      <div className='currency'><span>{price[0].currency.symbol}</span><span>{price[0].amount}</span></div>
                     <div className='Attrib'>
                     {x.attributes.map((List,i)=>{
                            const ID=List.id===undefined? "":List.id
                            console.log(tempData.count)
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
                                                  
                                                 <button swatch style={{background:`${x.value}`,color:"transparent"}}  id={List.id}  className={List.items[0].value===x.value?"swatch3":"AttribButton3"}   >{x.value}</button>
                                               </div>
                                
                                               :
                                               <div key={x.id} style={{marginRight:"5px"}}  >     
                                                 
                                               <AttribButton4 id={List.id} className={List.items[0].value===x.value?"select2":"AttribButton2"} >{x.value}</AttribButton4>
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

                  </FlexSpan>

               <WRAPDIVS>
                 
                <WrapDIV>
                <button onClick={e=>this.count(e,RightBtn)} id={x.name} className="caro2">+</button>
                 <div >{this.state.loader[x.name]}</div>
                <button onClick={e=>this.count(e,LeftBtn)} id={x.name} className="caro2">-</button>
                </WrapDIV>
                <IMGSDIV2>
                <img src={x.Img[0]} alt={x.id} width="80%" height="100%"  />
                
                </IMGSDIV2>
                <div>
                                           <button onClick={e=>this.Delete(e,x.name,DataCart)} className='del2'>Remove</button>
                                           </div>
                </WRAPDIVS>
               
               </WrapDIVS>
           )
       })}
       </CartWrapDIV>
       
       </CartAttribDIV>

       <div className='PadButtom'>
       <OrderDiv>Tax:<span className='boldIt'>{this.props.Symbol}{taxValue[0]}</span></OrderDiv>
       <div className='OrderBtn'><span>Total:</span><span className='boldIt3' >{this.props.Symbol}{SumTotal.toFixed(2)}</span></div> 
        <div className='view'><OrderBtn >VIEW BAG</OrderBtn> <OrderBtn2 >CHECKOUT</OrderBtn2></div> 
       </div>
       <OrderDiv2>my Bag.<span className='boldIt'>{QtyAmount}{QtyAmount===0 || QtyAmount===1? <span> item</span> :<span> items</span>}</span></OrderDiv2>
      </MiniCartDiv>
      
      </>
    );

  } 
  
} 

const mapStateToProps = (state) => {
  return {
   Symbol:state.symbol,
   cart:state.CartData,
   attribList:state.attribList,
   refresh:state.Refresh,
   Visibility:state.Visibility,
   cartList:state.cartList,
   cartId:state.cartId
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    Refresh:(select) => dispatch(refresh(select)),
    CartDel:(select) => dispatch(CartDel(select)),
    Cart:(select) => dispatch(cart(select)),
  }
}



  
  
  export default connect(mapStateToProps,mapDispatchToProps)(MiniCartPage);