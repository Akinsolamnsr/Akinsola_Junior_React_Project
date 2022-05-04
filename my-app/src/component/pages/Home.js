import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import NavBar from './navBar';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import PLPQuariesPage from '../quaries/PLPQuariesPage';
import AttribQuaries from '../quaries/AttribQuaries';
import CartPage from './CartPage';
import MiniCartPage from './MiniCart';


class Home extends React.Component {

  constructor(props) {
    super(props);
     this.hght=0
    this.Ref = React.createRef(); 
    this.Default = this.Default.bind(this) 
    
  }

 componentDidMount(){
 
 }

  Default(e){
     e.preventDefault()
  }

    render() {
     
      return (
        <div  > 
    <BrowserRouter>
     <NavBar {...this.props} />
     <MiniCartPage />
     
       
     <div className='modal' style={{height:`1500px`,visibility:`${this.props.Visibility}`}} >
     
     </div >
     <Switch>
       <Route exact path="/">
       <Category {...this.props} />
        <PLPQuariesPage />
       </Route>
     
       <Route path="/attr/:id" component={AttribQuaries} />

       <Route path="/cart" component={CartPage} />
     

     </Switch>
     
    
    </BrowserRouter>
    </div>
    );
  } 
} 

const mapStateToProps = (state) => {
  return {
   Symbol:state.symbol,
   Category:state.category,
   Visibility:state.Visibility
  }
}


  
  
  export default connect(mapStateToProps,null)(Home);