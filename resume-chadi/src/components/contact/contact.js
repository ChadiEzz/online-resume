import React from 'react';
import {
    faCloudDownload
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pdfFile from '../../CV-CHADI_EZZEDINE-FR.pdf';

import './contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.props.setAnimateEnd(false);
    }

    componentDidMount() {
    }

    handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.target = '_blank';
        link.download = 'CV-CHADI_EZZEDINE-FR.pdf';
    
        link.click();
      };

    render() {

        return (
            <div className={`contact ${'contact-entrance-up'} ${this.props.animateEnd ? (this.props.menuWillSelect < 5 ? 'contact-exit-down' : '') : ''}`}>
                <FontAwesomeIcon className='iconContact' icon={faCloudDownload}  onClick={this.handleDownload} />
                TELECHARGER LE CV
            </div>
        );
    }
}

export default Contact;