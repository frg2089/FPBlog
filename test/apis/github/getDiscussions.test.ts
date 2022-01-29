import { expect } from 'chai'
import GetDiscussionsArgs from '../../../src/apis/github/models/GetDiscussionsArgs'
import { Github } from '../../../src/apis/github/Github'
import { github as token } from '../../token'

it('Get Discussions', async () => {
  const result = await Github.getDiscussions(`bearer ${token}`,
    new GetDiscussionsArgs('frg2089', 'FPBlog', 1)
      .setDiscussionLast(10)
      .setCommentFirst(10)
      .setReplieFirst(10)
  )

  expect(result.repository.discussions!.nodes[0].body).is.a('string')
})
