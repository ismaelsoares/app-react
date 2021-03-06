import React from 'react';
const base = require('../data/base');
import FormTop from './formTop';
import FormBottom from './formBottom';

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}


let App = React.createClass({
  getInitialState(){
    return {
      lista : base
    }
  },
  textChanged(text){
    let categorias = base.categorias.map((categoria) => {
      let cat = clone(categoria);
      cat.items = cat.items.filter(item => new RegExp(`${text}`).test(item.nome));
      return cat;
    });
    this.setState({ lista: { categorias: categorias }});
  },
    render(){
    return(
      <div>
        <FormTop onTextChanged={this.textChanged} />
        <FormBottom lista={this.state.lista} />
      </div>
    );
  }
});
export default App;








































/*let CommentBox = React.createClass({
  render(){
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

let CommentList = React.createClass({
  render(){
    return(
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

let CommentForm = React.createClass({
  render(){
    return(
      <div className="commentForm">Hello! I am CommentForm</div>
    );
  }
});

let Comment = React.createClass({
  render(){
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));*/







/*import React from 'react';
import Timer from './timer';
let App = React.createClass({
  render(){
    return(
      <div>
      <h1>Hello {this.props.name}</h1>
      <h1>{this.props.teste}</h1>
      <Timer start={Date.now()}/>
      </div>
    );
  }
});
export default App;
*/

























/*import React from 'react';

let frutas = ["maça", "mamao", "uva"];
let App = React.createClass({
  render(){
    return(
      <div>
        {
          frutas.map(function(fruta){
          return (
            <li>{fruta}</li>
          );
        })}
      </div>
    );
  }
});
export default App;*/
