import React, { Component } from 'react';
// import {observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {Form, Row, Col, Input, Card, Icon, Table, Tooltip, Modal, notification} from 'antd';
import RepairData from './data';
import Dialog from '../component/Dialog';
import './RepairPerson.less';
// import { instanceOf } from 'prop-types';

const confirm = Modal.confirm;
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
class RepairPerson extends Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: false,
            pageName: '报修人',
            columns: RepairData.columns,
            dataSource: RepairData.data,
            searchFrom: RepairData.searchFrom,
            selectedRows: [],
            selectedRowKeys: null,
            childData: {
                visible: false,
                ModalTitle: '',
                disabled: false,
                rowData: {
                    code: '',
                    name: '',
                    tel: '',
                    unit: '',
                    address: ''
                }
            },
            searchInfo: {
                repairName: '',
                repairTel: '',
                repairUnit: '',
                repairCode: '',
            },
            n: 0,
            goDetail: false
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
        // console.log('点击删除 ---> RepairPerson -72', text, record);
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
        const childData = {...this.state.childData};
        childData.ModalTitle = title;
        childData.visible = true;
        childData.disabled = (title === '编辑' ? true : false);
        childData.rowData = data
        this.setState({
            childData,
            visible: !this.state.visible
        });
        // this.refs.Dialog.showModal();
    }
    closeDialo = (bool) => {
    let childData = {...this.state.childData}
        childData.visible = false;
        this.setState({
            visible: bool,
            childData: childData
        })
    }
    handleOk = (rowData) => { // 确认新增和编辑
        const dataSource = [...this.state.dataSource];
        if (this.state.childData.ModalTitle === '新增') {
            dataSource.push(rowData)
        } else {
            dataSource.forEach((item, index) => {
                if (item.code === rowData.code) {
                    dataSource[index] = rowData;
                }
            })
        }
        this.setState({
          dataSource
        });
    }

    goSearchDetails = (e) => {
        e.preventDefault();
        // js跳转方法: js方法体里使用this.props.history.push('/DetailsPage')
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.history.push('/DetailsPage', {...values, 'params': '自定义数据'});
                // console.log('Received values of form: ', values);
            }
          });
    }
    searchInfo = (item, e) => {  // 搜索条件数据绑定
        if (e.target.value) {
            const info = {...this.state.searchInfo}
                info[item.key] = e.target.value;
            this.setState({
                searchInfo: info
            }, () => {
                console.log(this.state.searchInfo)
            });
        } else {
            this.openNotificationWithIcon('error', {title: '输入提示', content: `oh my god!!! 你好像没有输入${item.label}`})
        }
    }
    openNotificationWithIcon = (type, tip) => {
        notification[type]({
          message: tip.title,
          description: tip.content,
        });
    }
    rowKey = () => {
        let n = 0;
        let result = (()=>{
            return (n++)+'B';
        })();
        return result;
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        // console.log(getFieldDecorator, 193, this.props, setFieldsValue)
        const {selectedRowKeys, dataSource} = this.state;
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
            <div className="RepairPerson-root">
            <Card title="查询条件"
            extra={<div className="btn-area">
                <span onClick={this.goSearchDetails}><Icon type="search" />查询</span>
                <span><Icon type="reload" />重置</span>
            </div>}
            >
            <Form labelAlign='right' className="search-from">
                <Row gutter={16}>
                    {this.state.searchFrom.map(item => {
                        return(
                        <Col className="gutter-row" key={item.key} span={6}>
                            <Form.Item label={item.label} {...formItemLayout}>
                                {/* <Input placeholder="placeholder" onBlur={this.searchInfo.bind(this, item)} /> */}
                                {getFieldDecorator(item.key, {
                                    rules: [{ required: true, message: `请输入你的${item.label}` }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>)
                    })}
                </Row>
            </Form>
            </Card>
            <Card className="table-card" title="报修人"
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
                {/* {this.state.visible?<Dialog base={this.state.childData} closeDialo={this.closeDialo} ref="Dialog"></Dialog>:null} */}
                <Dialog base={this.state.childData} closeDialo={this.closeDialo} handleOk={this.handleOk} ref="Dialog"></Dialog>
            </div>
        )
    }
}
// 这里withRouter其实可以不用
export default Form.create({ name: 'register' })(withRouter(RepairPerson));
