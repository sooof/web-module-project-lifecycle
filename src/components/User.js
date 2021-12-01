import React from "react";
import './User.css';


class User extends React.Component {

    render(){
        console.log("User ", this.props)
        return (
            <div className='user-container '>
                <div className="user-img">
                    {/* <img src='https://avatars.githubusercontent.com/u/7962407?v=4'/> */}
                    <img src={this.props.user.avatar_url} alt="img"/>
                </div>
                <div className='user-text'>
                    <h2>{this.props.user.name}</h2>
                    <p>({this.props.user.bio})</p>
                    <h3>TOTAL REPOS: {this.props.user.public_repos}</h3>
                    <h3>TOTAL FOLLOWERS: {this.props.user.followers}</h3>
                </div>

            </div>
        )
    }
}
export default User;