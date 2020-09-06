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

   dateDifference(current, previous) {
      console.log(current);
      console.log(previous);
      if (previous === "") return false;
      if (Number(current.slice(0, 4)) > Number(previous.slice(0, 4))) return true;
      if (Number(current.slice(5, 7)) > Number(previous.slice(5, 7))) return true;
      if (Number(current.slice(8, 10)) > Number(previous.slice(8, 10))) return true;
      return false;
   }

   render() {
      let previousDate = "";
      return (
         <div className="MessageList">
            {this.state.messages.map((element, index, array) => {
                  if (index > 0 && this.dateDifference(array[index].createdAt, array[index - 1].createdAt)) {
                     return <><div className="date-divider">{element.createdAt.slice(0, 10)}</div><Message message={element} userId={this.state.userId} deleteMessage={this.props.deleteMessage} likeMessage={this.props.likeMessage} editMessage={this.props.editMessage}/></>;
                  }
                  previousDate = element.createdAt;
                  return (<Message message={element} userId={this.state.userId} deleteMessage={this.props.deleteMessage} likeMessage={this.props.likeMessage} editMessage={this.props.editMessage}/>);
               }
            )}
         </div>
      );
   }
}

export default MessageList;