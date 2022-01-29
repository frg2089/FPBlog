import React from 'react'
import ReactDOM from 'react-dom'
import { DocumentCard } from '@fluentui/react'
import { Frame } from './pages/Frame'

export class Application {
  async init () {
    ReactDOM.render((
      <Frame/>
    ), document.querySelector('app'))
  }
}
