import React, { useState } from 'react'

export default function SetUsername() {
  return (
    <div>
      <h3>Username</h3>
      <input type="text" onChange={updateUsername} value={}/>
    </div>
  )
}
