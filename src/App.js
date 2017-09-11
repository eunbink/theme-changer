import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }

  updateColor(newColor) {
    this.setState({
      fontColor: newColor
    })
  }

  updateSize(newSize) {
    this.setState({
      fontSize: newSize
    })
  }
  updateFamily(newFamily) {
    this.setState({
      fontFamily: newFamily
    })
  }
  updateEditStatus(newStatus) {
    this.setState({
      allowEdit: newStatus
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">

          <EditToggle update={this.updatedEditStatus} />

          <ColorChanger update={this.updateColor}
            allowEdit={this.updatedEditStatus} />

          <SizeChanger update={this.updateSize}
            allowEdit={this.updatedEditStatus} />


          <FamilyChanger update={this.updateFamily}
            allowEdit={this.updatedEditStatus} />

        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
}

export default App;
