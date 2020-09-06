import React from 'react';

class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messages: this.props.messages,
         users: []
      }
   }
   render() {
      let noOccurence;
      this.state.messages.forEach(element => {
         noOccurence = true;
         for (let i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i] === element.user) {
               noOccurence = false;
               break;
            }
         }
         if (noOccurence) this.state.users.push(element.user);
      });
      let last = this.state.messages[this.state.messages.length - 1].createdAt.slice(0, 10) + " " + this.state.messages[this.state.messages.length - 1].createdAt.slice(11, 19)
      return (
         <div className="Header">
            <span id="header-name">My Chat</span>
            <span id="participants">{this.state.users.length} participants</span>
            <span id="messages">{this.state.messages.length} messages</span>
            <span id="last-sent">last message at {last}</span>
         </div>
      );
   }
}

export default Header;