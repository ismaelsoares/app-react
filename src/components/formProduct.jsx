import React from 'react';
import data from '../data/base';

let FormProduct = React.createClass({
  render(){
    let produtos = data.categorias.map(produto => (<h3>{produto.items.nome}</h3>));
    return(
      <div>{produtos}</div>
    );
  }
});
export default FormProduct;
