import React from 'react';
import {
    faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './experiences.css';

class Experiences extends React.Component {
    constructor(props) {
        super(props);
        this.props.setAnimateEnd(false);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className='experiences'>
                <div className={`title-section-experiences ${(this.props.menuPreviousSelect > 4 ? 'entrance-down-experiences' : 'entrance-up-experiences')} ${this.props.animateEnd ? (this.props.menuWillSelect > 4 ? 'exit-up-experiences' : 'exit-down-experiences') : ''}`}>
                    <h1>
                        MY{' '}
                        <span>EXPERIENCE</span>
                    </h1>
                    <span className='title-bg-experiences'>RESUME</span>
                </div>
                <div className={`container-experiences scrollbar ${(this.props.menuPreviousSelect > 4 ? 'entrance-up-container-experiences' : 'entrance-down-container-experiences')} ${this.props.animateEnd ? (this.props.menuWillSelect > 4 ? 'exit-up-container-experiences' : 'exit-down-container-experiences') : ''}`}>
                    <ul>
                        <li>
                            <i className='icon-experiences'>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </i>
                            <div className='experiences-content'>
                                <span className='date-experiences'>2018 - Present</span>
                                <h5 className='experiences-content-h5'>
                                    FULLSTACK ENGINEER
                                    <span className='experiences-content-span'>
                                        GENAPI
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit </p>
                            </div>
                        </li>
                        <li>
                            <i className='icon-experiences'>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </i>
                            <div className='experiences-content'>
                                <span className='date-experiences'>2018 - Present</span>
                                <h5 className='experiences-content-h5'>
                                    FULLSTACK ENGINEER
                                    <span className='experiences-content-span'>
                                        GENAPI
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit </p>
                            </div>
                        </li>
                        <li>
                            <i className='icon-experiences'>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </i>
                            <div className='experiences-content'>
                                <span className='date-experiences'>2018 - Present</span>
                                <h5 className='experiences-content-h5'>
                                    FULLSTACK ENGINEER
                                    <span className='experiences-content-span'>
                                        GENAPI
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit </p>
                            </div>
                        </li>
                        <li>
                            <i className='icon-experiences'>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </i>
                            <div className='experiences-content'>
                                <span className='date-experiences'>2018 - Present</span>
                                <h5 className='experiences-content-h5'>
                                    FULLSTACK ENGINEER
                                    <span className='experiences-content-span'>
                                        GENAPI
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Experiences;