import React from 'react';

class FriendForm extends React.Component {

    // I opted to put the state from the form input fields
    // in the parent FriendsList component so I didn't need
    // to use any state here. So I could have just used a 
    // functional component instead
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    onChange={this.props.handleChange}
                    value={this.props.friend.name}
                    placeholder='Name...'
                />
                <br />
                <input 
                    type="number"
                    name="age"
                    onChange={this.props.handleChange}
                    value={this.props.friend.age}
                    placeholder='Age...'
                />
                <br />
                <input 
                    type="email"
                    name="email"
                    onChange={this.props.handleChange}
                    value={this.props.friend.email}
                    placeholder='Email...'
                />
                <br />
                <button type="submit">Add Friend</button>
            </form>
        )
    }
}

export default FriendForm;