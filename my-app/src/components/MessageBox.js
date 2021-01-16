import React from 'react'
import ChatService from '../services/ChatService'

function MessageBox() {

    let service = new ChatService();

    const sendMessage = (message)=>{
        let messageBox = document.getElementById('messageBox');
        let messageString = messageBox.value;
        messageBox.value ="";
        
        console.log(messageString);
    };

    return (
        <div className='msg-contain'>
            <div className='messageBox'>
		<div className='capsule'>
                	<label className='bottom-bar'>
                  		<textarea id = "messageBox" placeholder='mesajınız buraya lütfen'></textarea>
                	</label>
            	</div>
            	<input type='button' value='Gönder' onClick={() => sendMessage("Hello")} />  
            </div>
 	</div>
    )
}


export default MessageBox
