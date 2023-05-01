import React from 'react';
import {
    faHandshake,
    faPeopleArrows,
    faClock,
    faMagnifyingGlass,
    faPeopleGroup,
    faArrowsSplitUpAndLeft
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
                                <br /><br />
                                Whether I'm working with a team or presenting to clients, I always make sure that everyone is on the same page and that everyone feels heard and understood.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faHandshake} />
                        <div className='content'>
                            <h2>Problem-solving</h2>
                            <span>
                                I love tackling challenging technical problems and finding creative solutions, even under tight deadlines.
                                <br /><br />
                                I take pride in my ability to think outside the box and come up with innovative ideas that improve the user experience.
                                <br /><br />
                                Whether it's debugging a tricky code issue or optimizing system performance, I'm always up for the challenge !
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
                        <div className='content'>
                            <h2>Collaboration</h2>
                            <span>
                                I enjoy being part of a team and I thrive in environments where ideas are shared and feedback is encouraged.
                                <br /><br />
                                I am always willing to lend a helping hand and I communicate effectively to ensure that our team's goals are achieved.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faClock} />
                        <div className='content'>
                            <h2>Time management</h2>
                            <span>
                                I prioritize my tasks effectively by breaking down large projects into smaller, manageable tasks and setting realistic deadlines.
                                <br /><br />
                                I also constantly evaluate my progress and adjust my schedule accordingly.
                                <br /><br />
                                This helps me to balance my workload and ensure that I meet project deadlines while maintaining a high level of productivity.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                        <div className='content'>
                            <h2>Attention to detail</h2>
                            <span>
                                From meticulously reviewing code to thoroughly testing applications, I strive to ensure that every element of my work is carefully crafted to meet the highest standards.
                                <br /><br />
                                By maintaining a keen eye for detail, I am able to identify potential issues and address them before they become larger problems, ultimately leading to more efficient and effective development.</span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faArrowsSplitUpAndLeft} />
                        <div className='content'>
                            <h2>Adaptability</h2>
                            <span>
                                I understand the importance of keeping up with the rapidly changing technology landscape.
                                <br /><br />
                                To stay ahead of the curve and deliver the best possible results for my clients, I continuously seek out opportunities to learn new skills and stay up-to-date with the latest industry trends.
                                <br /><br />
                                This mindset of adaptability allows me to approach challenges with a fresh perspective and confidently navigate new and unfamiliar situations.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SoftSkills;