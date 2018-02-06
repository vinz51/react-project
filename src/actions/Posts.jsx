import { api } from '../middlewares/reduxapi'

import { postsListSchema, postSchema } from 'Middlewares/normalizr'

export const REQUEST_GET_POSTS = 'REQUEST_GET_POSTS'
export const SUCCESS_GET_POSTS = 'SUCCESS_GET_POSTS'
export const FAILURE_GET_POSTS = 'FAILURE_GET_POSTS'

export const getPosts = ({ page, limit }) => {

    const params = []
    
    if ( page )
    {
        params.push('_page=' + page)
    }
    
    if ( limit )
    {
        params.push('_limit=' + limit)
    }
    
    return api({
        endpoint    : 'posts' + '?' + params.join('&'),
        types       : [REQUEST_GET_POSTS, SUCCESS_GET_POSTS, FAILURE_GET_POSTS],
        schema      : postsListSchema
    })
}

export const REQUEST_GET_POST = 'REQUEST_GET_POST'
export const SUCCESS_GET_POST = 'SUCCESS_GET_POST'
export const FAILURE_GET_POST = 'FAILURE_GET_POST'

export const getOneById = (id) => {
    return api({
        endpoint    : 'posts/' + id,
        types       : [REQUEST_GET_POST, SUCCESS_GET_POST, FAILURE_GET_POST],
        schema      : postSchema
    })
}
