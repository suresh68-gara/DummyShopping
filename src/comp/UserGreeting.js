import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn:true
      }
    }
  render() {
    return this.state.isloggedIn && <div>welcome conditional rendering</div>

    // return this.state.isloggedIn ?(
    //     <div>welcome conditional rendering</div>):(
    //     <div>welcome guest</div>
    // )
    // let Message
    // if(this.state.isloggedIn){
    //     Message=<div>
    //         welcome conditional rendering
    //     </div>
    // } else {
    // Message=<div>welcome guest </div>
    // }
    // return<div>{Message}</div>
    // return (
    //     <div>
        
    //   <div>
    //     welcome conditional rendering
    //   </div>
    //   <div> welcome guest</div>
    //     </div>      
    // )
  }
}

export default UserGreeting