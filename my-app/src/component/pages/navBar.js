import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {NavDiv, NavButton, NavSpan, BOX, Lspan, NavLinkSpan} from '../moreComponent/styledComponent';
import { Switcher, Visbility } from '../redux/action';



class Navigation extends React.Component {
    constructor(props) {
        super(props);
       
        this.state ={
          currency:{},Active:false,active:""
        }

        this.navLink= this.navLink.bind(this);
        this.addActiveClass= this.addActiveClass.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }


      componentDidMount(){
        this.setState({active:"WOMEN"})
      }

      navLink(e){
       this.setState({active:e.target.innerText})
       
      }

      Activate(){
       this.props.Visibility("visible")
      }

      Deactivate(){
         this.props.Visibility('hidden')
      }

      addActiveClass() {
        this.props.Visible==="visible"? this.Deactivate() : this.Activate()
      }

      handleChange (e){
        const data=this.props.currencies
        const dataFilter=data===undefined?[]:data
        const SymbolSwitcher =dataFilter.filter((x)=>x.label===e.target.innerText)  
         
        this.props.switcher(SymbolSwitcher[0].symbol)
       }     
 

    render() {
       const data=this.props.currencies
       const dataFilter=data===undefined?[]:data

      return (
        <NavDiv>
        <NavSpan>
        <NavLinkSpan to="/" ><NavButton onClick={e=>this.navLink(e)} className={this.state.active==="WOMEN"? "NavSee":""} >WOMEN</NavButton></NavLinkSpan>
        <NavLinkSpan to="/" ><NavButton onClick={e=>this.navLink(e)} className={this.state.active==="MEN"? "NavSee":""} >MEN</NavButton></NavLinkSpan>
        <NavLinkSpan to="/" ><NavButton onClick={e=>this.navLink(e)} className={this.state.active==="KID"? "NavSee":""} >KID</NavButton></NavLinkSpan>
        </NavSpan>

        <NavSpan endContent breadth>
           <NavButton className='disp2' >
             <Lspan ><span>{this.props.symbol}</span> <span className="BtnUp">&lt;</span></Lspan>
             <BOX className="hid">
             {dataFilter.map((x,id)=>{
        return(
          <button key={id} onClick={this.handleChange} className="btn" ><span >{x.symbol}</span><span className='Pad'>{x.label}</span></button>
        )
      })}      
             </BOX>
           </NavButton >
             
             
           <button onClick={this.addActiveClass} className="CartSvg" >
           <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve" >
<g><path d="M872.3,620.6c-15.8,44.9-57.9,75-104.9,75H325.7c-53,0-98.9-38.3-109.2-91l-74.9-384.1l-24.8-115.2H33.9C20.7,105.3,10,94.5,10,81.2C10,67.8,20.7,57,33.9,57H136c3.8,0.6,5.3,0.9,6.9,1.4c1.4,0.5,2.7,0.9,4,1.7c1.4,0.7,2.6,1.6,3.8,2.6c1.2,1,2.3,2,3.3,3.2c0.9,1.2,1.7,2.4,2.4,3.7c0.8,1.4,1.5,2.9,2,4.5c0.2,0.7,0.7,1.3,0.9,2l24.8,115.3h726.9c25.6,0,49.7,12.6,64.5,33.8c14.8,21.2,18.5,48.5,9.9,73L872.3,620.6z M936.6,253c-5.9-8.5-15.2-13.4-25.5-13.4H194l69.3,355.6c5.9,30.1,32.1,52,62.4,52h441.7c26.9,0,51-17.2,60-42.9l113.1-322.5C944,272.1,942.6,261.5,936.6,253L936.6,253L936.6,253z M308.4,748.1c53.1,0,96.2,43.7,96.2,97.4c0,53.8-43.2,97.5-96.2,97.5c-53,0-96.2-43.7-96.2-97.5C212.2,791.8,255.3,748.1,308.4,748.1L308.4,748.1L308.4,748.1z M308.4,894.7c26.7,0,48.5-22,48.5-49.1c0-27.1-21.8-49.1-48.5-49.1c-26.7,0-48.4,22-48.4,49.1C259.9,872.6,281.6,894.7,308.4,894.7L308.4,894.7L308.4,894.7z M733.5,748.1c53.1,0,96.2,43.7,96.2,97.4c0,53.8-43.1,97.5-96.2,97.5c-53,0-96.2-43.7-96.2-97.5C637.4,791.8,680.5,748.1,733.5,748.1L733.5,748.1L733.5,748.1z M733.5,894.7c26.8,0,48.5-22,48.5-49.1c0-27.1-21.8-49.1-48.5-49.1s-48.5,22-48.5,49.1C685.1,872.6,706.8,894.7,733.5,894.7L733.5,894.7L733.5,894.7z"/></g>
</svg>
           </button>
        </NavSpan>
      </NavDiv>
                  )
  } 
} 

const mapStateToProps = (state) => {
  return {
   symbol:state.symbol,
   Visible:state.Visibility
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     switcher: (cat) => dispatch(Switcher(cat)),
     Visibility: (cat) => dispatch(Visbility(cat))
  }
}
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Navigation)