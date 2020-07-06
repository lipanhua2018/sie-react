import React, { Component } from 'react';

class YewuList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modelName: '业务列表',
            listData: []
        }
    }

    componentWillMount () {
        const list = this.props.list;
        this.setState({
            listData: list
        })
        console.log(list);
    }
    componentDidMount ()  {
        
    }
    componentWillReceiveProps(nextProps, prevProps) {
        console.log(nextProps, 28, prevProps)
        let {list} = nextProps;
        this.setState({
            listData: list
        }, function () {
            // console.log(this.state.listData, 28)
            // this.forceUpdate();  // 强制刷新方法
        })
    }
    shouldComponentUpdate(newProps, oldProps) {
        // let list = [...newProps.list]
        console.log(newProps, 33, oldProps);
        return true // 有变化则返回true 刷新界面
    }
    render () {
        const {listData} = this.state; 
        return (<div>
            <h3>待处理业务</h3>
            <ul>
                {listData.map((item,index) => {
                    return (
                        <li key={index} className="yewu-list">
                            <input defaultChecked={item.checkd} type="checkbox" />
                            <span>{item.id}</span>
                            <span>{item.name}</span>
                            <input type="button" value="已处理" />
                            <input type="button" value="删除" />
                        </li>
                    )
                })}
            </ul>
            <h3>已处理业务</h3>
        </div>)
    }


}
export default YewuList;
