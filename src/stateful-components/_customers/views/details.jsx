import React from 'react'

export default function component ({id, name, active}) {
  return (
    <div>
      <div>id: {id}</div>
      <div>name: {name}</div>
      <div>active: {active.toString()}</div>
    </div>
  )
}
