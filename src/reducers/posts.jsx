import React from 'react'
import * as Posts from 'Actions/Posts'

const posts = (state = {}, action) => {

    switch(action.type)
    {
        case Posts.SUCCESS_GET_POSTS:
            return Object.assign({}, state, action.payload.entities.posts)
        
        case Posts.SUCCESS_GET_POST :
            return Object.assign({}, state, action.payload.entities.post)
        
        default :
            return state
        
    }

} 

export default posts
