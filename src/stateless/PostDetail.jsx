import React from 'react'
import * as Classes from 'Styles/components.postdetail'
import { Link } from "react-router-dom"

const PostDetail = ({ id, title, body, userId }) => (
    <article className={Classes.postdetail}>
        <div className={Classes['postdetail-ariane']}>
            <span>
                <Link to="/">Home</Link>
            </span>
            <span>Post {id}</span>
        </div>
        
        <div className={Classes['postdetail-content']}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
        
        <footer className={Classes['postdetail-footer']}> Writen by {userId} </footer>
        
    </article>
)

export default PostDetail
