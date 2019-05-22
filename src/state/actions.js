import { NEW_MESSAGE } from './types'
import shortid from 'shortid'

export const newMessage = text => ({
  type: NEW_MESSAGE,
  item: { id: shortid.generate(), text, timestamp: Date.now() }
})