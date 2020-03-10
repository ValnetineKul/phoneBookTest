import React from 'react';
import {connect} from 'react-redux';
import {submitContactInfo} from '../../redux/Actions';
import ContactCreator from './contactCreator';

const ContactCreatorContainer = (props) => {
    return (
        <div>
            <ContactCreator
                submitContactInfo={props.submitContactInfo}
            />
        </div>
    )
};

export default connect(null, { submitContactInfo })(ContactCreatorContainer);
