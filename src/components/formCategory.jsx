import React from 'react';
import FormProduct from './formProduct';
import data from '../data/base';

let FormCategory = React.createClass({
  render(){
    return(
      <div>
        <b>{this.props.category.nome}</b>
        {this.props.category.items.map(product => {
          return <FormProduct product={product} />
        })}
      </div>
    );
  }
});
export default FormCategory;
