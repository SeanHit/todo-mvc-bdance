import React ,{Component} from 'react'
import {message} from "antd";

import CommentAdd from './comment-add/index'
import CommentList from './comment-list/index'
import storageUtils from  '../../../utils/storageUtils'
import { reqComments } from '../../../api/index'
/*
* 用户路由
* */
export default class State extends Component {

    constructor (props) {
        super(props);
        this.state = {
            comments: []
        }

        this.delete = this.delete.bind(this)
    }

    // getComments=async ()=>{
    //   let result = await reqComments();
    //   if(result.status == 0){  //请求成功
    //       let comments =result.data.comments;
    //       this.setState({
    //           comments,
    //       })
    //   }else{
    //       message.error('请求数据失败');
    //   }
    // }

    componentDidMount () {
        //模拟异步获取数据
        // setTimeout(() => {
            const comments =storageUtils.getComments();
            this.setState({
                comments
            })
        // }, 0)
    }

    add = (comment) => {
        let comments = this.state.comments;
        comments.unshift(comment);
        storageUtils.saveComments(comments);
        this.setState({ comments })
    }

    delete (index) {
        let comments = this.state.comments
        comments.splice(index, 1);
        storageUtils.saveComments( comments );
        this.setState({ comments })
    }

    render() {
        return(
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
                    <CommentAdd add={this.add}/>
                    <CommentList comments={this.state.comments} delete={this.delete}/>
                </div>
            </div>
        )
    }
}