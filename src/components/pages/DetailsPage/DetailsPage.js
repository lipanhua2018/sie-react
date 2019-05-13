import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Form, Row, Col, Input, Card, Icon, Table, Tooltip, Modal, notification} from 'antd';
import './DetailsPage.less';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
class DetailsPage extends Component{
    constructor (props) {
        super(props)
        this.state = {
            pageName: '详情页',
        }
    }

    componentWillMount () {

    }
    componentDidMount ()  {
        console.log(this.props)
    }
    componentWillReceiveProps () {

    }
    goBack = () => {
        this.props.history.goBack();
    }

    render () {
        const params = this.props.history.location.state;
        return (<div className="DetailsPage-root">
            <Card title="报修详情"
            extra={<div className="btn-area">
                <span onClick={this.goBack}><Icon type="rollback" />返回</span>
            </div>}
            >
            <Form labelAlign='right' className="search-from">
                <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                        <Form.Item label={`姓名`} {...formItemLayout}>
                            <Input placeholder="placeholder" value={params.repairName}/>
                        </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={6}>
                        <Form.Item label={`电话`} {...formItemLayout}>
                            <Input placeholder="placeholder" value={params.repairTel}/>
                        </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={6}>
                        <Form.Item label={`编码`} {...formItemLayout}>
                            <Input placeholder="placeholder" value={params.repairCode}/>
                        </Form.Item>
                        </Col>

                        <Col className="gutter-row" span={6}>
                        <Form.Item label={`单位`} {...formItemLayout}>
                            <Input placeholder="placeholder" value={params.repairUnit}/>
                        </Form.Item>
                        </Col>
                </Row>
            </Form>
            </Card>
        </div>)
    }
}

export default withRouter(DetailsPage);