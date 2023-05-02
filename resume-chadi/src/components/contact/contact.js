import React from 'react';
import {
    faPersonDigging
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.props.setAnimateEnd(false);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className='contact'>
                <FontAwesomeIcon className='iconContact' icon={faPersonDigging} />
                WORK IN PROGRESS
            </div>
        );
    }
}

export default Contact;