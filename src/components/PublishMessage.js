import React, { useState } from 'react'
import { newMessage } from '../state/actions'

export default function PublishMessage({ dispatch }){
  const [text, setText] = useState('')

  const updateText = ev => {
    setText(ev.target.value)
  }

  const publishMessage = () => {
    dispatch(newMessage(text))
    setText('')
  }

  const handleKeyPress = ev => {
    if(ev.key === 'Enter'){
      publishMessage()
    }
  }

  return(
    <div>
      <h3>Got something to say?</h3>
      <input value={text} onChange={updateText} onKeyPress={handleKeyPress}/>
      {' '}
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  )
}