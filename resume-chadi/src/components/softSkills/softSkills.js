import React from 'react';
import {
    faHandshake,
    faPeopleArrows,
    faClock,
    faMagnifyingGlass,
    faPeopleGroup,
    faArrowsSplitUpAndLeft,
    faPalette
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './softSkills.css';

class SoftSkills extends React.Component {
    constructor(props) {
        super(props);
        this.props.setAnimateEnd(false);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className='soft-skills'>
                <div className={`title-section ${(this.props.menuPreviousSelect === 1 ? 'entrance-up' : 'entrance-down')} ${this.props.animateEnd ? (this.props.menuWillSelect > 1 ? 'exit-up' : 'exit-down') : ''}`}>
                    <h1>
                        SOFT{' '}
                        <span>SKILLS</span>
                    </h1>
                    <span className='title-bg'>RESUME</span>
                </div>
                <div className={`container scrollbar ${(this.props.menuPreviousSelect === 1 ? 'entrance-up' : 'entrance-down')} ${this.props.animateEnd ? (this.props.menuWillSelect > 1 ? 'exit-up' : 'exit-down') : ''}`}>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faPeopleArrows} />
                        <div className='content'>
                            <h2>Communication</h2>
                            <span>
                                I'm comfortable explaining technical concepts to non-technical stakeholders, and I know how to break down complex ideas into simple, easy-to-understand language.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faHandshake} />
                        <div className='content'>
                            <h2>Relational ease</h2>
                            <span>
                            I have a natural ability to build rapport and establish positive working relationships with people, which has helped me to effectively collaborate and communicate with others throughout my career.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
                        <div className='content'>
                            <h2>Team spirit</h2>
                            <span>
                                I enjoy being part of a team and I thrive in environments where ideas are shared and feedback is encouraged.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faClock} />
                        <div className='content'>
                            <h2>Time management</h2>
                            <span>
                                I prioritize my tasks effectively by breaking down large projects into smaller, manageable tasks and setting realistic deadlines.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                        <div className='content'>
                            <h2>Attention to detail</h2>
                            <span>
                                From meticulously reviewing code to thoroughly testing applications, I strive to ensure that every element of my work is carefully crafted to meet the highest standards.</span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faArrowsSplitUpAndLeft} />
                        <div className='content'>
                            <h2>Flexibility / Adaptability</h2>
                            <span>
                                To stay ahead of the curve and deliver the best possible results, I continuously seek out opportunities to learn new skills and stay up-to-date with the latest industry trends.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faPalette} />
                        <div className='content'>
                            <h2>Creativity</h2>
                            <span>
                                As a software engineer, I find that being creative is essential in my work. It allows me to approach problems in unique ways and come up with innovative solutions to improve my projects.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faPalette} />
                        <div className='content'>
                            <h2>Leadership</h2>
                            <span>
                                I have developed strong leadership skills by taking charge of leading several projects. I like to actively mentor new team members, sharing my knowledge and experience to help them grow and develop in their roles.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SoftSkills;