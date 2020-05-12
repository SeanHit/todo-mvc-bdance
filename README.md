# todo-mvc-bdance
这是一个前端作业
##2020/4/29 
开始搭建项目
今天晚上主要搭建app
引入antd及按需加载，准备明天开始进行第一步的todoMVC的任务


## 主要使用的技术
1. 单页面应用
2. 使用了三种不同的状态管理
   1. state
   2. hooks
   3. redux
3. 本地数据管理 localStorage本地管理
4. 使用node.js，express,mongodb搭建简单的服务端框架
5. nginx搭建前端项目
6. 个人服务器搭建相关技术，使用pm2将后端代码部署到云服务器上
   1. 实现基本的用户登录注册相关功能
   2. 实现简单的用户操作后台数据的动作
   3. 使用本地在cookie中存储了用户id
6. 由于种种原因，还没有做到对前端数据的收集处理，如果有机会，这个是我接下来需要学习的。
## 地址说明
其中前端访问地址：http://120.26.176.6:4000 初始账户 username:admin , password: admin;
前端git地址：https://github.com/SeanHit/todo-mvc-bdance
服务端git地址： https://github.com/SeanHit/todo-mvc-bdance-server

## 操作说明
1. 输入url:http://120.26.176.6:4000,进入如下界面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512130838991.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xfeF9jc2Vy,size_16,color_FFFFFF,t_70#pic_center)
2. 选择默认 admin，admin登录，可进入操作界面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512131126669.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xfeF9jc2Vy,size_16,color_FFFFFF,t_70#pic_center)
3. 在1.中点击注册，可进行对应的注册功能
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512131326796.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xfeF9jc2Vy,size_16,color_FFFFFF,t_70#pic_center)
4. 进入首页后分别有以下操作空间
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512131448915.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xfeF9jc2Vy,size_16,color_FFFFFF,t_70)
   1. 其中（数据管理/本地存储，使用的是对应的state,redux,hooks相关技术），数据来源于本地存储localstorage
   2. 数据处理/数据库，是与后端交互的数据，其中数据库为mongodb
5. 其中在本地存储实践（数据存储在localstorage）中，使用计数器模拟向后端发送数据;而在真实的向后端接口实践中，使用axios像后端请求数据。
6. 为了方便，不同的技术我都使用了同一套业务模拟来实现
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512132145974.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xfeF9jc2Vy,size_16,color_FFFFFF,t_70)
     1. 其中主要就是模拟评论的添加，删除，展示等，从而设计组件之间。
     2. 组件之间通过state, hooks，redux来进行传递或者交互。


### 总结
1. 由于种种原因吧，我没能完全达到要求的全部需求。尤其是对于前端的性能收集与分析做的还不到位，也是下一步需要加强的点。 
2. 在整个框架的搭建，redux,hooks等的学习或者使用者，能够是我掌握了新的react技术。同时解除了node相关知识，可以使用node+mongdb搭建简单的后台。同时也使用了一些服务器，对于反向代理的相关配置，使用PM2部署后台程序等等，都让我学习了不少新的领域的知识，是个好的开始。
