import React from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';

import { attribute } from '../graphql/getData';
import PDP from '../pages/PDP';
import { Attribute } from '../redux/action';


class AttribQuaries extends React.Component {
     

  productCategory(prod){
    const cat=prod.attributes.sort((a,b)=>a.id.localeCompare(b.id))
      const CatObj=cat.map((x,i)=>{
        const value=x.items[0].value
        return {[x.id]:value}
      })  
   const NewOBj= CatObj.reduce((obj, item) => ({...obj,...item}) ,{});
     this.props.Attribute(NewOBj)

   } 

  render() { 
   const {id}=this.props.match.params
    return (
              <Query query={attribute} variables={{Attrib:id}} >
        {({loading, error, data}) => {
          if (loading) return <p>'Loading...'</p>
          if (error) return <p>'Error! ${error.message}'</p>
           this.productCategory(data.product)
            return  <PDP {...data.product} />
        }}
        </Query > 
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Attribute:(select) => dispatch(Attribute(select))
  }
}



export default connect(null,mapDispatchToProps)(AttribQuaries);