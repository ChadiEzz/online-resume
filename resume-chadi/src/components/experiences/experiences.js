import React from 'react';
import {
    faBriefcase, faGraduationCap
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
                                <span className='date-experiences'>October 2020 - Present</span>
                                <h5 className='experiences-content-h5'>
                                    FULLSTACK ENGINEER
                                    <span className='experiences-content-span'>
                                        Septeo Solutions Notaires
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>
                                    Work in a team following the Agile Scrum methodology, development
                                    of new features, bug fixes, code refactoring projects, redesign of the
                                    front-end interface, proposals and implementation of POC,
                                    implementation of automation pipelines.
                                    <br />
                                    <br />
                                    SKILLS :
                                    <br />
                                    <span className='listCustom'>•</span> Vue.js, TypeScript, SCSS, npm, Figma
                                    <br />
                                    <span className='listCustom'>•</span> .Net, C#, Microsoft SQL Server Management, SQL
                                    <br />
                                    <span className='listCustom'>•</span> Git Extensions, Azure DevOps, Visual Studio, Teams
                                </p>
                            </div>
                        </li>
                        <li>
                            <i className='icon-experiences'>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </i>
                            <div className='experiences-content'>
                                <span className='date-experiences'>April - September 2020</span>
                                <h5 className='experiences-content-h5'>
                                    Web developer
                                    <span className='experiences-content-span'>
                                        ELISSAR Logiciels
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>
                                    Development, update and deployment of a Citizen Portal
                                    <br />
                                    <br />
                                    SKILLS :
                                    <br />
                                    <span className='listCustom'>•</span> ReactJS, JavaScript, CSS, NodeJS, Express.js
                                    <br />
                                    <span className='listCustom'>•</span> Postman, MySQL Workbench, DB Designer
                                    <br />
                                    <span className='listCustom'>•</span> PuTTY, FileZilla Client, GitHub Desktop
                                    <br />
                                    <span className='listCustom'>•</span> Visual Studio Community, TeamViewer
                                </p>
                            </div>
                        </li>
                        <li>
                            <i className='icon-experiences'>
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </i>
                            <div className='experiences-content'>
                                <span className='date-experiences'>2020 - 2021</span>
                                <h5 className='experiences-content-h5'>
                                    Bachelor Software Engineering Manager
                                    <span className='experiences-content-span'>
                                        CESI
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>
                                    <span className='listCustom'>•</span> Analyze, model, design and develop software solutions
                                    <br />
                                    <span className='listCustom'>•</span> Organize and manage an IT project
                                    <br />
                                    <span className='listCustom'>•</span> Ensure the quality of software development
                                    <br />
                                    <span className='listCustom'>•</span> Commissioning, maintaining and securing computer applications
                                    <br />
                                    <span className='listCustom'>•</span> Manage teams and resources
                                    <br />
                                    <span className='listCustom'>•</span> Anticipating technological evolutions
                                </p>
                            </div>
                        </li>
                        <li>
                            <i className='icon-experiences'>
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </i>
                            <div className='experiences-content'>
                                <span className='date-experiences'>2016 - 2019</span>
                                <h5 className='experiences-content-h5'>
                                    Information Technology Expert
                                    <span className='experiences-content-span'>
                                        Epitech
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>
                                    <span className='listCustom'>•</span> Programming in different languages (C, C++, Python, Bash, Assembly, Kotlin, Java)
                                    <br />
                                    <span className='listCustom'>•</span> Ensure the quality of software development
                                    <br />
                                    <span className='listCustom'>•</span> Software Architecture
                                    <br />
                                    <span className='listCustom'>•</span> Project management
                                    <br />
                                    <span className='listCustom'>•</span> Articial intelligence
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Experiences;