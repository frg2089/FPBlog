import { createApp } from 'vue'
import Frame from './AppFrame.vue'
import './styles.scss'
import {
  fluentCard,
  fluentDesignSystemProvider,
  provideFluentDesignSystem
} from '@fluentui/web-components'
import {
  fastAvatar,
  provideFASTDesignSystem
} from '@microsoft/fast-components'

provideFluentDesignSystem()
  .register(
    fluentCard(),
    fluentDesignSystemProvider()
  )
provideFASTDesignSystem()
  .register(
    fastAvatar()
  )
createApp(Frame).mount('app')
