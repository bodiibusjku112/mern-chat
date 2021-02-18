import React from 'react';

class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messages: this.props.messages
      }
   }
   render() {
      let noOccurence, users = [];
      this.state.messages.forEach(element => {
         noOccurence = true;
         for (let i = 0; i < users.length; i++) {
            if (users[i] === element.user) {
               noOccurence = false;
               break;
            }
         }
         if (noOccurence) users.push(element.user);
      });
      let last = this.state.messages[this.state.messages.length - 1].createdAt.slice(0, 10) + " " + this.state.messages[this.state.messages.length - 1].createdAt.slice(11, 19)
      return (
         <div className="Header">
            <span id="header-name">My Chat</span>
            <span id="participants">{users.length} participants</span>
            <span id="messages">{this.state.messages.length} messages</span>
            <span id="last-sent">last message at {last}</span>
         </div>
      );
   }
}

export default Header;