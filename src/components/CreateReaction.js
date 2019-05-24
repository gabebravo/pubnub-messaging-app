import React from 'react'
import { EMOJIS } from '../state/types'
import { useAppContext } from './hooks'
import { emojiSetter } from '../state/actions'

export default function CreateReaction({ messageId }) {
  const { state: { username }, pubsub: { publish } } = useAppContext()

  const publishEmoji = ({ type, emoji }) => {
    publish(emojiSetter({ type, emoji, username, messageId }))
  }

  return (
    <div className="CreateReaction">
      {
        EMOJIS.map( em => {
          const { type, emoji } = em
          return (
            <span key={type} onClick={() => publishEmoji({ type, emoji })}>{emoji}</span>
          )
        })
      }
    </div>
  )
}
