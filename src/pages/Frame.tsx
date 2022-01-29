import { Depths, DocumentCard, DocumentCardActivity, DocumentCardDetails, DocumentCardPreview, DocumentCardTitle, DocumentCardType, ImageFit, Stack, StackItem, Text } from '@fluentui/react'
import React from 'react'

import style from '../styles/header.module.scss'

export class Frame extends React.Component<any, any> {
  render() {

    const doc = (
      <Stack.Item>
        <DocumentCard type={DocumentCardType.compact} styles={{
          root: {
            width: 1200,
            height: 300,
            maxWidth: 'none',
            boxShadow: Depths.depth8
          }
        }}>
          <DocumentCardPreview styles={{
            root: {
              maxHeight: 'none!important',
              maxWidth: 'none!important'
            }
          }} previewImages={[{
            previewImageSrc: 'https://i.loli.net/2020/06/14/l94xMvBONkXKHTp.jpg',
            width: 400,
            height: 300,
            imageFit: ImageFit.centerCover
          }]} />
          <DocumentCardDetails>
            <DocumentCardTitle title="哦! 我的天哪, 快看! 这是什么? 一个Sample!" shouldTruncate />
            <div style={{
              height: '100%',
              textIndent: '2em',
              overflow: 'hidden'
            }}>
              <p>哦! 我的天哪, 快看! 这是什么? 一个Sample!</p>
              <p>这个Sample是用来展示React的, 它是一个简单的网站, 只是为了展示React的功能.</p>
              <p>这里应该插入一段废话</p>
              <p>React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。</p>
              <p>以声明式编写 UI，可以让你的代码更加可靠，且方便调试。</p>
              <p>构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。</p>
              <p>由于组件逻辑使用 JavaScript 编写而非模板，因此你可以轻松地在应用中传递数据，并保持状态与 DOM 分离。</p>
            </div>
            <DocumentCardActivity activity="刚刚没有创建" people={[{
              name: 'Shimakaze',
              profileImageSrc: 'https://avatars.githubusercontent.com/u/42184238',

            }]} />
          </DocumentCardDetails>
        </DocumentCard>
      </Stack.Item>
    )

    return (
      <>
        <div className={style.background} />

        <div className={style.title}>
          <h1>Shimakaze's Blog</h1>
        </div>

        <Stack className={style.body} horizontalAlign='center' tokens={{
          childrenGap: 20
        }} styles={{
          root: {
            padding: 20,
          }
        }}>
          {doc}
          {doc}
          {doc}
          {doc}
          {doc}
        </Stack>

        <footer style={{
          padding: 20,
        }}>
          <p style={{ textAlign: 'center' }}> Copyright © 2022 frg2089, All Rights Reserved. </p>
        </footer>
      </>
    )
  }
}
