import React from 'react'

export default function MessageReactions({ messageEmojis }) {
  return (
    <div>
      {
        messageEmojis ?
          messageEmojis.map( (message, index) => {
            const { id, emoji, username } = message
            return (
              <span key={id}>
                <em>{username}: </em>
                {emoji}
                { index !== (messageEmojis.length - 1) ? ', ' : null }
              </span>
            )
          })
          : null
      }
    </div>
  )
}
