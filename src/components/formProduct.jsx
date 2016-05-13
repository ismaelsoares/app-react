import React from 'react';
import data from '../data/base';

let FormProduct = React.createClass({
  render(){
    return(
      <div>{this.props.product.nome}</div>
    );
  }
});
export default FormProduct;
