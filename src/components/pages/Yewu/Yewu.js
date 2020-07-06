import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
// import Yewulist from '../component/YewuList';
import Listui from '../component/Listui';
import { Input, notification } from 'antd';
const { Search } = Input;

class Yewu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageName: '业务跟进',
            yewuList: [{id: 1, checkd: false, name: '快递业务'}, {id: 2, checkd: false, name: '金融业务'}, {id: 3, checkd: false, name: '运输业务'},
            {id: 4, checkd: false, name: '服务业务'}, {id: 5, checkd: false, name: '保险业务'}, {id: 6, checkd: false, name: '制造业务'}
        ]
        }
    }

    componentWillMount () {

    }
    componentDidMount ()  {
        
    }
    render () {
        return (<div className="yewu-box">
            <h2>{this.state.pageName}</h2>
            <Search placeholder="input search text" onSearch={this.handleSearch} enterButton></Search>
            <Listui list={this.state.yewuList} onDelete={this.onDelete} handleCheck={this.handleCheck}></Listui>
        </div>)
    }

    handleSearch = (value) => {
        if (value) {
            let data = [...this.state.yewuList];
            let obj = {
                id: this.state.yewuList.length + 1,
                checkd: false,
                name: value
            }
            data.unshift(obj);
            this.setState({
                yewuList: data
            }, function () {
                console.log(value, this.state.yewuList, 44)
            })
        } else {
            alert('请输入你的业务名称')
        }

        // console.log(value, this.state.yewuList)
    }
    onDelete = (item) => {
        if (item.checkd) {
            console.log(this)
        } else {
            notification['warning']({
                message: '提示',
                description:
                  '请先选择，才可以进行删除操作',
              });
        }
        console.log(item)
    }
    handleCheck = (even) => {
        console.log(even, 66)
    }
}
export default withRouter(Yewu);
