import React from 'react';

import './menu.css';

import {
    faHouseChimney,
    faUser,
    faBriefcase,
    faCode,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setLoaded: false
        };
    }

    componentDidMount() {
        this.setState({ setLoaded: true });
    }

    render() {

        return (
            <div className={`menu ${this.state.setLoaded ? 'fade-in' : ''}`}>
                <ul>
                    <li className={`${this.props.menuDisabled ? 'enabled' : 'disabled'} ${this.props.menuSelect === 1 ? 'selected' : 'unselected'}`} onClick={() => this.props.onSelectChange(1)}>
                        <i>
                            <FontAwesomeIcon icon={faHouseChimney} />
                        </i>
                        <h2>home</h2>
                    </li>
                    <li className={`${this.props.menuDisabled ? 'enabled' : 'disabled'} ${this.props.menuSelect === 2 ? 'selected' : 'unselected'}`} onClick={() => this.props.onSelectChange(2)}>
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <h2>soft skills</h2>
                    </li>
                    <li className={`${this.props.menuDisabled ? 'enabled' : 'disabled'} ${this.props.menuSelect === 3 ? 'selected' : 'unselected'}`} onClick={() => this.props.onSelectChange(3)}>
                        <i>
                            <FontAwesomeIcon icon={faCode} />
                        </i>
                        <h2>hard skills</h2>
                    </li>
                    <li className={`${this.props.menuDisabled ? 'enabled' : 'disabled'} ${this.props.menuSelect === 4 ? 'selected' : 'unselected'}`} onClick={() => this.props.onSelectChange(4)}>
                        <i>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </i>
                        <h2>experience</h2>
                    </li>
                    {
                        /*
                        <li className={`${this.props.menuDisabled ? 'enabled' : 'disabled'} ${this.props.menuSelect === 5 ? 'selected' : 'unselected'}`} onClick={() => this.props.onSelectChange(5)}>
                            <i>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </i>
                            <h2>contact</h2>
                        </li>
                        */
                    }
                </ul>
            </div>
        );
    }
}

export default Menu;