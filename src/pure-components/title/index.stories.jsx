import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Title from './index'

storiesOf('title', module)
  .add('default', () => (
    <Title>default</Title>
  ))
