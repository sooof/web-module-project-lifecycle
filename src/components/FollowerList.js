import React from 'react';
import Follower from './Follower'
import "./Follower.css";

class FollowerList extends React.Component{

    render() {
        console.log("FollowerList.js", this.props.followers);
        // const { user } = this.props;
        
        return(
            <div className='follower-container'>
                {
                    this.props.followers.map(follower => (
                        <Follower key={follower.id} follower={follower}/>
                    ))
                }

            </div>

        );
    }
}

export default FollowerList;