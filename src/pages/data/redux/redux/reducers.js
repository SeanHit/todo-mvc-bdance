import {combineReducers} from 'redux'
import storageUtils from '../../../../utils/storageUtils'

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENTS
} from './action-types'

const initComments = [];

function comments(state = initComments, action) {
  let comments=[];
  switch (action.type) {
    case ADD_COMMENT:
      /*
      * 1.添加对应的index的评论
      * 2.存到本地存储当中
      * */
      comments =[...state, action.data];
      storageUtils.saveComments(comments);
      return comments;
    case DELETE_COMMENT:
      /*
      * 1.删除对应的index的评论
      * 2.存到本地存储当中
      * */
      comments =state.filter((c, index) => index !== action.data);
      storageUtils.saveComments(comments);
      return comments;
    case RECEIVE_COMMENTS:
      comments =action.data;
      storageUtils.saveComments(comments);
      return comments;
    default:
      return state
  }
}

export default combineReducers({
  comments
})