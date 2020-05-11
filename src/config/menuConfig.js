/*
* caidanlan配置
* */
const menuList = [
    {
        title: '数据管理/本地存储',
        key: '/data',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: 'component state',
                key: '/state',
            },
            {
                title: 'hooks',
                key: '/hooks',
            },
            {
                title: 'redux',
                key: '/redux',
            },
        ]
    },
    {
        title: '数据处理/数据库',
        key: '/database',
    },
]

//默认暴露
export default menuList;