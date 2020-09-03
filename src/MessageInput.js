import React from 'react';

class MessageInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.sendMessage = this.sendMessage.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value})
   }

   sendMessage() {
      this.props.sendMessage(this.state.value);
      this.setState({value: ""})
   }

   render() {
      return (
         <div className="MessageInput">
            <input type="text" name="Message" value={this.state.value} onChange={this.handleChange} id="input-field"></input>
            <button onClick={this.sendMessage} id="send-button">Send</button>
         </div>
      );
   }
}

export default MessageInput;