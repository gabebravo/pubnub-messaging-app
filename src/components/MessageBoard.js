import React from 'react'
import { useAppContext } from './hooks'

export default function MessageBoard() {
  const { state: { messages } } = useAppContext()
  return (
    <div>
      {
        messages.map( message => {
          const { id, text, username, timestamp } = message
          return (
            <div key={id}>
              <h4>{new Date(timestamp).toLocaleString()}</h4>
              <p>{text}</p>
              <h4>- {username}</h4>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}
