import React from 'react';

class FriendForm extends React.Component {
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