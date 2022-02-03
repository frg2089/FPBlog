<template>
  <fluent-card class="post-card">
    <img class="post-card-preview" src="https://i.loli.net/2020/06/14/l94xMvBONkXKHTp.jpg" >

    <div class="post-card-body">
      <h2 class="post-card-title">这是一个标题</h2>

      <p class="post-card-text">
        What is FAST?
        <br>
        FAST is a collection of technologies built on Web Components and modern Web Standards, designed to help you efficiently tackle some of the most common challenges in website and application design and development.
        <br>
        Vue.js 是什么
        <br>
        Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
        <br>
        如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带你了解其核心概念和一个示例工程。
      </p>

      <div class="post-card-footer">
        <fast-avatar src="https://avatars.githubusercontent.com/u/42184238" />
        <p>
          <span class="post-card-author">舰队的偶像-岛风酱!</span>
          <span class="post-card-author-id">@frg2089</span>
          <br>
          <span class="post-card-datetime">刚刚</span>
        </p>
      </div>
    </div>
  </fluent-card>
</template>

<style lang="scss" scoped>
.post-card{
  height: 300px;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  img.post-card-preview{
    height: 100%;
    width: 300px;
    object-fit: cover;
  }
  .post-card-body{
    height: 100%;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: stretch;

    .post-card-title{
      margin: 0
    }
    .post-card-text{
      height: inherit;
      position: relative;
      box-sizing: border-box;
      overflow: hidden;

      &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(#00000000, #00000000, #00000000, var(--fill-color));
      }
    }

    .post-card-footer{
      width: 100%;
      justify-self: flex-end;
      display: flex;
      flex-direction: row;
      align-items: center;

      fast-avatar{
        width: inherit;
        margin-right: 8px;
      }
      p{
        margin: 0;
        .post-card-author-id{
          color: var(--input-placeholder-rest);
          font-size: small;
        }
        .post-card-datetime{
          font-size: small;
        }
      }
    }
  }
}
</style>

<script lang="ts" scoped setup>

</script>
