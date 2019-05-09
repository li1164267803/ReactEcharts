export default{
    'menuData':[
    {
       name:'首页',
       path:'/admin/home',
       id:'0'
    },
    {
        name:'设置',
        path:'/admin/setting',
        id:'1'
    },
    {
        name:'用户管理',
        path:'/admin/user',
        id:'2',
        children:[
            {
                name:'用户添加',
                path:'/admin/user/add',
                id:'20'

            },
            {
                name:'管理员管理',
                path:'/admin/user/root',
                id:'21'
            }
        ]

    },
    {
        name:'图表展示',
        path:'echars',
        children:[
            {
                name:'饼状图',
                path:'/echars/bin',
                children:[
                    {
                        name:'饼1',
                        path:'/admin/echars/pie/pie1'
                
                    },
                    {
                        name:'饼2',
                        path:'/echars/bin/2'
                
                    }
                ]
            },
            {
                name:'折线图',
                path:'/admin/echars/line',
                children:[
                    {
                        name:'折线1',
                        path:'/admin/echars/line/line1'
                
                    },
                    {
                        name:'折线2',
                        path:'/admin/echars/line/line2'
                
                    }
                ]
            }
        ]
    },
    {
        name:'商品管理',
        path:'/admin/goods',
        id:'4'
    },

  ]

}