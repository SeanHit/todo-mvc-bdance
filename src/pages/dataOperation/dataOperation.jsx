import React ,{Component} from 'react'
import {message} from "antd";

import CommentAdd from './comment-add/index'
import CommentList from './comment-list/index'
import storageUtils from  '../../utils/storageUtils'
import { reqComments ,reqAddComment,reqDeleteComment } from '../../api/index'
/*
* 用户路由
* */
export default class DataOperation extends Component {

    constructor (props) {
        super(props);
        this.state = {
            comments: []
        }

        this.delete = this.delete.bind(this)
    }

    getComments=async ()=>{
      let result = await reqComments();
      if(result.status == 0){  //请求成功
          let comments =result.data.comments;
          this.setState({
              comments,
          })
      }else{
          message.error('请求数据失败');
      }
    };

    addComment =async (comment)=>{
        let result =await reqAddComment(comment);
        if(result.status == 0){
            this.getComments();
        }else{
            message.error('添加评论失败');
        }
        console.log(result);
    };

    deleteComment =async (time)=>{
        let result = await reqDeleteComment(time);
        if(result.status == 0 ){
            this.getComments();
        }else{
            message.error('删除失败');
        }

    }


    add = (comment) => {
        // let comments = this.state.comments;
        // comments.unshift(comment);
        // storageUtils.saveComments(comments);
        // this.setState({ comments })
        comment.time =Date.now();
        this.addComment(comment);
    }

    delete (time) {
        this.deleteComment(time);
    }
    componentDidMount () {
        this.getComments();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // this.getComments();
    }

    render() {
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>后端数据库中的数据</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd add={this.add}/>
                    <CommentList comments={this.state.comments} delete={this.delete}/>
                </div>
            </div>
        )
    }
}