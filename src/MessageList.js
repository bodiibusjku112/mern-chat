import React from 'react';
import Message from './Message.js';

class MessageList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messages: this.props.messages,
         userId: this.props.userId
      }
   }

   render() {
      let previousDate = "";
      return (
         <div className="MessageList">
            {this.state.messages.map(element => {
                  return (<Message message={element} userId={this.state.userId} previousDate={previousDate}/>);
               }
            )}
         </div>
      );
   }
}

export default MessageList;