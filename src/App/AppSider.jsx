import React from 'react'
import { Menu, Layout, Icon } from 'antd'
import {withRouter} from 'react-router-dom';
const Sider = Layout.Sider
class AppSider extends React.Component {
  constructor(props) {
    super(props);
    this.SiderList = [
      {key: 'dashboard', title: '控制中心', icon: 'pie-chart'},
      {key: 'user', title: '个人中心', icon: 'user'},
      {key: 'notification', title: '消息中心', icon: 'notification'},
      {key:'groups',title:'团队管理',icon:'team'}
    ]
    // this.Groups=[
    //   {key:'team',title:'团队信息'},
    //   {key:'member',title:'成员信息'}
    // ];
  }

  getSiderKey = () => {
    let sider = this.SiderList.find(o => this.props.location.pathname.match(o.key)) || {}
    return sider.key
  }

  siderClick = ({item, key, keyPath}) => {
    window.location.href = '/' + key
  }

  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className="logo">{!this.props.collapsed ? '人事管理模版' : '' }</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.getSiderKey()]} onClick={this.siderClick}>
          {this.SiderList.map(o =>
            <Menu.Item key={o.key}>
              <Icon type={o.icon} />
              <span>{o.title}</span>
            </Menu.Item>)
          }
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(AppSider)