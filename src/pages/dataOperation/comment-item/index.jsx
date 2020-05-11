import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

class CommentItem extends React.Component {
    constructor (props) {
        super(props)
        this.deleteComment = this.deleteComment.bind(this)
    }
    deleteComment () {
        let username = this.props.comment.username;
        if (window.confirm(`确定删除${username}的评论吗?`)) {
            this.props.delete(this.props.comment.time);
        }
    }
    render () {
        let comment = this.props.comment;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:" onClick={this.deleteComment}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    delete: PropTypes.func.isRequired
}

export default CommentItem
