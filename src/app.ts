import { createApp } from 'vue'
import Frame from './AppFrame.vue'
import './styles.scss'
import {
  fluentCard,
  provideFluentDesignSystem
} from '@fluentui/web-components'

provideFluentDesignSystem()
  .register(
    fluentCard()
  )
createApp(Frame).mount('app')
