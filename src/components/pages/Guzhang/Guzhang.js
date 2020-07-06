import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ModelHead from '../component/ModelHead';
import ListModel from '../component/ListModel';
const defaultDatas= {
    test: '测试数据',
    arr: [1, 3, 5, 7, 9]
}
const MyContext = React.createContext(defaultDatas);  // 创建一个全局context高阶组件，用于父级向底层全部子级和孙子级进行通信

class Guzhang extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageName: '故障信息',
            listTile: '故障列表',
            listData: [
                {checkdId: 'list-id1', checked: true, value: '电力机房突发异常'},
                {checkdId: 'list-id2', checked: false, value: '网络机房突发异常'},
                {checkdId: 'list-id3', checked: false, value: '存储库突发异常'},
                {checkdId: 'list-id4', checked: false, value: 'ECT服务突发异常'},
                {checkdId: 'list-id5', checked: false, value: '水电系统突发异常'}
            ],
            data: '',
            defaultData: `{
                test: '测试数据',
                arr: [1, 3, 5, 7, 9]
            }`
        }
    }

    componentWillMount () {

    }
    componentDidMount ()  {
        
    }
    render () {
        return (
        <div>
            <div>
                <input type="text" onChange={this.changeData}></input><button onClick={this.addData}>添加数据</button>
            </div>
            <MyContext.Provider value={this.state.defaultData}>
                <ModelHead listTile={this.state.listTile}></ModelHead>
                <ListModel list={this.state.listData}></ListModel>
            </MyContext.Provider>
        </div>
        )
    }
    changeData = (e) => {
        let val = e.target.value;
        this.setState({
            data: val
        })
    }
    addData = () => {
        let listData = this.state.listData;
        let data = this.state.data;
        if (data) {
            let obj = {
                checkdId: 'list-id'+ (listData.length+1),
                checked: false,
                value: data
            }
            listData.unshift(obj);
            this.setState({listData});
        } else {
            alert('请输入要处理的数据')
        }

    }

}
export default withRouter(Guzhang);
