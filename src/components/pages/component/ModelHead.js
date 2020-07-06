import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModelHead extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            modelName: '故障信息',
            
            
        }
    }

    componentWillMount () {

    }
    componentDidMount ()  {
        
    }
    render () {
        return (<div>
            <h2>{this.props.listTile}</h2>   
        </div>)
    }


}

ModelHead.defaultProps = {  // 给子组件设置默认props数据，如果父组件未传入 则使用默认值
    listTile: '列表标题'
}
ModelHead.propTypes = { // 对传入的数据  定义默认的数据类型
    listTile: PropTypes.string
}
export default ModelHead;
