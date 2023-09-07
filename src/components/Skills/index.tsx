import './index.css';
import Divider from '../Divider';
import { useState } from 'react';

export default function Skills() {
    const [selectedSkillType, setSelectedSkillType] = useState('Languages');

    const skillsData = [
        { name: 'JavaScript', type: 'language', description: 'Used in several frontend projects.' },
        { name: 'TypeScript', type: 'language', description: 'Applied in React and Angular projects.' },
        { name: 'HTML', type: 'language', description: 'Markup language for web development.' },
        { name: 'CSS', type: 'language', description: 'Styling for web applications.' },
        { name: 'C', type: 'language', description: 'Low-level programming for system development.' },
        { name: 'C++', type: 'language', description: 'Object-oriented, used in various applications.' },
        { name: 'Assembly', type: 'language', description: 'Lowest level human-readable language.' },
        { name: 'Python', type: 'language', description: 'Versatile language for web, data science, and more.' },
        { name: 'Java', type: 'language', description: 'Object-oriented, used in various applications.' },
        { name: 'PHP', type: 'language', description: 'Server-side scripting for web development.' },
        { name: 'SQL', type: 'language', description: 'Used for database queries.' },
        { name: 'Flask', type: 'framework', description: 'Python micro web framework.' },
        { name: 'React', type: 'framework', description: 'JavaScript library for building user interfaces.' },
        { name: 'JQuery', type: 'framework', description: 'JavaScript library for DOM manipulation.' },
        { name: 'MySQL', type: 'framework', description: 'Open-source relational database management system.' },
        { name: 'Bootstrap', type: 'framework', description: 'CSS framework for responsive design.' },
        { name: 'Oracle Database', type: 'framework', description: 'Object-relational database management system.' },
        { name: 'Node.js', type: 'tool', description: 'Runtime for executing JavaScript on the server side.' },
        { name: 'Vue.js', type: 'framework', description: 'Progressive framework for building user interfaces.' },
        { name: 'Docker', type: 'tool', description: 'Platform for containerization.' },
        { name: 'Kubernetes', type: 'tool', description: 'Container orchestration system.' },
        { name: 'Git', type: 'tool', description: 'Version control system.' },
        { name: 'PostgreSQL', type: 'framework', description: 'Open-source relational database.' }
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
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            } />
        </div>
    );
}

function SkillCard({ skill }: { skill: { name: string; type: string; description: string } }) {
    return (
        <div className='skill-card'>
            <div className='card-front'>
                <span>{skill.name}</span>
            </div>
            <div className='card-back'>
                <span>{skill.description}</span>
            </div>
        </div>
    );
}
