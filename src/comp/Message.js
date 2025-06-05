import React, { Component } from 'react'

 class Message extends Component {
    constructor(){
        super()
        this.state={
            Message:'welcome reactjs'
        }
    }
    changeMessage(){
        this.setState(
        {
            Message:'Thanks for subscribing'
        }
    ) 
    }
  render() {
    return (
        <div>
<h1>
            {this.state.Message}

        </h1>
        <button onClick ={()=>this.changeMessage()} >sub</button>
        </div>
        
    )

  }
}
export default Message