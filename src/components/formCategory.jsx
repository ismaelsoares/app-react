import React from 'react';
import FormProduct from './formProduct';
import data from '../data/base';

let FormCategory = React.createClass({
  render(){
    let categorias = data.categorias.map(categoria => (<h3>{categoria.nome}</h3>));
    return(
      <div>
        {categorias}
        <FormProduct />
      </div>
    );
  }
});
export default FormCategory;
