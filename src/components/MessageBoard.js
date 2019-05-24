import React from 'react'
import { useAppContext } from './hooks'
import CreateReaction from './CreateReaction'
import MessageReactions from './MessageReactions'

export default function MessageBoard() {
  const { state: { messages, emojisMap } } = useAppContext()
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
              <CreateReaction messageId={id} />
              <MessageReactions messageEmojis={emojisMap[id]} />
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}
