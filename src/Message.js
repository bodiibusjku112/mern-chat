import React from 'react';

class Message extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         message: this.props.message
      }
   }

   render() {
      return (
         <div className="Message">
            <div className="message-owner">{this.state.message.user}</div>
            <div className="message-text">{this.state.message.text}</div>
            <div className="message-time">{this.state.message.createdAt}</div>
         </div>
      );
   }
}

export default Message;