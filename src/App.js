import React, { useState } from "react";
import {Link} from 'react-router-dom'
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      User: {},
      Followers:[
      ],
      isLoading: false
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/sooof')
      .then(resp=> {
        // console.log(resp)
          this.setState({
              ...this.state,
              User: resp.data,
          });
      })
      .catch(err=> {
          console.log(err);
      })
  }
  handClick = () => {
      axios.get(`https://api.github.com/users/sooof/followers`)
      .then(resp=> {
          console.log(resp);
          this.setState({
              ...this.state,
              Followers: resp.data
          })
      })
      .catch(err=> {
          console.log(err);
      })
      this.setState({
        ...this.state,
        isLoading: true,
    }); 
  }
  render() {
    
    console.log("App.js user = ", this.state) 
    return(
    <div>
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>GITHUN INFO</Link>
            </div>
            <div className="right-links">
                <Link onClick={this.handClick} className="link" to='/'>FOLLOWERS</Link>
                <form className="link" >
                    <input 
                    placeholder="Github Handle"
                    />
                    <button >Search</button>
                </form>
            </div>
        </nav>
        <div className="App">
          {/* <h1>Github Card</h1> */}
          <User user={this.state.User}/>
          <FollowerList followers={this.state.Followers}/>
          {/* <hr/> */}
          {/* <FollowerList /> */}
        </div>
      
    </div>);
  }
}

export default App;
