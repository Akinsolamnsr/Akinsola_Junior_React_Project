import React from 'react';
import {connect} from "react-redux"
import { PLPDiv, StyledBox } from '../moreComponent/styledComponent';
import Card from './Card';
import Card2 from './Card2';
import MiniCart from './MiniCart';


class PLP extends React.Component {
  constructor(props) {
    super(props);
    this.state={load:{}}
    this.timer=false

  
  } 

  componentDidMount(){
   
this.setState({load:{...this.props}})
     
  }

 

  render() {

    
    const data=this.props.category.products
    const dataFilter=data===undefined?[]:data
            
    return (
          <PLPDiv >
             {dataFilter===undefined?[]: dataFilter.map((x,id)=>{
                  
               const status= this.props.Cart.some((y)=>x.name===y.name) 
                       this.catStat={status}
                 return(
                  
                   <>
                     {x.inStock?
                      <StyledBox className={status? "hove2":"hove"} key='#001' >
                         <Card {...x} {...this.catStat}  />
                     </StyledBox> :
                       <StyledBox className='notStocked' key='#001' >
                       <Card2 {...x} />
                       
                   </StyledBox> 
                     }
                   </>
                   
                 )
             }) }
             
             
          </PLPDiv>
    );
  }
}


const mapStateToProps = (state) => {
    return {
      Cart:state.CartData,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(PLP);