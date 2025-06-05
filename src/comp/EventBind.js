import React, { Component } from 'react'
import Message from './Message'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       Message:'Hello'
      }
      this.clickHandler=this.clickHandler.bind(this)

    }
    clickHandler(){
       this.setState(
       {
        
            Message:'good bye!'
       }
    )
     
    
    
    }
  render() {
    return (
      <div>
        <div>{this.state.Message}
        </div>
        
        <button onClick={this.clickHandler.bind(this)}>click</button>
         <button onClick={()=>this.clickHandler()}>click</button>
          <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default EventBind