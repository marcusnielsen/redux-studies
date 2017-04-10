// @flow
import React from 'react'

export type todoProps = {todo: {id: string, text: string, completed: boolean}}

export default function component ({todo: {id, text, completed}}: todoProps) {
  return (
    <div>
      <div>id: {id}</div>
      <div>text: {text}</div>
      <div>completed: {completed}</div>
    </div>
  )
}
