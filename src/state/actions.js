import { NEW_MESSAGE, SET_USERNAME } from './types'
import shortid from 'shortid'

export const newMessage = text => ({
  type: NEW_MESSAGE,
  item: { id: shortid.generate(), text, timestamp: Date.now() }
})

export const setUsername = username => ({
  type: SET_USERNAME,
  username
})