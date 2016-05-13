import React from 'react';
import FormCategory from './formCategory';

let FormBottom = React.createClass({
  render(){
    return(
      <div className="formBottom">
        {this.props.lista.categorias.map(categoria => {
          return (
            <FormCategory category={categoria}/>
          )
        })}
      </div>
    );
  }
});
export default FormBottom;
