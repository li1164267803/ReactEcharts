import React, { Component } from 'react';
import Echarts from 'echarts'
import ReactEcharts from 'echarts-for-react';
class component extends Component {
  constructor(){
    super()
    this.state={
        data:{
            series : [
                {
                    type: 'pie',
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                
                }
            ]
        }
    }
  }
  componentDidMount(){
    // setInterval(()=>{
    //     this.$axios.get('/piedata')
    //     .then((res)=>{
    //         this.setState({data:res.data})
    //     })
    // },1000)
  }
  change(){
     let data=[
        {value:35, name:'直接访问'},
        {value:30, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:15, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
    ]
    //  let echart=JSON.stringify(this.state.data)
    //  let newData=JSON.parse(echart)
    //  newData.series[0]['data']=data
    // react修改数据 经常遇到引用类型的问题  
    //1.不要只修改引用数据整体数据一起修改
    //2.不修改原数据 将原数据 做拷贝赋予新数据 a。深拷贝 b、json 转化
    //3.redux reducer不能修改原数据
    let newData=this.state.data
     newData.series[0]['data']=data
     this.setState({data:newData})
  }
  render(){
      console.log('render')
      let {data}=this.state
      return(
          <div>
              <button onClick={this.change.bind(this)}>  onclick</button>
              <h2>饼1</h2>
              <ReactEcharts option={data}></ReactEcharts>
          </div>
      )
  }
}


export default component;
