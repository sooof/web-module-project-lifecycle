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
      githubUser:"sooof",
      isLoading: false
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.githubUser}`)
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
  handClickFollowers = (e) => {
      e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.githubUser}/followers`)
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
  
  handClickSearch = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.githubUser}`)
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
  handleChange = (e) => {
      this.setState({
        ...this.state,
        githubUser: e.target.value
    })
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
                <Link onClick={this.handClickFollowers} className="link" to='/'>FOLLOWERS</Link>
                <form className="link" >
                    <input 
                    onChange={this.handleChange}
                    placeholder="Github Handle"
                    />
                    <button onClick={this.handClickSearch} >Search</button>
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
