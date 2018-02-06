import reducer from '../../src/reducers/posts'
import * as Posts from '../../src/actions/Posts'
import * as mockPosts from '../../config/mocks/posts'

describe('Reducer : post', () => {
    
    it('initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })
    
    it('success get posts', () => {
        const succesGetPostsAction = {
            type    : Posts.SUCCESS_GET_POSTS,
            payload : mockPosts.posts
        }
        expect(reducer({}, succesGetPostsAction)).toEqual(mockPosts.posts.entities.posts)
    })
})
