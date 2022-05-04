import React from 'react';
import {connect} from "react-redux"
import { CatDiv,CatSpan } from '../moreComponent/styledComponent';
import { categories } from '../redux/action';


class Category extends React.Component {
    constructor(props) {
      super(props);
    this.state={value:"all"}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        this.setState({value:this.state.category});
    }

    
    handleChange(event) {
      this.setState({value: event.target.value});
      event.preventDefault();
    }
  
    handleSubmit(event) {
       this.props.Category(this.state.value)
      event.preventDefault();
    }
  
    render() {
      const data=this.props.categories
      const dataFilter=data===undefined?[]:data
      return (
         <CatDiv>
        <form onSubmit={this.handleSubmit} className="form">
            <CatSpan>
            <span className='CatMargin'>Category name</span>
            <span className='CatMargin'>
            <select value={this.state.value} onChange={this.handleChange} className="selectCat">
            {dataFilter===undefined?[]: dataFilter.map((x,id)=>(
              <option key={id} value={x.name} >{x.name}</option>
            )) }
            </select>
          <button onClick={this.handleSubmit} className="selectCat2">Filter</button>
            </span>
          </CatSpan>
        </form>
        
        </CatDiv>
      );
    }
  }
  const mapStateToProps = (state) => {
    return {
      category:state.category
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        Category: (select) => dispatch(categories(select))
    }
  }


  export default connect(mapStateToProps,mapDispatchToProps)(Category)