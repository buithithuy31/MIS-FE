import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
import TopHeader from './component/topheader/TopHeader';
import TopMenu from './component/topmenu/TopMenu';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <TopHeader/>
        {/* <Content tieude="Tin tuc 1" vitri1="order-lg-2" anh="assets/img/01.jpg" trichdan="Day la trich dan so 1"/> */}
        <Content tieude="Tin tuc 1" anh="assets/img/01.jpg" trichdan="Day la trich dan so 1"/>
        <Content tieude="Tin tuc 2" anh="assets/img/02.jpg" trichdan="Day la trich dan so 2"/>
        <Content tieude="Tin tuc 3"  anh="assets/img/03.jpg" trichdan="Day la trich dan so 3"/>

        <Content tieude="Tin tuc 1" anh="assets/img/01.jpg" trichdan="Day la trich dan so 1"/>
        <Content tieude="Tin tuc 2" anh="assets/img/02.jpg" trichdan="Day la trich dan so 2"/>
        <Content tieude="Tin tuc 3"  anh="assets/img/03.jpg" trichdan="Day la trich dan so 3"/>
        
        <Content tieude="Tin tuc 1" anh="assets/img/01.jpg" trichdan="Day la trich dan so 1"/>
        <Content tieude="Tin tuc 2" anh="assets/img/02.jpg" trichdan="Day la trich dan so 2"/>
        <Content tieude="Tin tuc 3"  anh="assets/img/03.jpg" trichdan="Day la trich dan so 3"/>
        <Footer/>
      </div>
    );
  }
}



export default App;
