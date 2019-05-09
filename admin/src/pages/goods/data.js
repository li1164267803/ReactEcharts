export default{
    dataSource:[{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        avator:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        avator:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        
      },
      {
        key: '3',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        avator:'xxxxxx'
        
      }],//数据
    columeData:[{
        title: '姓名1',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄2',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址1',
        dataIndex: 'address',
        key: 'address',
      },{
          title:'头像',
          dataIndex:'avator',
          key:'avator'
      }
      
    ]//表头
}
//表头数据  title 表头的名字  dataIndex 和哪一个字段进行关联  key标识