import React from 'react';

import './home.css';

class Home extends React.Component {
    render() {

        return (
            <>
                <div className='home color-block'></div>
                <div className='hero'></div>
                <div className='hero-text'>
                    <h1>
                        I'M CHADI EZZEDINE.
                        <br />
                        <span>
                            Software Engineer
                        </span>
                    </h1>
                    <p>
                        I'm a French based Software Engineer foccused on Web Development.
                        I am passionate about building usefull web applications that improves the lives of those around me.
                    </p>
                </div>
            </>
        );
    }
}

export default Home;
