import React from 'react';

class Header extends React.Component {
   render() {
      let messages = this.props.messages;
      let users = [];
      let noOccurence;
      messages.forEach(element => {
         noOccurence = true;
         for (let i = 0; i < users.length; i++) {
            if (users[i] === element.user) {
               noOccurence = false;
               break;
            }
         }
         if (noOccurence) users.push(element.user);
      });
      let last = messages[messages.length - 1].createdAt.slice(0, 10) + " " + messages[messages.length - 1].createdAt.slice(11, 19);
      return (
         <div className="Header">
            <span id="header-name">My Chat</span>
            <span id="participants">{users.length} participants</span>
            <span id="messages">{messages.length} messages</span>
            <span id="last-sent">last message at {last}</span>
         </div>
      );
   }
}

export default Header;