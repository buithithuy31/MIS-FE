import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      trangthai:"khoitao"
    }
  }

  
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount da chay roi');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('componentDidMount da chay roi');  
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentDidMount da chay roi');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidMount da chay roi');
  }
  
  capnhatState = () => {
    this.setState({
      trangthai:"Trang thai duoc Update"
    });
  }

  
  render() {
  
    console.log("in ra man hinh");
    return (
      <div className="App">
        <button onClick={() => this.capnhatState()}> Click de update</button>
      </div>
    );
  }
}


export default App;
