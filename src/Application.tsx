import React from 'react'
import ReactDOM from 'react-dom'
import { DocumentCard } from '@fluentui/react'

export class Application {
  async init () {
    ReactDOM.render((
      <DocumentCard>
        <h1>hello world</h1>
      </DocumentCard>
    ), document.querySelector('div.root'))
  }
}
