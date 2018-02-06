import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'Actions/Posts'
import * as Classes from 'Styles/components.postlist'

import PostItem from 'Stateless/PostItem'

class PostsListCtn extends PureComponent {
    state = {
        postParams : {
            limit : 10,
            page  : 1
        },
        isAvailablePosts : true
    }

    componentDidMount() {
        if ( Object.keys(this.props.posts).length == 0 )
        {
            this.props.getPosts(this.state.postParams)
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if ( Object.keys(this.props.posts).length === Object.keys(nextProps.posts).length )
        {
            this.setState(prevState => ({ isAvailablePosts : !prevState.isAvailablePosts }))
        }
    }
    
    morePosts = () => {
        this.setState( (prevState) => ({
            postParams : {
                ...prevState.postParams,
                page : prevState.postParams.page + 1
            }
        }), () => this.props.getPosts(this.state.postParams) )
    }

    render() {
        const { posts } = this.props
        return (
            <div className={Classes.postList}>
                <ul>
                    { Object.keys(posts).map((elemId) => <PostItem key={elemId} {...posts[elemId]} /> )}
                </ul>
                <button
                    onClick={() => this.morePosts()}
                    className={Classes['postList-more'] + ( this.state.isAvailablePosts ? '' : ' hide') }> MORE POST </button>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        posts : state.posts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPosts : (params) => {
            dispatch(getPosts(params))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsListCtn)
