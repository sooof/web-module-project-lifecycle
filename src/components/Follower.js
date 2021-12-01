import React from 'react';


class Follower extends React.Component{

    render() {
        // console.log("Follower.js", this.props.follower);
        const { follower } = this.props;
        return(
            
                <div className="follower-img">
                    {/* <img src='https://avatars.githubusercontent.com/u/7962407?v=4'/> */}
                    <img src={follower.avatar_url}/>
                    <h2>{follower.login}</h2>
                    {/* <p>({follower.bio})</p>
                    <h3>TOTAL REPOS: {user.public_repos}</h3>
                    <h3>TOTAL FOLLOWERS: {user.followers}</h3> */}
                </div>

        

        );
    }
}

export default Follower;