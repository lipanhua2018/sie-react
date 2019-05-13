import React, { Component } from 'react';
import {Form, Input, Modal} from 'antd';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
class Dialog extends Component{
    constructor(props) {
        super(props)
        this.state = {
            modelName: '对话框',
            ModalTitle: '',
            visible: false,
            disabled: false,
            rowData: {
                code: '',
                name: '',
                tel: '',
                unit: '',
                address: ''
            }
        }
    }

    componentWillMount () {

    }
    componentDidMount ()  {
        
    }
    componentWillReceiveProps (nextProps) {
        // console.log(nextProps, 'nextProps')
        this.setState({
            visible: nextProps.base.visible,
            ModalTitle: nextProps.base.ModalTitle,
            disabled: nextProps.base.disabled,
            rowData: nextProps.base.rowData
        })
    }
    handleOk = (e) => { // 确认新增和编辑
        this.props.handleOk(this.state.rowData);
        this.handleCancel();
    }
    
    handleCancel = (e) => {
        this.props.closeDialo(false);
    }
    editData = (type, e) => {   // 新增和编辑时编辑数据的方法
        const rowData = {...this.state.rowData};
        rowData[type] = e.target.value;
        this.setState({rowData});
    }

    render() {
        return (<div>
            <Modal
                title={this.state.ModalTitle}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <Form>
                    <Form.Item label={`报修编码`} {...formItemLayout}>
                        <Input placeholder="placeholder" disabled={this.state.disabled} value={this.state.rowData.code} onChange={this.editData.bind(this, 'code')} />
                    </Form.Item>
                    <Form.Item label={`姓名`} {...formItemLayout}>
                        <Input placeholder="placeholder" value={this.state.rowData.name} onChange={this.editData.bind(this, 'name')} />
                    </Form.Item>
                    <Form.Item label={`电话`} {...formItemLayout}>
                        <Input placeholder="placeholder" value={this.state.rowData.tel} onChange={this.editData.bind(this, 'tel')} />
                    </Form.Item>
                    <Form.Item label={`单位`} {...formItemLayout}>
                        <Input placeholder="placeholder" value={this.state.rowData.unit} onChange={this.editData.bind(this, 'unit')} />
                    </Form.Item>
                    <Form.Item label={`地址`} {...formItemLayout}>
                        <Input placeholder="placeholder" value={this.state.rowData.address} onChange={this.editData.bind(this, 'address')} />
                    </Form.Item>
                </Form>
                </Modal>
        </div>)
    }
}

export default Dialog;