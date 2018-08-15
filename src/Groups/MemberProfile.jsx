import React from 'react'
import {Table} from 'antd';
import {Button,Icon} from 'antd'
class MemberProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:'',
      showTable:true
    }
  }
  BackToTable=()=>{
    window.location.href='/groups'
  }
  render() {
    const columnsMember = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex'
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    }, {
      title: '身份',
      dataIndex: 'status',
      key: 'status'
    }, {
      title: '加入时间',
      dataIndex: 'time',
      key: 'time'
    },{
      title:'团队',
      dataIndex:'team',
      key:'team'
    }];
    const MembersData = [{
      key: '1',
      name: 'james',
      sex: 'man',
      age: '30',
      status: 'leader',
      time: '2018-8-13',
      team:'Lakers'
    }, {
      key: '2',
      name: 'kobe',
      sex: 'man',
      age: '30',
      status: 'leader',
      time: '2018-8-13',
      team:'Lakers'
    }, {
      key: '3',
      name: 'jordan',
      sex: 'man',
      age: '30',
      status: 'leader',
      time: '2018-8-13',
      team:'Lakers'
    },{
      key: '4',
      name: 'curry',
      sex: 'man',
      age: '30',
      status: 'leader',
      time: '2018-8-13',
      team:'Lakers'
    }]
    const Pages={
      pagination: {
        defaultPageSize: 3
      }
    }
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.BackToTable.bind(this)}>
            <Icon type="left"/>Go back
          </Button>
        </div>
        <Table
          {...Pages}
          columns={columnsMember}
          dataSource={MembersData}
          showTable={this.props.showTable}
        />
      </div>
    )
  }
}
export default MemberProfile
