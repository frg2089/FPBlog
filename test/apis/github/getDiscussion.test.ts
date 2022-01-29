import { expect } from 'chai'
import GetDiscussionArgs from '../../../src/apis/github/models/GetDiscussionArgs'
import { Github } from '../../../src/apis/github/Github'
import { github as token } from '../../token'

it('Get Discussion 1', async () => {
  const result = await Github.getDiscussion(`bearer ${token}`,
    new GetDiscussionArgs('frg2089', 'FPBlog', 1)
      .setCommentFirst(10)
      .setReplieFirst(10)
  )

  expect(result.repository.discussion!.body).is.a('string')
})
