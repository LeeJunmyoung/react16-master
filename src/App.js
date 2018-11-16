import React, { Component ,Fragment } from 'react';
import {createPortal} from 'react-dom';






class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes/>
        <ReturnTypes/>
        <ReturnTypes/>
        <Portals></Portals>
      </Fragment>

    );
  }
}

class ReturnTypes extends Component{
  render(){
    return(
      <Fragment>
      
      <div>hello</div>
      
      </ Fragment>
    )
  }

}


class Portals extends Component{
  render(){
    return createPortal(
      <Message/>,
      document.querySelector('#touchme')
    );
  }
}

const Message =()=> "Just touched it";

export default App;
