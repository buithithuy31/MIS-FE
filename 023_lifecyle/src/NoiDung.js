import React, { Component } from 'react';

class NoiDung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps cua noi dung.js:'+ ' ' + nextProps.ten)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate cua noi dung.js')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate cua noi dung.js')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate cua noi dung.js')
    }
    
    render() {
        console.log("Render cua noi dung.js");
        return (
            <div>
                <h4>{this.props.ten}</h4>
            </div>
        );
    }
}

export default NoiDung;