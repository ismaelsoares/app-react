import React from 'react';
import FormTop from './formTop';
import FormBottom from './formBottom';

let FormComponent = React.createClass({
  render(){
    return(
      <div className="formComponent">
        <FormTop />
        <FormBottom />
      </div>
    );
  }
});
export default FormComponent;
