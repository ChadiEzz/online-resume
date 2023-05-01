import React from 'react';

import './home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props.setAnimateEnd(false);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className='home'>
                <div className={`color-block ${'entrance-right'} ${this.props.animateEnd ? (this.props.menuWillSelect > 1 ? 'exit-up' : '') : ''}`}></div>
                <div className={`hero ${(this.props.menuPreviousSelect === 1 ? 'fade-in' : 'entrance-down')} ${this.props.animateEnd ? (this.props.menuWillSelect > 1 ? 'exit-up' : '') : ''}`}></div>
                <div className={`hero-text ${(this.props.menuPreviousSelect === 1 ? 'fade-in' : 'entrance-down')} ${this.props.animateEnd ? (this.props.menuWillSelect > 1 ? 'exit-up' : '') : ''}`}>
                    <h1>
                        I'M CHADI EZZEDINE.
                        <br />
                        <span>
                            Software Engineer
                        </span>
                    </h1>
                    <p>
                        As a software engineer with over three years of experience, I have developed a strong foundation in web application development.
                        I am passionate about building scalable and efficient applications that deliver a seamless user experience.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
