import React, { Component } from 'react';
// import {observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {Form, Row, Col, Input, Card, Icon, Table, Tooltip, Modal, notification} from 'antd';
import SettlementData from './data';
import './Settlement.less';
const confirm = Modal.confirm;
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
// @observer
class Settlement extends Component {
    constructor (props) {
        super(props)
        this.state = {
            pageName: '结算单',
            columns: SettlementData.columns,
            dataSource: SettlementData.data,
            searchFrom: SettlementData.searchFrom,
            visible: false,
            ModalTitle: '',
            rowData: {
                code: '',
                name: '',
                tel: '',
                unit: '',
                address: ''
            },
            disabled: false,
            selectedRows: [],
            selectedRowKeys: null,
            n: 0
        }
    }

    componentWillMount () {

    }
    componentDidMount ()  {
        
    }

    getLineBnts = (text, record) => {
        const authBtns = [{jsEvent: 'handleEdit', btnCode: 'editCode', btnName: '编辑', btnIcon: 'edit'}, 
        {jsEvent: 'handleDelete', btnCode: 'deleteCode', btnName: '删除', btnIcon: 'delete'}]
        return authBtns.map(btn => {
          return (
            <Tooltip placement="top" title={btn.btnName} key={btn.btnCode}>
              <Icon type={btn.btnIcon} key={btn.btnCode} onClick={this[btn.jsEvent].bind(this, text, record)} style={{marginRight: '10px'}} />
            </Tooltip>
          );
        });
    }
    handleEdit = (data, record) => {    // 点击编辑
        this.showModal('编辑', data);
    }
    handleDelete = (text, record) => {  // 单行删除
        const dataSource = [...this.state.dataSource];
        const self = this;
        confirm({
            title: '删除提示',
            content: '你确认要删除本行数据吗？',
            onOk() {
                const newData = dataSource.filter(item => item.code !== record.code);
                self.setState({
                    dataSource: newData
                })
            }
        })
    }
    handleDeleteAll = () => {   // 批量删除,删除思路是通过过滤当前数据里的数据的isDelete是true还是false
        const {selectedRows} = this.state;
        const dataSource = [...this.state.dataSource];
        const self = this;
        if (selectedRows.length) {
            confirm({
                title: '删除提示',
                content: '你确认要删除这些数据吗？',
                onOk() {
                const arr = dataSource.filter(item => !item.isDelete);
                    self.setState({
                        dataSource: arr,
                        selectedRows: [],
                        selectedRowKeys: null
                    })
                },
              });
        } else {
            notification.warning({
                message: '删除提示',
                description: `亲，你好像忘记选择你需要删除的数据哦！！！`
              })
        }
    }
    handleNewAdd = () => {  // 新增方法
        const data = {
            code: '',
            name: '',
            tel: '',
            unit: '',
            address: ''
        }
        this.showModal('新增', data);
    }
    showModal = (title, data) => {
        this.setState({
            visible: true,
            ModalTitle: title,
            rowData: data,
            disabled: title === '编辑' ? true : false
        });
    }
    
    handleOk = (e) => { // 确认新增和编辑
        const dataSource = [...this.state.dataSource];
        const rowData = {...this.state.rowData};
        if (this.state.ModalTitle === '新增') {
            dataSource.push(rowData)
        } else {
            dataSource.forEach((item, index) => {
                if (item.code === rowData.code) {
                    dataSource[index] = rowData;
                }
            })
        }
        this.setState({
          visible: false,
          dataSource
        });
    }
    
    handleCancel = (e) => {
        this.setState({
          visible: false,
        });
    }
    editData = (type, e) => {   // 新增和编辑时编辑数据的方法
        const rowData = {...this.state.rowData};
        rowData[type] = e.target.value;
        this.setState({rowData});
    }
    rowKey = () => {
        let result = (()=>{
            return (this.state.n++)+'A';
        })();
        return result;
    }
    render () {
        const {selectedRowKeys, dataSource} = this.state
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {  // onChange用来获取选中的数据和初始化掉已选过的数据           
                this.setState({
                    selectedRows,
                    selectedRowKeys
                })           
            },
            onSelect: (record, selected) => { // onSelect用来设置需要删除的唯一标识符isDelete
                dataSource.forEach(item => {
                    if (item.code === record.code) {
                        item.isDelete = selected;
                    }
                })
            },
            selectedRowKeys // 滞空选中的数据
        };
        return (
            <div className="Settlement-root">
            <Card title="查询条件"
            extra={<div className="btn-area">
                <span><Icon type="search" />查询</span>
                <span><Icon type="reload" />重置</span>
            </div>}
            >
            <Form labelAlign='right' className="search-from">
                <Row gutter={16}>
                    {this.state.searchFrom.map(item => {
                        return(
                        <Col className="gutter-row" key={item.key} span={6}>
                        <Form.Item label={item.label} {...formItemLayout}>
                            <Input placeholder="placeholder" />
                        </Form.Item>
                        </Col>)
                    })}
                </Row>
            </Form>
            </Card>
            <Card className="table-card" title="结算单位"
            extra={<div className="btn-area">
                <span onClick={this.handleDeleteAll}><Icon type="delete" />删除</span>
                <span onClick={this.handleNewAdd}><Icon type="plus" />新增</span>
            </div>}>
                <Table bordered rowSelection={rowSelection} dataSource={this.state.dataSource} columns={this.state.columns.concat({
                    title: '操作',
                    key: 'action',
                    fixed: 'right',
                    width: 100,
                    render: (text, record) => this.getLineBnts(text, record)
                    })}></Table>
            </Card>
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
            </div>
        )
    }
}

export default withRouter(Settlement);
