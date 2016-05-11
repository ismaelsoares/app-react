import React from 'react';
import FormComponent from './formComponent';
import base from '../data/base';

let App = React.createClass({
    render(){
    return(
      <div>
        <FormComponent />
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
