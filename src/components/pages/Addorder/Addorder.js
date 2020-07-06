import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Leftchild from './component/Leftchild';
import './Addorder.less'

class Addorder extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount () {

    }
    componentDidMount ()  {
        
    }
    render () {
        return (<div className="Addorder">
            <h2>新增订单</h2>
            <div className="addorder">
                <div className="left">
                    <input type="number" ref="pret"></input> <input type="text" defaultValue="+" ref="symbl" className="symbl"></input> 
                    <input type="number" ref="next"></input> <button onClick={this.handleCount.bind(this)}>等于</button>
                    <button onClick={this.handleClear.bind(this)}>清除</button>
                    <br></br>
                    <Leftchild ref="leftchild"></Leftchild>
                </div>
                <div className="right"></div>
            </div>
        </div>)
    }
    handleCount = () => {
        // alert(this.refs.lefttext.value)
        this.refs.leftchild.totalFn(Number(this.refs.pret.value), Number(this.refs.next.value), this.refs.symbl.value)
    }

    handleClear = () => {
        this.refs.pret.value = '';
        this.refs.next.value = '';
        this.refs.leftchild.resetFn();
    }
}
export default withRouter(Addorder);