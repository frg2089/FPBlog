import GetDiscussionArgs from './GetDiscussionArgs'

export default class GetDiscussionsArgs extends GetDiscussionArgs {
  discussionfirst: number | null = null
  discussionlast: number | null = null

  setDiscussionFirst (discussionFirst: number) {
    this.discussionfirst = discussionFirst
    return this
  }

  setDiscussionLast (discussionLast: number) {
    this.discussionlast = discussionLast
    return this
  }
}
