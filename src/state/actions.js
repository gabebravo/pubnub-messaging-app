import { NEW_MESSAGE, SET_USERNAME } from './types'
import shortid from 'shortid'

export const newMessage = ({ text, username }) => ({
  type: NEW_MESSAGE,
  item: { id: shortid.generate(), text, username, timestamp: Date.now() }
})

export const setUsername = username => ({
  type: SET_USERNAME,
  username
})

export const emojiSetter = ({ type, emoji, username, messageId }) => ({
  type, item: { id: shortid.generate(), timestamp: Date.now(), emoji, username, messageId }
})