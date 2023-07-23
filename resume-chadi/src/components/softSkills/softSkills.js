import React from 'react';
import {
    faHandshake,
    faPeopleArrows,
    faClock,
    faMagnifyingGlass,
    faPeopleGroup,
    faArrowsSplitUpAndLeft,
    faFistRaised,
    faHeart
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
                                Je suis à l'aise pour expliquer des concepts techniques à des intervenants non-techniques et je sais comment décomposer des idées complexes en un langage simple et facile à comprendre.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faHandshake} />
                        <div className='content'>
                            <h2>Aisance relationnelle</h2>
                            <span>
                                Je suis ouvert d'esprit, bienveillant et à l'écoute des autres, ce qui facilite les interactions sociales et professionnelles.
                                <br /><br />
                                Au travail, cela me permet de collaborer efficacement avec mes collègues, de résoudre les conflits de manière constructive et d'établir des relations solides avec les partenaires et les clients.
                                <br /><br />
                                Cela contribue à créer un environnement harmonieux et propice aux échanges positifs.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
                        <div className='content'>
                            <h2>Esprit d'equipe</h2>
                            <span>
                                J'aime faire partie d'une équipe et m'épanouir dans des environnements où les revues de code, partage de connaissances et d'idées sont encouragés.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faClock} />
                        <div className='content'>
                            <h2>Gestion du temps</h2>
                            <span>
                                Je priorise efficacement mes tâches en divisant les grands projets en tâches plus petites et gérables et en fixant des délais réalistes.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                        <div className='content'>
                            <h2>Attention au detail</h2>
                            <span>
                                J'accorde une grande importance à une réflexion critique sur le code que je développe.
                                <br /><br />
                                Mon objectif est de toujours proposer des solutions maintenables et évolutives.
                                <br /><br />
                                J'apprécie l'opportunité de recevoir des retours constructifs de mes pairs et je suis ouvert à l'idée d'apporter des ajustements pour garantir la qualité et la performance du code.
                                <br /><br />
                                Cela me permet de me perfectionner en tant que développeur et de contribuer à la réussite des projets sur lesquels je travaille.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faArrowsSplitUpAndLeft} />
                        <div className='content'>
                            <h2>Flexibilite / Autonomie</h2>
                            <span>
                                Je suis capable de rapidement maîtriser de nouveaux langages et technologies et je suis prêt à développer mes compétences pour assurer le succès de mes projets.
                                <br /><br />
                                J'aime travailler de manière autonome, mais je sais également solliciter l'aide de mes collègues lorsque cela est nécessaire pour surmonter des obstacles et atteindre les objectifs fixés.
                                <br /><br />
                                Mon approche flexible et mon engagement à apprendre en continu me permettent de mener à bien des projets diversifiés avec efficacité.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faHeart} />
                        <div className='content'>
                            <h2>Passion</h2>
                            <span>
                                Je consacre volontiers des heures à consolider les connaissances que j'ai déjà acquises, mais également à explorer de nouveaux langages de programmation et technologies au travers de projets personnels stimulants.
                            </span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon className='icon' icon={faFistRaised} />
                        <div className='content'>
                            <h2>Force de proposition</h2>
                            <span>
                                Toujours soucieux d'améliorer les solutions techniques, je n'hésite pas à proposer des idées novatrices pour optimiser les processus de développement et améliorer les performances des applications.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SoftSkills;