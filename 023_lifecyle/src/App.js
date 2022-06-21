import React, {Component} from 'react';
import NoiDung from './NoiDung';
//import logo from './logo.svg';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      trangthai:"khoitao",
      trangthai2:"khoitao2",
    }
  }

  
  componentWillMount() {
    console.log('componentWillMount da chay')
  }
  componentDidMount() {
    console.log('componentDidMount da chay roi');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate da chay roi');  
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate da chay roi');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate da chay roi');
  }
  
  capnhatState = () => {
    this.setState({
      trangthai:"CapNhat1",
      trangthai2:"CapNhat2"
    });
  }
    
  
  render() {
  
    console.log(this.state.trangthai);
    return (
      <div className="App">
        <NoiDung ten={this.state.trangthai2}/>
        <button onClick={() => this.capnhatState()}> Click de update</button>
      
      </div>
    );
  }
}


export default App;
