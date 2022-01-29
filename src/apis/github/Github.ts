import { gql, GraphQLClient } from 'graphql-request'
import { DiscussionsModel } from '../../models/DiscussionsModel'
import { ITreeResult } from '../../models/ITreeResult'
import { IGetTreeArgs } from './models/IGetTreeArgs'
import GetDiscussionArgs from './models/GetDiscussionArgs'
import GetDiscussionsArgs from './models/GetDiscussionsArgs'

export namespace Github{
  export const GITHUB_URL_BASE = 'https://api.github.com/'
  export const GITHUB_URL_GRAPHQL = 'https://api.github.com/graphql'

  /**
   * RESTful API /repos/{username}/{repo}/git/trees/{tree}?${recursive}
   * @param args 参数
   * @returns 对象
   */
  export const getTree = async (args: IGetTreeArgs): Promise<ITreeResult> => {
    const uri = `${GITHUB_URL_BASE}/repos/${args.username}/${args.repo}/git/trees/${args.tree}${args.recursive ? '?recursive=1' : ''}`
    const response = await fetch(uri)
    const json = (await response.json()) as ITreeResult
    return json
  }

  export const getDiscussion = async (
    authorization: string,
    variables: GetDiscussionArgs) => {
    const client = new GraphQLClient(GITHUB_URL_GRAPHQL)
    const graphql = gql`
fragment Info on Comment {
  author {
    ... on User {
      login
      name
      email
      avatarUrl(size: $avatarSize)
    }
  }
  body
}

query getDiscussion(
  $owner: String!,
  $name: String!,
  $discussionNumber: Int!,
  $avatarSize: Int,
  $commentfirst: Int,
  $commentlast: Int,
  $repliefirst: Int,
  $replielast: Int,
){
  repository(owner: $owner, name: $name) {
    discussion(number: $discussionNumber) {
      ...Info
      comments(first: $commentfirst, last: $commentlast) {
        nodes {
          ...Info
          replies(first: $repliefirst, last: $replielast) {
            nodes {
              ...Info
            }
          }
        }
      }
    }
  }
}
`
    client.setHeaders({
      authorization
    })

    return await client.request(graphql, variables) as DiscussionsModel.Data
  }

  export const getDiscussions = async (
    authorization: string,
    variables: GetDiscussionsArgs) => {
    const client = new GraphQLClient(GITHUB_URL_GRAPHQL)
    const graphql = gql`
fragment Info on Comment {
  author {
    ... on User {
      login
      name
      email
      avatarUrl(size: $avatarSize)
    }
  }
  body
}
query getDiscussions(
  $owner: String!,
  $name: String!,
  $discussionNumber: Int!,
  $avatarSize: Int,
  $commentfirst: Int,
  $commentlast: Int,
  $discussionfirst: Int,
  $discussionlast: Int,
  $repliefirst: Int,
  $replielast: Int,
){
  repository(owner: $owner, name: $name) {
    discussions(first: $discussionfirst, last: $discussionlast) {
      nodes {
        ...Info
        comments(first: $commentfirst, last: $commentlast) {
          nodes {
            ...Info
            replies(first: $repliefirst, last: $replielast) {
              nodes {
                ...Info
              }
            }
          }
        }
      }
    }
  }
}
`
    client.setHeaders({
      authorization
    })

    return await client.request(graphql, variables) as DiscussionsModel.Data
  }
}
