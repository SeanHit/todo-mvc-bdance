import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentItem from '../comment-item/comment-item'
import './commentList.css'


class CommentList extends React.Component {

  render () {
    let comments = this.props.comments
    let display = comments.length > 0 ? 'none' : 'block'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: display }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => {
              console.log(comment)
              return <CommentItem comment={comment} key={index} index={index}/>
            })
          }
        </ul>
      </div>
    )
  }
}
CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default connect(
  state => ({comments: state.comments})
)(CommentList)