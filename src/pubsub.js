import PubNub from 'pubnub'
import pubnubConfig from './pubnub.config'
// https://www.udemy.com/react-hooks-tutorial/learn/lecture/13743046#overview

const pubnub = new PubNub(pubnubConfig)

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL'

pubnub.subscribe({ channels: [MESSAGE_CHANNEL] })

pubnub.addListener({
  message: messageObject => {
    console.log('messageObject', messageObject)
  }
})

pubnub.publish({
  message: 'foo',
  channel: MESSAGE_CHANNEL
})