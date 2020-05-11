import React, {Component, useState} from 'react'

import CommentAdd from "../hooks/comment-add";
import CommentList from "../hooks/comment-list";
import storageUtils from  '../../../utils/storageUtils'


export default function Hooks() {
    const [comments,setComments] = useState(storageUtils.getComments);
    const [count ,setCount] =useState(0);
    const add =( comment ) => {
        comments.unshift( comment );
        storageUtils.saveComments( comments );
        // setComments( comments );
        console.log('-----');
        console.log( comments ,comment);
        setTimeout(()=>{
            setComments(comments);
            setCount(count+1);
        },1000)


    };

     const myDelete = (index) =>{
        comments.splice(index, 1);
        storageUtils.saveComments(comments);
        console.log('myDeleta',comments);
        setComments( comments );
         setCount(count+1);
     };


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
                <CommentAdd add={add}/>
                <CommentList comments={comments} myDelete={myDelete}/>
                {/*<button onClick={()=>setComments(comments.concat([{'username':'sss','content':'ddd','id':12345}]))}>{comments.length}</button>*/}


            </div>
        </div>
    )
}
