import React from 'react';
import {connect} from 'react-redux';
import PhoneBook from './phoneBook';
import {selectContacts} from '../../redux/selectors/selectors';

const PhoneBookContainer = (props) => {
    return (
        <div>
            <PhoneBook phoneBookContacts={props.phoneBookContacts}/>
        </div>
    )
};


const mapStateToProps = (state) => (
    {
        phoneBookContacts: selectContacts(state),
    });


export default connect(mapStateToProps, null)(PhoneBookContainer);