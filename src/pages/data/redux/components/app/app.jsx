import React from 'react'
import {connect} from 'react-redux'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'
import {getComments} from '../../redux/actions'

class App extends React.Component {

  componentDidMount() {
    //模拟异步获取数据
    this.props.getComments()
  }

  render() {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd/>
          <CommentList/>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  {getComments}
)(App)