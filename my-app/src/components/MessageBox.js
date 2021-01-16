import React from 'react'

function MessageBox() {
    return (
        <div >
            <form className='messageBox'>
            <div>
                <label className='bottom-bar'>
                     <textarea placeholder='mesajınız buraya lütfen'></textarea>
                 </label>
             </div>
             <input type='submit' value='Gönder'/>  
            </form>
        </div>
    )
}


export default MessageBox