import React, { Component } from 'react';
// import { Divider } from 'antd';

class ListModel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modelName: '列表模块',
            repairList: [],
            unrepairList: []
            
        }
    }

    componentWillMount () {
        const list = this.props.list;
        console.log(list);
        this.setState({
            unrepairList: list
        })
    }
    componentDidMount () {
        console.log(this, 23)
    }
    // componentWillReceiveProps (preProps) {
    //     console.log(preProps, 26)
    //     const list = preProps.list;
    //     this.setState({
    //         unrepairList: list
    //     })
    // }
    // static getDerivedStateFromProps (newprops) {
    //     console.log(newprops, 'getDerivedStateFromProps')
    // }
    shouldComponentUpdate (nextProps, nextState) {
        console.log(nextProps, nextState, 'shouldComponentUpdate')
        return true
    }
    render () {
        const list = this.state.unrepairList;
        const repairList = this.state.repairList;
        return (<div className="list-model">
                <h3 className="list-h3">未修复</h3>
                <ul className="list-ul">
                {list.map((item, index) => {
                    return (
                        <li className="list-li" key={item.checkdId}>
                            <input className="list-ceckbox" type="checkbox" name={item.checkdId} id={item.checkdId} onChange={this.changeSelect.bind(this, index, 'unrepairList')} checked={item.checked}></input>
                            <label htmlFor={item.checkdId}>
                                {item.value}
                            </label>
                            <button className="list-btn" onClick={this.repairData.bind(this, index, 'unrepairList')}>修复</button>
                            <button onClick={this.removeData.bind(this, index, 'unrepairList')} className="list-btn">删除</button>
                        </li>
                    )
                })}
            </ul>
            <h3 className="list-h3">已修复</h3>
            <ul>
                {
                    repairList.map((item, index) => {
                        return (
                            <li className="list-li" key={item.checkdId}>
                            <input className="list-ceckbox" type="checkbox" name={item.checkdId} id={item.checkdId} onChange={this.changeSelect.bind(this, index, 'repairList')} checked={item.checked}></input>
                            <label htmlFor={item.checkdId}>
                                {item.value}
                            </label>
                            <button className="list-btn" onClick={this.repairData.bind(this, index, 'repairList')}>退回</button>
                            <button onClick={this.removeData.bind(this, index, 'repairList')} className="list-btn">删除</button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>)
    }

    changeSelect = (n, type) => {
            const list = [...this.state[type]];
                  list[n].checked = !list[n].checked;        
            this.setState({
                [type]: list
            })
    }
    removeData = (n, type) => {
        const list = type === 'unrepairList'?[...this.state.unrepairList]:[...this.state.repairList];
        list.splice(n, 1);
        this.setState({
            [type]: list
        })
    }

    repairData = (n, type) => {
        const list = [...this.state[type]];
        const data = type === 'unrepairList'?[...this.state.repairList]:[...this.state.unrepairList];
        let item = list[n];
        if (item.checked) {
            list.splice(n, 1);
            item.checked = false;
            data.push(item);
            if (type === 'unrepairList') {
                this.setState({
                    unrepairList: list,
                    repairList: data
                })
            } else {
                this.setState({
                    unrepairList: data,
                    repairList: list
                })
            }            
        } else {
            alert('请先选择')
        }
    }
}
export default ListModel;
