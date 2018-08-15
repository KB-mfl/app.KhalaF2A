import React from 'react'
import {Table, Button, Tabs} from 'antd'
import TeamProfile from './TeamProfile'
// import MemberProfile from './MemberProfile'
// import {BrowserRouter as Router,Route,Link,} from 'react-router-dom'
// import { Redirect } from 'react-router-dom';
const TabPane = Tabs.TabPane;
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect:false,
      action: {
        title: '',
        type: ''
      },
      TeamData:{
        name: '',
        owner: '',
        time: ''
      },
      MemberData:{
        name:'',
        sex:'',
        age:'',
        status:'',
        time:'',
        team:''
      },
      show: false
    }
  }

  showTeamProfile = (action) => {
    this.setState({action: action}, () => {
      this.setState({show: true})
    })

  };

  showMemberProfile = (action) => {
    this.setState({action: action}, () => {
      this.setState({show: true})
    })
    window.location.href='/groups/members'
  };

  modalCancel = () => {
    this.setState({show: false})
  };

  render() {
    const teamInforColumns = [{
      title:'团队名称',
      dataIndex:'name',
      key:'name'
    },{
      title: '创建人',
      dataIndex: 'owner',
      key: 'owner'
    }, {
      title: '创建时间',
      dataIndex: 'time',
      key: 'time'
    }, {
      title: '团队简介',
      dataIndex: 'action',
      key: 'action',
      render: (action) => (<Button type="primary" onClick={this.showTeamProfile.bind(this, action)}>查看</Button>)
    }];
    const memberColumns = [{
      title:'团队名称',
      dataIndex:'name',
      key:'name'
    },{
      title:'成员查看',
      dataIndex:'action',
      key:'action',
      render: (action) => (<Button type="primary" onClick={this.showMemberProfile.bind(this, action)}>查看</Button>)
    }];
    let teamInforData = [];
    let memberData = [];

    for (let i = 0; i < 7; i++) {
      teamInforData.push({
        key: '' + i,
        name:'Lakers',
        owner: 'james',
        time: '2018-08-11',
        action: {
          title: '团队简介',
          type: 'checkTeam'
        }
      });

      memberData.push({
        key:''+i,
        name:'Lakers',
        action:{
          title:'成员查看',
          type:'checkMember'
        }
      })
    }

    const state = {
      pagination: {
        defaultPageSize: 3
      }
    }
    // console.log(this.state.action.type)
    return (
      <div>
        <Tabs defaultActiveKey="teamInfor">
          <TabPane tab="团队信息" key="teamInfor">
            <Table {...state} columns={teamInforColumns} dataSource={teamInforData} rowKey={teamInforData => teamInforData.key}/>
          </TabPane>
          <TabPane tab="成员信息" key="member">
            <Table {...state} columns={memberColumns} dataSource={memberData} rowKey={memberData => memberData.key}/>
          </TabPane>
        </Tabs>
        {(this.state.action.type==='checkTeam'&&
        <TeamProfile
          title={this.state.action.title}
          type={this.state.action.type}
          visible={this.state.show}
          cancel={this.modalCancel}
        />)}
      </div>
    )
  }
}

export default List