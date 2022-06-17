import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Kiểu hàm bình thường -> function One()
// function One() {
//   return (<div> 
//           <h1>Cách 1</h1>
//           <h2>Cách 1</h2>
//   </div>)
// }

//Kiểu Anonymous function -> function (){}
// var Two =function(){
//   return(
//     <div>
//       <h3>Cách số 2</h3>
//     </div>
//   );
// }

//Kiểu arrow function(es6) -> 0=>
// var Three = () =>  ( <div>
//                 <h3>Cách số 3</h3>
//               </div>
//             );


//Kiểu class gõ rcjc
// class Four extends Component {
//   render() {
//     return (
//       <div>
//         <button>Cách số 4</button>
//       </div>
//     );
//   }
// }

// class Five extends Component {
//   render() {
//     return (
//       <div>
//         <h4>Cách 5</h4>
//       </div>
//     );
//   }
// }

//sử dụng Props cách 1:
  // function NumberOne(Props){
  //     return (
  //       <div className="col-6">
  //         <div className="card">
  //           <img className="card-img-top" src={Props.linkanh} alt=""/>
  //           <div className="card-body">
  //             <h4 className='card-title'> {Props.tieude}</h4>
  //             <p className='card-text'>Text</p>
  //           </div>
  //         </div>
    
  //       </div>
  //     )
  //   }

  // function NumberTwo(Props){
  //   return (
  //     <div className="col-6">
  //       <div className="card">
  //         <img className="card-img-top" src="http://placehold.it/700x300 700w" alt=""/>
  //         <div className="card-body">
  //           <h4 className='card-title'>Sản phẩm 2</h4>
  //           <p className='card-text'>Text</p>
  //         </div>
  //       </div>
  
  //     </div>
  //   )
  // }


// Cách 2 sử dụng class để định nghĩa và thao tác với props
    // class NumberTwo extends Component {
    //   render() {
    //     return (
    //       <div  className="col-4">
    //         <div className="card">
    //         <img className="card-img-top" src={this.props.linkanh} alt=""/>
    //         <div className="card-body">
    //           <h4 className='card-title'>{this.props.tieude}</h4>
    //           <p className='card-text'>Text</p>
    //         </div>
    //       </div>
    //       </div>
    //     );
    //   }
    // }
  

 //JSX
//  const a1="Thuy";
//     class App1 extends Component {
//       render() {
//         return (
//           <div>
//             <h3 className='nut'>Tôi tên là: {a1} </h3>
 
//           {/* <div className="awesome" style={{border: '1px solid red'}}>
//             <label htmlFor="name">Enter your name: </label>
//             <input type="text" id="name" />
//           </div>
//           <p>Enter your HTML here</p> */}


//       <div classname="from-check">
//           <label classname="form-check-label">
//             <input
//               type="checkbox"
//               classname="form-check-input"
//               name=""
//               id=""
//               defaultvalue="checkedValue"
//               defaultchecked=""
//             />
//             Display value
//           </label>
//         </div>

//         </div>
//         );
//       }
//     }
  
// ví dụ về hàm Map
    const so = [1,2,3,4,5,6];
    const so2= so.map((x) => x*2 +' ')
    
    const so3 = so.map((x) => (
        <li>So: {x} </li>
  
    ) );
    class App2 extends Component {
      render() {
        return (
          <div>
            {so}
            <br/>
            {so2}
            {so3}
          </div>
        );
      }
    }
    


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>Welcome to React</h1>
          <div className='btn-btn-info'>Ví dụ xem</div>
          {/* <One/> */}
          {/* <App1/> */}
          <App2/>
          
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p className='App-intro'>
            To get start, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='container'>
          <div className='row'>
            {/* <NumberOne tieude="Sản phẩm số 1" linkanh="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/6/17/photo-1-1655427332768382190654.jpg"/>
            <NumberOne tieude="AQUAfINA" linkanh="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/6/16/1-7-16553736869401017098570.jpg"/>
            <NumberTwo tieude="THtrue Milk" linkanh="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/6/16/2-7-16553736869322061252435.jpg"/>
            <NumberTwo tieude="THtrue Milk" linkanh="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/6/16/2-7-16553736869322061252435.jpg"/>
            <NumberTwo tieude="THtrue Milk" linkanh="https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/6/16/2-7-16553736869322061252435.jpg"/> */}
          </div>

        </div>
        {/* <Two/>
        <Three/>
        <hr/>
        <Four/>
        <Five/> */}
      </div>
    );
  }
}




export default App;
