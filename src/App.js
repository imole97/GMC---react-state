import React, { Component } from 'react'
import './App.css';
import Profile from './component/Profile';



export class App extends Component {

  
  constructor(props) {
    super(props)
    
    this.state = {
       show: false
    }
  
  }
  
  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }
  
  
  render() {
    
    return (
        
      <div>
        {
          this.state.show?<Profile/> 
          :<h3>Toggle Profile for visibility</h3>
        }
        <button onClick={()=> this.toggle()}>Toggle Profile</button>
      </div>
      
    )
  }
}

export default App


