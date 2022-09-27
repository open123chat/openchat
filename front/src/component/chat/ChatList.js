import React from 'react';

const ChatList = (props) => {
    const {username,message} = props.message;
    return (
        <div style={{width:"30%", border:"1px solid black"}}>
                            {username} :
                            {message}
        </div>
    );
};

export default ChatList;