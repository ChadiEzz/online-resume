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
                        MES{' '}
                        <span>EXPERIENCES</span>
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
                                <span className='date-experiences'>Octobre 2020 - Juin 2020</span>
                                <h5 className='experiences-content-h5'>
                                    Developpeur FullStack
                                    <span className='experiences-content-span'>
                                        Septeo Solutions Notaires
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>
                                    Travail dans une equipe suivant la methodologie Agile Scrum,
                                    developpement de nouvelles fonctionnalites, corrections de bugs,
                                    projets de refactorisation du code, refonte du front-end, propositions et
                                    mis en place de POC, mis en place de pipeline d'automatisation.
                                    <br />
                                    <br />
                                    COMPETENCES :
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
                                <span className='date-experiences'>Avril - Septembre 2020</span>
                                <h5 className='experiences-content-h5'>
                                    Developpeur Web
                                    <span className='experiences-content-span'>
                                        ELISSAR Logiciels
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>
                                    Developpement, mise à jour et deploiement d'un Portail Citoyen
                                    <br />
                                    <br />
                                    COMPETENCES :
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
                                    Bachelor Responsable en Ingénierie des Logiciels
                                    <span className='experiences-content-span'>
                                        CESI
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>
                                    <span className='listCustom'>•</span> Analyser, modeliser, concevoir et developper les solutions logicielles
                                    <br />
                                    <span className='listCustom'>•</span> Organiser et piloter un projet informatique
                                    <br />
                                    <span className='listCustom'>•</span> Assurer la qualite des developpements logiciels
                                    <br />
                                    <span className='listCustom'>•</span> Mettre en service, maintenir et securiser les applications informatiques
                                    <br />
                                    <span className='listCustom'>•</span> Gerer les equipes et les ressources
                                    <br />
                                    <span className='listCustom'>•</span> Anticiper les evolutions technologiques
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
                                    Expert en Technologies de l'Information
                                    <span className='experiences-content-span'>
                                        Epitech
                                    </span>
                                </h5>
                                <p className='experiences-content-p'>
                                    <span className='listCustom'>•</span> Programmation dans differents languages (C, C++, Python, Bash, Assembleur, Kotlin, Java)
                                    <br />
                                    <span className='listCustom'>•</span> Assurer la qualite des developpements logiciels
                                    <br />
                                    <span className='listCustom'>•</span> Architecture logicielle
                                    <br />
                                    <span className='listCustom'>•</span> Gestion de projet
                                    <br />
                                    <span className='listCustom'>•</span> Intelligence articielle
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