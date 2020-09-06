import React from 'react';

class EditMessage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: this.props.messageValue,
         messageId: this.props.messageId
      }

      this.handleChange = this.handleChange.bind(this);
      this.saveMessage = this.saveMessage.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value})
   }

   saveMessage() {
      this.props.editMessage(this.state.messageId, this.state.value);
   }

   render() {
      if (!this.props.show) return null;
      return <div id="edit-component">
         <div id="edit-window">
            <input type="text" name="Message" value={this.state.value} onChange={this.handleChange} id="input-field"></input>
            <button onClick={this.saveMessage} id="send-button">Save</button>
         </div>
      </div>
   }
}

export default EditMessage;