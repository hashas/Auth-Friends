import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
    state = {
        // this holds the data for the list of friends we get from api
        friends: [],
        // this holds the data for the form input
        friend: [
            {
                name: '',
                age: '',
                email: ''
            }
        ]
    };

    // looking at others' code it seems that where a functional component
    // was used 'sideEffect' was used instead of 'componentDidMouth()' to
    // get the api data and set it to state
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

    // this function takes the new values in 'friend' which are inputed
    // in the form, and sends it to 'post', and in .then() it invokes
    // getData function above to 'get' the updated 'friends' list from
    // server.
    addFriend = friend => {
        axiosWithAuth()
            .post('/api/friends', friend) // does 'friend' need JSON operation? No.
            .then(res => {
                console.log(res)
                this.getData()
            })
            .catch(err => {
                console.log(err)
            })
    }

    // I included the handleChange function here as I opted
    // to include the form data state here also instead of 
    // in the FriendForm component
    handleChange = e => {
        console.log('input change')
        this.setState({
            // notice spread operator is updating all 3 key:value pairs
            // in the state 'friend' object by using the varying name="" and
            // value="" attributes of each <input> field (e.g. name, age, email)
            // where this handleChange function is used
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
                    // getData={this.props.getData} don't need to pass
                    // this anymore as handleSubmit function no longer
                    // lives in FriendForm component
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    friend={this.state.friend}
                />
            </div>
        )
    }
}

export default FriendsList;