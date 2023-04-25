import React from 'react'

const ModalPopup = () => {
  return (
        <div>
          <h1>Popup Please</h1>
    
    <a href="#popup1" class="btn">Reveal Popup</a>
    <div id="popup1" class="popup">
      <a href="#" class="close">&times;</a>
      <h2>The Popup Has Arrived</h2>
      <p>This popup can be closed by clicking the fancy <b>×</b> in the top right corner or by clicking outside the popup box!</p>
    </div>
    <a href="#" class="close-popup"></a>
        </div>
  )
}

export default ModalPopup