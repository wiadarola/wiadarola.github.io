import './index.css';
import Divider from '../Divider';
import { useState, Fragment } from 'react';
import javascriptSVG from '/assets/javascript.svg';
import typescriptSVG from '/assets/typescript.svg';
import htmlSVG from '/assets/html5.svg';
import cssSVG from '/assets/css3.svg';
import cSVG from '/assets/C_Programming_Language.svg';
import cppSVG from '/assets/c.svg';
import pythonSVG from '/assets/python.svg';
import javaSVG from '/assets/java.svg';
import phpSVG from '/assets/new-php-logo.svg';
import sqlSVG from '/assets/sql-database-generic.svg';
import flaskSVG from '/assets/pocoo_flask-icon.svg';
import reactSVG from '/assets/react.svg';
import jquerySVG from '/assets/jquery-icon.svg';
import mysqlSVG from '/assets/mysql-icon.svg';
import bootstrapSVG from '/assets/bootstrap.svg';
import oracleSVG from '/assets/oracle-icon.svg';
import nodejsSVG from '/assets/nodejs.svg';
import vuejsSVG from '/assets/vuejs.svg';
import dockerSVG from '/assets/docker-tile.svg';
import kubernetesSVG from '/assets/kubernetes-icon.svg';
import gitSVG from '/assets/gitlab.svg';
import postgresqlSVG from '/assets/postgresql.svg';
import jiraSVG from '/assets/jira.svg';


export default function Skills() {
    const [selectedSkillType, setSelectedSkillType] = useState('Languages');

    const skillsData = [
        { name: 'JavaScript', type: 'language', description: 'Scripting language for web interactivity.', link: javascriptSVG },
        { name: 'TypeScript', type: 'language', description: 'Superset of JS with static typing features.', link: typescriptSVG },
        { name: 'Python', type: 'language', description: 'Versatile language for web, data science, and more.', link: pythonSVG },
        { name: 'HTML', type: 'language', description: 'Markup language for web development.', link: htmlSVG },
        { name: 'CSS', type: 'language', description: 'Styling for web applications.', link: cssSVG },
        { name: 'C', type: 'language', description: 'Low-level programming for system development.', link: cSVG },
        { name: 'C++', type: 'language', description: 'Object-oriented, used in various applications.', link: cppSVG },
        { name: 'Java', type: 'language', description: 'Object-oriented, used in various applications.', link: javaSVG },
        { name: 'PHP', type: 'language', description: 'Server-side scripting for web development.', link: phpSVG },
        { name: 'SQL', type: 'language', description: 'Used for database queries.', link: sqlSVG },
        { name: 'Flask', type: 'framework', description: 'Python micro web framework.', link: flaskSVG },
        { name: 'React', type: 'framework', description: 'JavaScript library for building user interfaces.', link: reactSVG },
        { name: 'JQuery', type: 'framework', description: 'JavaScript library for DOM manipulation.', link: jquerySVG },
        { name: 'MySQL', type: 'framework', description: 'Open-source relational database management system.', link: mysqlSVG },
        { name: 'Bootstrap', type: 'framework', description: 'CSS framework for responsive design.', link: bootstrapSVG },
        { name: 'Oracle DB', type: 'framework', description: 'Object-relational database management system.', link: oracleSVG },
        { name: 'Node.js', type: 'tool', description: 'Runtime for executing JavaScript on the server side.', link: nodejsSVG },
        { name: 'Vue.js', type: 'framework', description: 'Progressive framework for building user interfaces.', link: vuejsSVG },
        { name: 'Docker', type: 'tool', description: 'Platform for containerization.', link: dockerSVG },
        { name: 'Kubernetes', type: 'tool', description: 'Container orchestration system.', link: kubernetesSVG },
        { name: 'Git', type: 'tool', description: 'Version control system.', link: gitSVG },
        { name: 'PostgreSQL', type: 'framework', description: 'Open-source relational database.', link: postgresqlSVG },
        { name: 'Jira', type: 'tool', description: 'Project management tool.', link: jiraSVG },
    ];


    return (
        <div id='skills'>
            < Divider id='skills-divider-container' content={
                <>
                    <div id='skills-header'>
                        <header>SKILLS</header>
                        <div>
                            {['Languages', 'Frameworks', 'Tools'].map(type =>
                                <span key={`${type}-span`}
                                    className={`skill-group ${selectedSkillType === type ? 'active' : ''}`}
                                    onClick={() => setSelectedSkillType(type)}>
                                    {type}
                                </span>
                            )}
                        </div>
                    </div>
                    <div id='skills-content'>
                        {['Frameworks', 'Languages', 'Tools'].map(type => selectedSkillType === type && (
                            <div key={type} className='skills-type' id={`${type}-skills-container`}>
                                <div className='skills-container'>
                                    {skillsData.filter(skill => type.toLowerCase().includes(skill.type)).map(skill => (
                                        <Fragment key={skill.link}>
                                            <SkillCard skill={skill} />
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            } />
        </div>
    );
}

const needBackground = new Set()/* .add('/assets/java.svg').add('/assets/nodejs.svg').add('/assets/mysql-icon.svg'); */
function SkillCard({ skill }: { skill: { name: string; type: string; description: string; link: string } }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className='skill-card'>
            <div className={`card-front ${isFlipped ? 'active' : ''}`} onClick={() => setIsFlipped(true)}>
                <img src={skill.link} alt={`${skill.name} icon`} className={`skill-icon ${needBackground.has(skill.link) ? 'background' : ''}`} />
                <span className='card-front-name'>{skill.name}</span>
            </div>
            <div className={`card-back ${isFlipped ? 'active' : ''}`} onClick={() => { setIsFlipped(false); }}>
                <span className='card-back-name'>{skill.name}</span>
                <span className='card-back-desc'>{skill.description}</span>
            </div>
        </div>
    );
}

