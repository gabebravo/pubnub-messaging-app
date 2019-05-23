import React from 'react'
import { useAppContext } from './hooks'
import { setUsername } from '../state/actions'

export default function SetUsername() {
  const { dispatch, state: { username } } = useAppContext()

  const updateUsername = ev => {
    const username = ev.target.value
    dispatch(setUsername(username))
  }

  return (
    <div>
      <h3>Username</h3>
      <input type="text" onChange={updateUsername} value={username}/>
    </div>
  )
}
