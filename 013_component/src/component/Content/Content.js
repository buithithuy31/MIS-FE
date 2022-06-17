import React, { Component } from 'react';


class Content extends Component {
        constructor(props) {
            super(props);
        this.state={isOn: true}
        }

    thongbao = () => { alert('Cách xử lí tương tác trong react js');}
    thongbao2 = () => { alert('Thông báo số 2');}
    thongbao3 = (x) => { alert(x);}
    render() {
        return (
            <>
            {/* Content section 1*/}
            {/* <section id="scroll"> */}
                <div className='col-lg-4'>
                <div className="row">

                    <div className={'col-lg-5'}>
                {/* <div className="container px-5"> */}
                {/* <div className="row gx-5 align-items-center"> */}
                    {/* <div className={"col-lg-6" + this.props.vitri1}> */}
                    <div className="p-1">
                        <img
                        className="img-fluid rounded-circle"
                        src={this.props.anh}
                        alt =""/>
                    </div>
                    </div>
                    <div className="col-lg-7">
                    <div className="p-1">
                        <h2 className="display-6">{this.props.tieude}</h2>
                        <p>
                        {this.props.trichdan}
                        </p>
                        
                        <div className="row">
                            <div className="btn btn-group">
                            <div className="btn btn-info" onClick={this.thongbao}>Edit</div>
                            <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
                            <div className="btn btn-success" onClick= {() =>this.thongbao3("Thông báo")}>TB3</div>
                            <div className="btn btn-danger" onClick= {this.thongbao3.bind(this,"Thông báo 4")}>TB4</div>
                            </div>
                        </div>
                        <hr />
                
                    </div>
                </div> 
                </div>
                </div>
            {/* </section> */}

            </>

                    );
                }
            }

export default Content;