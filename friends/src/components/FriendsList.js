import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// const FriendsList = props => {
//     return (
//         <div>
//             <h1>Friends List</h1>
//         </div>
//     )
// }

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log(res)
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Friends List:</h1>
                <div>
                    {this.state.friends.map(friend => (
                        <div key={friend.id}>
                            <h2>{friend.name}</h2>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FriendsList;