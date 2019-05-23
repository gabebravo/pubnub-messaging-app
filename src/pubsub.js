import PubNub from 'pubnub'
import pubnubConfig from './pubnub.config'
// https://www.udemy.com/react-hooks-tutorial/learn/lecture/13743046#overview

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL'

export default function PubSub() {
  const pubnub = new PubNub(pubnubConfig)
  pubnub.subscribe({ channels: [MESSAGE_CHANNEL] })

  this.addListener = listenerConfig => {
    pubnub.addListener(listenerConfig)
  }

  this.publish = message => {
    console.log('pub message', message)
    pubnub.publish({
      message,
      channel: MESSAGE_CHANNEL
    })
  }
}