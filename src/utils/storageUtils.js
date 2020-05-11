const COMMENTS = 'comments';
const USER = 'user';


export default {
    //暴露localStorage的接口
    /*
    * 保存comments
    * */
    saveComments:(comments)=>{
        let storage =window.localStorage;
        storage[COMMENTS] =JSON.stringify(comments);
    },
    /*
    * 读取comments,其中返回值就是个对象；
    * */
    getComments:()=>{
        let comments=[];
        window.localStorage[COMMENTS] ?  comments =JSON.parse(window.localStorage[COMMENTS] )  : comments=[];
        return comments;
    },
    /*
    * 删除comments
    * */
    removeComments:()=>{
        delete(window.localStorage[COMMENTS]);
    },
    saveUser:( user )=>{
        let storage =window.localStorage;
        storage[USER] =JSON.stringify(user);
    },
    getUser:()=>{
        return JSON.parse(  window.localStorage[USER]?window.localStorage[USER]:'{}' );
    },
    removeUser:()=>{
        delete window.localStorage[USER];
    }
}