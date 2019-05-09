import React, { Component } from 'react';
import './admin.less'
import NavLeft from '../../components/NavLeft/navleft'
import {Row ,Col}  from 'antd'
// import Contain from '../../components/Contain/Contain
class Admin extends Component {
  render() {
    return (

       <Row className='admin'>
           <Col span={4} className='left'>
              <NavLeft></NavLeft>
           </Col>
           <Col span={20} className='right'>
              <div className='header'>头部</div>
              <div className='center'>
              {this.props.children}
              </div>
              <div className='footer'>
                footer
              </div>
           </Col>
       </Row>
    );
  }
}

export default Admin;
