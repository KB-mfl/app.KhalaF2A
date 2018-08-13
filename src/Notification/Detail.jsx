import React from 'react'
import { Modal, Button} from 'antd'
class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  handleCancel = () => {
    this.props.cancel()
  }

  render() {
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onCancel={this.handleCancel}
        footer={null}
      >
        {(
          this.props.type === 'invitation' &&
          <div>
            <p>邀请人: {this.props.owner}</p>
            <Button type="primary" block style={{marginBottom: '20px'}}>同意</Button>
            <Button type="danger" block>拒绝</Button>
          </div>
        )}
      </Modal>
    )
  }
}

export default Detail