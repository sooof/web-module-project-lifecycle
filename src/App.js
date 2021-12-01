import React from 'react';
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
      ]
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/sooof')
      .then(resp=> {
        console.log(resp)
          this.setState({
              ...this.state,
              User: resp.data,
          });
      })
      .catch(err=> {
          console.log(err);
      })
  }

  render() {
    const [follower, setFollower]
    console.log("App.js user = ", this.state) 
    return(
    <div>
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>GITHUN INFO</Link>
            </div>
            <div className="right-links">
                {/* <Link className="link" >Search</Link> */}
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
          <hr/>
          <FollowerList />
        </div>
      
    </div>);
  }
}

export default App;
