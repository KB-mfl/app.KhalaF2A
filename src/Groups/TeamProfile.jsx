import React from 'react'
import { Modal} from 'antd'
class TeamProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  handleCancel = () => {
    this.props.cancel()
  };

  render() {
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onCancel={this.handleCancel}
        footer={null}
      >
        {/*{console.log(this.props.type)}*/}
        {(
          this.props.type === 'checkTeam' &&
          <div>
            <p>this is a file</p>
          </div>
        )}
      </Modal>
    )
  }
}

export default TeamProfile