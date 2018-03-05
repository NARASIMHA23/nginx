import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import store from './store/index.js'
import Count from './Count'
// import Todo from './Todo';
import List from './List';
import {connect} from 'react-redux'; 
import Texts from './Texts.js';

class App extends React.Component {
  constructor(props){
    super(props);
   
    this.state={
      data:"hsfdgsdhsfdf",
      chan:"dfdfdfdfdfdfdfd"
    }
    this.change=this.change.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  change(event){
    this.setState({data:event.target.value});
  }

  handleSubmit(e) {

 
   this.setState({data:e.target.this.state.chan})
   e.preventDefault();
  }
  




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <Counter store={store}/>
       <Count store={store}/>
       <Texts store={store}/>
<input type="text" onChange={this.change} value={this.state.data}/>
<button onClick={this.handleSubmit}>clickhere</button>
<h3>{this.state.data}</h3>


       <br/>
       <br/>
       <br/>
       <br/>
      {/* <Texts stote={store}/> */}
        <List/>
      </div>
    );
  }
}


// function mapDispatchtoProps(dispatch){
//   return{
//     addArticle:(function(article){
//       return dispatch(addArticle(article));
//     })
//   }
// }

export default App;
