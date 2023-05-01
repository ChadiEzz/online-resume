import React from 'react';
import {
    faPersonDigging
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './hardSkills.css';

class HardSkills extends React.Component {
    constructor(props) {
        super(props);
        this.props.setAnimateEnd(false);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className='hard-skills'>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
                <div className={`title-section-hard ${(this.props.menuPreviousSelect > 3 ? 'entrance-down-hard' : 'entrance-up-hard')} ${this.props.animateEnd ? (this.props.menuWillSelect > 3 ? 'exit-up-hard' : 'exit-down-hard') : ''}`}>
                    <h1>
                        HARD{' '}
                        <span>SKILLS</span>
                    </h1>
                    <span className='title-bg-hard'>RESUME</span>
                </div>
                <div className={`container-hard scrollbar ${(this.props.menuPreviousSelect > 3 ? 'entrance-down-hard' : 'entrance-up-hard')} ${this.props.animateEnd ? (this.props.menuWillSelect > 3 ? 'exit-up-hard' : 'exit-down-hard') : ''}`}>
                    <div className='box-hard'>
                        <h2>Productivity</h2>
                        <div className='item-list-hard'>
                            <div className='content-hard'>
                                <i class="devicon-sass-plain" />
                                <span>SASS/SCSS</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-react-plain" />
                                <span>React</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-vuejs-plain" />
                                <span>Vue.js</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-nodejs-plain" />
                                <span>Node.Js</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-dot-net-plain" />
                                <span>.NET</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-vscode-plain" />
                                <span>VS Code</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-visualstudio-plain" />
                                <span>Visual Studio</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-git-plain" />
                                <span>Git</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-azure-plain" />
                                <span>Azure DevOps</span>
                            </div>
                        </div>
                    </div>
                    <div className='box-hard'>
                        <h2>Coding Languages</h2>
                        <div className='item-list-hard'>
                            <div className='content-hard'>
                                <i class="devicon-javascript-plain" />
                                <span>Javascript</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-typescript-plain" />
                                <span>Typescript</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-html5-plain" />
                                <span>HTML5</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-css3-plain" />
                                <span>CSS3</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-csharp-plain" />
                                <span>C Sharp</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-c-plain" />
                                <span>C</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-python-plain" />
                                <span>Python</span>
                            </div>
                        </div>
                    </div>
                    <div className='box-hard'>
                        <h2>Database</h2>
                        <div className='item-list-hard'>
                            <div className='content-hard'>
                                <i class="devicon-mysql-plain" />
                                <span>MySQL</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-mongodb-plain" />
                                <span>MongoDB</span>
                            </div>
                            <div className='content-hard'>
                                <i class="devicon-microsoftsqlserver-plain" />
                                <span>SQL Server</span>
                            </div>
                        </div>
                    </div>
                    <div className='box-hard unjustify-hard'>
                        <h2>Languages</h2>
                        <div className='item-list-hard'>
                            <ul>
                                <li>
                                    French : Native
                                </li>
                                <li>
                                    English : Business
                                </li>
                                <li>
                                    Japanese : <FontAwesomeIcon className='icon' icon={faPersonDigging} /> Work in progress <FontAwesomeIcon className='icon' icon={faPersonDigging} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default HardSkills;