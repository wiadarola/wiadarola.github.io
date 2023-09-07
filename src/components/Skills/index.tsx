import './index.css';
import Divider from '../Divider';
import { useState, Fragment } from 'react';


export default function Skills() {
    const [selectedSkillType, setSelectedSkillType] = useState('Languages');

    const skillsData = [
        { name: 'JavaScript', type: 'language', description: 'Scripting language for web interactivity.', link: '/assets/javascript.svg' },
        { name: 'TypeScript', type: 'language', description: 'Superset of JS with static typing features.', link: '/assets/typescript.svg' },
        { name: 'HTML', type: 'language', description: 'Markup language for web development.', link: '/assets/html5.svg' },
        { name: 'CSS', type: 'language', description: 'Styling for web applications.', link: '/assets/css3.svg' },
        { name: 'C', type: 'language', description: 'Low-level programming for system development.', link: '/assets/C_Programming_Language.svg' },
        { name: 'C++', type: 'language', description: 'Object-oriented, used in various applications.', link: '/assets/c.svg' },
        // { name: 'Assembly', type: 'language', description: 'Lowest level human-readable language.', link: '' },
        { name: 'Python', type: 'language', description: 'Versatile language for web, data science, and more.', link: '/assets/python.svg' },
        { name: 'Java', type: 'language', description: 'Object-oriented, used in various applications.', link: '/assets/java.svg' },
        { name: 'PHP', type: 'language', description: 'Server-side scripting for web development.', link: '/assets/new-php-logo.svg' },
        { name: 'SQL', type: 'language', description: 'Used for database queries.', link: '/assets/sql-database-generic.svg' },
        { name: 'Flask', type: 'framework', description: 'Python micro web framework.', link: '/assets/pocoo_flask-icon.svg' },
        { name: 'React', type: 'framework', description: 'JavaScript library for building user interfaces.', link: '/assets/react.svg' },
        { name: 'JQuery', type: 'framework', description: 'JavaScript library for DOM manipulation.', link: '/assets/jquery-icon.svg' },
        { name: 'MySQL', type: 'framework', description: 'Open-source relational database management system.', link: '/assets/mysql-icon.svg' },
        { name: 'Bootstrap', type: 'framework', description: 'CSS framework for responsive design.', link: '/assets/bootstrap.svg' },
        { name: 'Oracle Database', type: 'framework', description: 'Object-relational database management system.', link: '/assets/oracle-icon.svg' },
        { name: 'Node.js', type: 'tool', description: 'Runtime for executing JavaScript on the server side.', link: '/assets/nodejs.svg' },
        { name: 'Vue.js', type: 'framework', description: 'Progressive framework for building user interfaces.', link: '/assets/vuejs.svg' },
        { name: 'Docker', type: 'tool', description: 'Platform for containerization.', link: '/assets/docker-tile.svg' },
        { name: 'Kubernetes', type: 'tool', description: 'Container orchestration system.', link: '/assets/kubernetes-icon.svg' },
        { name: 'Git', type: 'tool', description: 'Version control system.', link: '/assets/gitlab.svg' },
        { name: 'PostgreSQL', type: 'framework', description: 'Open-source relational database.', link: '/assets/postgresql.svg' },
        { name: 'Jira', type: 'tool', description: 'Project management tool.', link: '/assets/jira.svg' },
    ];


    return (
        <div id='skills'>
            < Divider id='skills-divider-container' content={
                <>
                    <div id='skills-header'>
                        <h1>SKILLS</h1>
                        {['Languages', 'Frameworks', 'Tools'].map(type =>
                            <span key={`${type}-span`}
                                className={`skill-group ${selectedSkillType === type ? 'active' : ''}`}
                                onClick={() => setSelectedSkillType(type)}>
                                {type}
                            </span>
                        )}
                    </div>
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
                </>
            } />
        </div>
    );
}

const needBackground = new Set().add('/assets/java.svg').add('/assets/nodejs.svg').add('/assets/mysql-icon.svg');
function SkillCard({ skill }: { skill: { name: string; type: string; description: string; link: string } }) {
    return (
        <div className='skill-card'>
            <div className='card-front'>
                <img src={skill.link} alt={`${skill.name} icon`} className={`skill-icon ${needBackground.has(skill.link) ? 'background' : ''}`} />
                <span className='card-back-name'>{skill.name}</span>
            </div>
            <div className='card-back'>
                <span className='card-back-desc'>{skill.description}</span>
            </div>
        </div>
    );
}

