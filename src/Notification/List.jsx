import React from 'react'
import {Table, Tag, Button, Tabs} from 'antd'
import Detail from './Detail'
const TabPane = Tabs.TabPane;
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      action: {
        owner: '',
        title: '',
        type: ''
      },
      show: false
    }
  }

  showDetail = (action) => {
    this.setState({action: action}, () => {
      this.setState({show: true})
    })
  }

  modalCancel = () => {
    this.setState({show: false})
  }

  render() {
    const readColumns = [{
      title: '消息状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (<Tag color="green">{status}</Tag>)
    }, {
      title: '类型',
      dataIndex: 'type',
      key: 'type'
    }, {
      title: '发布时间',
      dataIndex: 'time',
      key: 'time'
    }, {
      title: '邀请人',
      dataIndex: 'owner',
      key: 'owner'
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (action) => (<Button type="primary" onClick={this.showDetail.bind(this, action)}>查看</Button>)
    }];
    const unreadColumns = [{
      title: '消息状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (<Tag color="red">{status}</Tag>)
    }, {
      title: '类型',
      dataIndex: 'type',
      key: 'type'
    }, {
      title: '发布时间',
      dataIndex: 'time',
      key: 'time'
    }, {
      title: '邀请人',
      dataIndex: 'owner',
      key: 'owner'
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (action) => (<Button type="primary" onClick={this.showDetail.bind(this, action)}>查看</Button>)
    }];

    let readData = [];
    let unreadData = [];

    for (let i = 0; i < 7; i++) {
      readData.push({
        key: '' + i,
        status: '已读',
        type: '团队邀请',
        time: '2018-08-11',
        owner: 'Jsom' + i,
        action: {
          title: '团队邀请',
          owner: 'Jsom' + i,
          type: 'invitation'
        }
      })

      unreadData.push({
        key: '' + i,
        status: '未读',
        type: '团队邀请',
        time: '2018-08-11',
        owner: 'Jsom' + i,
        action: {
          title: '团队邀请',
          owner: 'Jsom' + i,
          type: 'invitation'
        }
      })
    }

    const state = {
      pagination: {
        defaultPageSize: 2
      }
    }
    return (
      <div>
        <Detail
          owner={this.state.action.owner}
          title={this.state.action.title}
          type={this.state.action.type}
          visible={this.state.show}
          cancel={this.modalCancel}
        />
        <Tabs defaultActiveKey="unread">
          <TabPane tab="未读消息" key="unread">
            <Table {...state} columns={unreadColumns} dataSource={unreadData} rowKey={unreadData => unreadData.key}/>
          </TabPane>
          <TabPane tab="已读消息" key="read">
            <Table {...state} columns={readColumns} dataSource={readData} rowKey={readData => readData.key}/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default List