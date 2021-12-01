import React from 'react';
import {Link} from 'react-router-dom'
import User from './components/User';
import FollowerList from './components/FollowerList';
import './App.css';

class App extends React.Component {
  render() {
    return(
    <div>
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>GITHUN INFO</Link>
                {/* <Link className="link" to='/products'>Products</Link>  */}
                
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
          <User />
          <FollowerList />
        </div>
      
    </div>);
  }
}

export default App;
