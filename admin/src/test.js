import React, { Component ,Fragment} from 'react';

class Test extends Component {
  render() {
    console.log(this)
    return (
     <Fragment>
        这里是Test
        {this.props.children}
     </Fragment>
    );
  }
}

export default Test;
