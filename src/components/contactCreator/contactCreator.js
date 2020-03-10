import React from 'react';
import styles from './contactCreator.module.scss'

class ContactCreator extends React.Component {
    state = {
        userFirstName: '',
        userLastName: '',
        userPhone: '',
        id: 1,
    };

    onSubmit = () => {
        if (this.state.userLastName && this.state.userPhone) {
            this.props.submitContactInfo(this.state);
            this.setState({
                userFirstName: '',
                userLastName: '',
                userPhone: '',
                id: this.state.id + 1,
            })
        } else {
            return null;
        }
    };

    handleUserInput = (e) => {
        const target = e.target.name;
        const value = e.target.value;
        this.setState({
            [target]: value,
        })
    };

    render() {
        console.log(this.props, 9090);
        return (
            <form
                className={styles.formContainer}
                onSubmit={(e) => (e.preventDefault())}
            >
                <label>First name:</label>
                <input
                    name='userFirstName'
                    type="text"
                    value={this.state.userFirstName}
                    onChange={this.handleUserInput}
                />
                <label>Last name:</label>
                <input
                    name='userLastName'
                    type="text"
                    value={this.state.userLastName}
                    onChange={this.handleUserInput}
                />
                <label>Phone:</label>
                <input
                    name='userPhone'
                    type="number"
                    value={this.state.userPhone}
                    onChange={this.handleUserInput}
                />
                <input
                    onClick={this.onSubmit}
                    className={styles.submitButton}
                    type='submit'
                    value='Add user'
                />
            </form>
        )
    }
}

export default ContactCreator;
