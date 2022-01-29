export default class GetDiscussionArgs {
  constructor (
    owner: string,
    name: string,
    discussionNumber: number
  ) {
    this.owner = owner
    this.name = name
    this.discussionNumber = discussionNumber
  }

  owner: string
  name: string
  discussionNumber: number
  commentfirst?: number | null = null
  commentlast?: number | null = null
  repliefirst?: number | null = null
  replielast?: number | null = null
  avatarSize?: number | null = null

  setCommentFirst (commentFirst: number) {
    this.commentfirst = commentFirst
    return this
  }

  setCommentLast (commentLast: number) {
    this.commentlast = commentLast
    return this
  }

  setReplieFirst (replieFirst: number) {
    this.repliefirst = replieFirst
    return this
  }

  setReplieLast (replieLast: number) {
    this.replielast = replieLast
    return this
  }

  setAvatarSize (avatarSize: number) {
    this.avatarSize = avatarSize
    return this
  }
}
