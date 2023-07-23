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
                <div className={`color-block ${'entrance-right'} ${this.props.animateEnd ? (this.props.menuWillSelect > 1 ? 'block-exit-up' : '') : ''}`}></div>
                <div className={`hero ${(this.props.menuPreviousSelect === 1 ? 'fade-in' : 'entrance-down')} ${this.props.animateEnd ? (this.props.menuWillSelect > 1 ? 'hero-exit-up' : '') : ''}`}></div>
                <div className={`hero-text ${(this.props.menuPreviousSelect === 1 ? 'fade-in' : 'entrance-down')} ${this.props.animateEnd ? (this.props.menuWillSelect > 1 ? 'hero-exit-up' : '') : ''}`}>
                    <h1>
                        JE SUIS CHADI EZZEDINE.
                        <br />
                        <span>
                            Développeur Full-Stack
                        </span>
                    </h1>
                    <p>
                        Après 5 années d'études, dont 3 ans en alternance en tant que développeur Full-Stack, j'ai développé une base solide dans le développement d'applications Web. Je suis passionné par la création d'applications évolutives et efficaces qui offrent une expérience utilisateur fluide.
                        <br />
                        <br />
                        Actuellement à l'écoute du marché en tant que développeur Full-Stack Javascript et Typescript avec pour objectif de signer mon premier CDI, mais aussi d'opportunités de missions en freelance.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
