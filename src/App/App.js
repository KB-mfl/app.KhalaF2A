import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import lazyload from '../lazyload.js';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.less'
import AppSider from './AppSider';
const { Header, Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <Layout style={{minHeight: '100vh'}}>
          <AppSider collapsed={this.state.collapsed}/>
          <Layout>
            <Header style={{background: '#fff', padding: 0}}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{margin: '24px 16px', padding: 24, background: '#fff'}}>
              <Route exact path="/" component={() => <Redirect to="/dashboard"/>}/>
              <Route exact path="/dashboard" component={lazyload(() => import('../Dashboard/dashboard'))}/>
              <Route exact path="/user" component={lazyload(() => import('../User/profile'))}/>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
