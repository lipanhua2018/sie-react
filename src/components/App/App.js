import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import RepairPerson from '../pages/RepairPerson/RepairPerson';
import Settlement from '../pages/Settlement/Settlement';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import Guzhang from '../pages/Guzhang/Guzhang';
import Yewu from '../pages/Yewu/Yewu';
import Addorder from '../pages/Addorder/Addorder';
import {Layout, Menu, Breadcrumb, Icon, notification} from 'antd';
import AppData from './data';
import './App.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageName: 'App',
      curPosition: ['业务管理', '报修人'],
      pageData: {
        // src: require('../../static/img/commonImg/logo.png')
      }
    }
  }

  menuItem = (data) => {
    const {keyPath} = data;
    const curPosition = [];
    for (const item of AppData.menuData) {
        if (item.key === keyPath[1]) {
          curPosition.push(item.title);
          item.childMenu.forEach(cur => {
            if (cur.key === keyPath[0]) {
              curPosition.push(cur.name);
              if (cur.path === '/') {
                notification.warning({
                  message: '温馨小提示',
                  description: `${cur.name}页面正在开发当中，请留意通知，敬请期待。`
                })
              }
            }
          })
        }
    }
    this.setState({curPosition})
  }

  onOpenChange = (key) => {
    console.log(key)
  }

  headMenu = (item) => {
    console.log(item)
  }


  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['system-001']}
              onClick={this.headMenu}
              style={{ lineHeight: '64px' }}
            >
            {AppData.headMenu.map(item => {
              return(<Menu.Item key={item.key}>{item.name}</Menu.Item>)
            })}
            </Menu>
          </Header>
          <Router>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['001']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                onClick={this.menuItem}
                onOpenChange={this.onOpenChange}
              >
                {AppData.menuData.map((item) => {
                  return (<SubMenu key={item.key} title={<span><Icon type={item.iconType} />{item.title}</span>}>
                      {item.childMenu.map(cur => {
                          return (<Menu.Item key={cur.key}><NavLink to={cur.path}>{cur.name}</NavLink></Menu.Item>)
                      })}
                  </SubMenu>)
                })}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }} key='1'>
                {this.state.curPosition.map(item => {
                  return (<Breadcrumb.Item key={item.key}>{item}</Breadcrumb.Item>)
                })}
              </Breadcrumb>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 600,}}>
            <Switch>
                <Route exact path= '/' component = {RepairPerson}></Route>
                <Route exact path= '/RepairPerson' component = {RepairPerson}></Route>
                <Route exact path= '/Settlement' component = {Settlement}></Route>
                <Route exact path= '/DetailsPage' component = {DetailsPage}></Route>
                <Route exact path= '/Guzhang' component = {Guzhang}></Route>
                <Route exact path= '/Yewu' component = {Yewu}></Route>
                <Route exact path= '/Addorder' component = {Addorder}></Route>
            </Switch>
            </Content>
            </Layout>
          </Layout>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
