import React, { Component } from 'react';
import Echarts from 'echarts'
import ReactEcharts from 'echarts-for-react';
class component extends Component {
  constructor(){
    super()
  }
  getOption(){
      return{
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
  }
  render(){
      return(
          <div>
              <h2>折线1</h2>
              <ReactEcharts option={this.getOption()}></ReactEcharts>
          </div>
      )
  }
}


export default component;
