import { NEW_MESSAGE, SET_USERNAME, EMOJIS } from './types'

export const initialState = {
  messages: [],
  username: 'anonymous',
  emojisMap: {}
}

const EMOJI_TYPES = EMOJIS.map( EMOJI => EMOJI.type )

const reducer = (state, action) => {
  if( EMOJI_TYPES.includes(action.type) ){
    let emojisMap;
    const { messageId } = action.item
    const messageEmojis = state.emojisMap[messageId]

    if(messageEmojis){
      emojisMap = {
        ...state.emojisMap,
        [messageId]: [...messageEmojis, action.item]
      }
    } else {
      emojisMap = {
        ...state.emojisMap,
        [messageId]: [action.item]
      }
    }

    return {...state, emojisMap}
  }

  switch(action.type){
    case NEW_MESSAGE: 
      return { ...state, messages: [...state.messages, action.item] }
    case SET_USERNAME: 
      return { ...state, username: action.username }
    // case EMOJIS[action.type]: 
    //   return { ...state, username: action.username }
    default:
      return state
  }
}

export default reducer