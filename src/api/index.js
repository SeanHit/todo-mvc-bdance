import ajax from './ajax'

const BASE='bdapi';  //配置代理服务器用到

export const reqLogin =(username, password )=> ajax(BASE+'/login', {username,password}, 'POST');
export const reqRegisterUser = (data) =>ajax(BASE+'/manage/user/add',data,'POST');
export const reqComments =()=>ajax(BASE+'/comments/list',{},'GET');
export const reqCommentsByUser =(username)=>ajax(BASE+'/comments/list',{username},'POST');
export const reqDeleteComment =( time )=>ajax(BASE+'/comments/delete',{time},'POST');
export const reqAddComment =(data)=>ajax(BASE+'/comments/add',data,'POST');


