import React from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { CatCurrency } from '../graphql/getData';
import Home from '../pages/Home';
import { categories, Switcher } from '../redux/action';

class HomeQuariesPage extends React.Component {
 



  render() {

   
    return (
              <Query query={CatCurrency}  >
        {({loading, error, data}) => {
          if (loading) return <p>'Loading...'</p>
          if (error) return <p>'Error! ${error.message}'</p>
             this.props.Switch(data.currencies[0].symbol)
             this.props.category(data.categories[0].name)
             return <Home {...data} />

        }}
        </Query > 
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     Switch: (id) => dispatch(Switcher(id)),
     category: (cat) => dispatch(categories(cat))
  }
}



export default connect(null,mapDispatchToProps)(HomeQuariesPage);