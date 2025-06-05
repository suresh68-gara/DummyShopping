import React, { Component } from 'react'
 class Greet1 extends Component {
  render() {
    const{name,  city}=this.props
  
    return (
      <h1>
Hello {name}
           {city}
      </h1>
    )
    
    
  }
}
export default Greet1
