import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneById } from "Actions/Posts"
import PostDetail from 'Stateless/PostDetail'

class PostCtn extends Component {
    state = {
        postId : '',
        post   : {}
    }

    componentWillMount() {
        this.setState({ postId : this.props.match.params.id })
    }

    componentDidMount() {
        
        if ( !this.props.posts && !this.props.posts[this.props.match.params.id] )
        {
            this.props.getOneById(this.props.match.params.id)
        }
        else
        {
            this.postToDisplay(this.props.posts)
        }
    
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.posts[this.state.postId] !== nextProps.posts[this.state.postId])
        {
            this.postToDisplay(nextProps.posts)
        }
    }
    
    postToDisplay = (posts) => {
        this.setState({ post : posts[this.props.match.params.id] })
    }

    render() {
        return <PostDetail {...this.state.post} />
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        posts : state.posts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getOneById : (id) => {
            dispatch(getOneById(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostCtn)
