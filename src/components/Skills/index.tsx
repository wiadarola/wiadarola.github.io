import './index.css';
import Divider from '../Divider';
import { useState } from 'react';

export default function Skills() {
    const [selectedSkillType, setSelectedSkillType] = useState('Languages');

    const skillsData = [
        { name: 'JavaScript', type: 'language', description: 'Scripting language for web interactivity.', link: '/src/assets/javascript.svg' },
        { name: 'TypeScript', type: 'language', description: 'Superset of JS with static typing features.', link: '/src/assets/typescript.svg' },
        { name: 'HTML', type: 'language', description: 'Markup language for web development.', link: '/src/assets/html5.svg' },
        { name: 'CSS', type: 'language', description: 'Styling for web applications.', link: '/src/assets/css3.svg' },
        { name: 'C', type: 'language', description: 'Low-level programming for system development.', link: '/src/assets/C_Programming_Language.svg' },
        { name: 'C++', type: 'language', description: 'Object-oriented, used in various applications.', link: '/src/assets/c.svg' },
        // { name: 'Assembly', type: 'language', description: 'Lowest level human-readable language.', link: '' },
        { name: 'Python', type: 'language', description: 'Versatile language for web, data science, and more.', link: '/src/assets/python.svg' },
        { name: 'Java', type: 'language', description: 'Object-oriented, used in various applications.', link: '/src/assets/java.svg' },
        { name: 'PHP', type: 'language', description: 'Server-side scripting for web development.', link: '/src/assets/new-php-logo.svg' },
        { name: 'SQL', type: 'language', description: 'Used for database queries.', link: '/src/assets/sql-database-generic.svg' },
        { name: 'Flask', type: 'framework', description: 'Python micro web framework.', link: '/src/assets/pocoo_flask-icon.svg' },
        { name: 'React', type: 'framework', description: 'JavaScript library for building user interfaces.', link: '/src/assets/react.svg' },
        { name: 'JQuery', type: 'framework', description: 'JavaScript library for DOM manipulation.', link: '/src/assets/jquery-icon.svg' },
        { name: 'MySQL', type: 'framework', description: 'Open-source relational database management system.', link: '/src/assets/mysql-icon.svg' },
        { name: 'Bootstrap', type: 'framework', description: 'CSS framework for responsive design.', link: '/src/assets/bootstrap.svg' },
        { name: 'Oracle Database', type: 'framework', description: 'Object-relational database management system.', link: '/src/assets/oracle-icon.svg' },
        { name: 'Node.js', type: 'tool', description: 'Runtime for executing JavaScript on the server side.', link: '/src/assets/nodejs.svg' },
        { name: 'Vue.js', type: 'framework', description: 'Progressive framework for building user interfaces.', link: '/src/assets/vuejs.svg' },
        { name: 'Docker', type: 'tool', description: 'Platform for containerization.', link: '/src/assets/docker-tile.svg' },
        { name: 'Kubernetes', type: 'tool', description: 'Container orchestration system.', link: '/src/assets/kubernetes-icon.svg' },
        { name: 'Git', type: 'tool', description: 'Version control system.', link: '/src/assets/gitlab.svg' },
        { name: 'PostgreSQL', type: 'framework', description: 'Open-source relational database.', link: '/src/assets/postgresql.svg' },
        { name: 'Jira', type: 'tool', description: 'Project management tool.', link: '/src/assets/jira.svg' },
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
                                    <>
                                        <SkillCard key={skill.name} skill={skill} />
                                    </>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            } />
        </div>
    );
}

const needBackground = new Set().add('/src/assets/java.svg').add('/src/assets/nodejs.svg').add('/src/assets/mysql-icon.svg');
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

