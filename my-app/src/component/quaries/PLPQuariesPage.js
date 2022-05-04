import React from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { catFilter } from '../graphql/getData';
import PLP from '../pages/PLP';



class PLPQuariesPage extends React.Component {
 

  render() { 
   const Cat=this.props.Category
    return (
              <Query query={catFilter} variables={{ID:Cat}} >
        {({loading, error, data}) => {
          if (loading) return <p>'Loading...'</p>
          if (error) return <p>'Error! ${error.message}'</p>
          
            return  <PLP {...data}/>
        }}
        </Query > 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Category:state.category
  }
}



export default connect(mapStateToProps,null)(PLPQuariesPage);