import React from 'react';
import Message from './Message.js';

class MessageList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messages: this.props.messages
      }
   }

   render() {
      return (
         <div className="MessageList">
            {this.state.messages.map(element =>
               <Message message={element}/>
            )}
         </div>
      );
   }
}

export default MessageList;