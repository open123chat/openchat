import React from 'react';
import '../../scss/modal.scss';
const ChatCreateModal = ({showCreateModal}) => {
    
    
    return (
    <div className="modal__container"  overlayClassName="Overlay">
        
        <headers className="madal-Header">
              <h1>채팅방 생성</h1>
              <button
                style={{ backgroundColor: 'white', border: '0px', marginTop: '2px' }}
                onClick={showCreateModal}
              >X
              </button>
            </headers>
        <div className="modal-content">
            <div className="modal-content-display">
                <div>채팅방 명</div>
                <div>
                    <input />
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
    );
};

export default ChatCreateModal;