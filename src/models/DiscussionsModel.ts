export declare module DiscussionsModel {

    export interface Author {
        login: string;
        name: string;
        email: string;
        avatarUrl: string;
    }

    export interface Node3 {
        author: Author;
        body: string;
    }

    export interface Replies {
        nodes: Node3[];
    }

    export interface Node2 {
        author: Author;
        body: string;
        replies: Replies;
    }

    export interface Comments {
        nodes: Node2[];
    }

    export interface Node {
        author: Author;
        body: string;
        comments: Comments;
    }

    export interface Discussions {
        nodes: Node[];
    }

    export interface Discussion {
        author: Author;
        body: string;
        comments: Comments;
    }

    export interface Repository {
        discussions?: Discussions;
        discussion?: Discussion;
    }

    export interface Data {
        repository: Repository;
    }

    export interface RootObject {
        data: Data;
    }

}
