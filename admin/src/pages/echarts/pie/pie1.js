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
    this.ws=new WebSocket('ws://localhost:8080')
    this.ws.onopen=()=>{
        console.log('服务器连接')
    }
    this.ws.onmessage=(msg)=>{
        console.log('接受数据')
        console.log(msg)
        let tmp=JSON.parse(msg.data)
        if(tmp.err==0){
            let tmpData=JSON.stringify(this.state.data)
            let newData=JSON.parse(tmpData)
            newData.series[0]['data']=tmp.data
           this.setState({data:newData})
        }
        
        
    }   
  }
  componentWillUnmount(){
      this.ws.close()
      //组件销毁断掉连接
  }
  change(){
     let data=[
        {value:35, name:'直接访问'},
        {value:30, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:15, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
    ]

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
