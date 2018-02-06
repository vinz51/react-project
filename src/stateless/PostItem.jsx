import React from 'react'
import { Link } from 'react-router-dom'
import Classes from 'Styles/components.postlist'

const PostItem = ({ id, title, body }) => (
    <li className={Classes.postitem}>
        <Link to={ '/post/' + id } className={Classes['postitem-link']}>
            <h1>{title}</h1>
            <p>{body}</p>
        </Link>
    </li>
)

export default PostItem
