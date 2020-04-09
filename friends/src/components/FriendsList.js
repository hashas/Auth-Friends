import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

// const FriendsList = props => {
//     return (
//         <div>
//             <h1>Friends List</h1>
//         </div>
//     )
// }

class FriendsList extends React.Component {
    state = {
        friends: [],
        friend: [
            {
                name: '',
                age: '',
                email: ''
            }
        ]
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

    addFriend = friend => {
        axiosWithAuth()
            .post('/api/friends', friend) // does 'friend' need JSON operation?
            .then(res => {
                console.log(res)
                this.getData()
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleChange = e => {
        console.log('input change')
        this.setState({
            friend: {
              ...this.state.friend,
              [e.target.name]: [e.target.value]  
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.addFriend(this.state.friend)
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
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
                <FriendForm 
                    // getData={this.props.getData}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    friend={this.state.friend}
                />
            </div>
        )
    }
}

export default FriendsList;