import React, { Component } from 'react';


class Leftchild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            symbl: {
                '+': '+',
                '-': '-',
                'x': '*',
                '/': '/'
            }
        }
    }
    componentWillMount () {

    }
    componentDidMount ()  {
        
    }
    render () {
        return (<div>
            <h2>左边子级组件</h2>
            <div className="Leftchild">
                总数：<span>{this.state.total}</span>
            </div>
        </div>)
    }
    totalFn = (num1, num2, symbl) => {
        switch(symbl){
            case '-':
                this.setState({
                    total: num1 - num2
                })
            break;
            case 'x':
                this.setState({
                    total: num1 * num2
                })
            break;
            case '/':
                this.setState({
                    total: num1 / num2
                })
            break;
            default:
            this.setState({
                total: num1 + num2
            })
        }

        
    }
    resetFn = () => {
        this.setState({
            total: 0
        })
    }
}
export default Leftchild;