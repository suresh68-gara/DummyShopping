import React, { Component } from 'react'

 class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Username:'',
       Comments:'',
    }
  }
  handlerUsernameChange=(Event)=>{
    this.setState({
    Username:Event.target.value
    })
  }
  handlerPasswordChange=(Event)=>{
    this.setState({
      Password:Event.target.value
    })
  }
  render() {
    return (
      <form>

      <div>
        <label>User name</label>
        <input type="text" value={this.state.Username}onChange={this.handlerUsernameChange}/>
      </div>
      <div>
        <label>Password</label>
        <textarea value={this.state.Password} onChange={this.handlerPasswordChange}></textarea>
      </div>
      </form>
    )
  }
}

export default Form