import React from 'react'

function MessageBox() {
    return (
        <div className='msg-contain' >
            <form className='messageBox'>
                <div className='capsule'>
                    <label className='bottom-bar'>
                         <textarea placeholder='mesajınız buraya lütfen'></textarea>
                     </label>
                     <input className='button' type='submit' value='Gönder'/>  
                </div>
             
            </form>
        </div>
    )
}


export default MessageBox