import React from 'react';

const ChatList = (props) => {
    const {userNickName,message} = props.message;
    return (
        <div>
        { userNickName == localStorage.getItem('userNickName') ?
            <div>
                {message}
            </div>
        :
            <div style={{width:"30%", border:"1px solid black"}}>
                            {userNickName} :
                            {message}
            </div>
        }
        </div>
    );
};

export default ChatList;