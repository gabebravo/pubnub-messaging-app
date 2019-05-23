import React from 'react'
import { EMOJIS } from '../state/types'

export default function CreateReaction() {
  return (
    <div className="CreateReaction">
      {
        EMOJIS.map( em => {
          const { type, emoji } = em
          return (
            <span key={type}>{emoji}</span>
          )
        })
      }
    </div>
  )
}
