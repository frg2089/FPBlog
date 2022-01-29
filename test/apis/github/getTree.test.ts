import { expect } from 'chai'
import { Github } from '../../../src/apis/github/Github'

it('Github API: Get Tree', async () => {
  const result = await Github.getTree({
    username: 'frg2089',
    repo: 'FPBlog',
    tree: 'master',
    recursive: true
  })

  expect(result).to.not.be.null
})
