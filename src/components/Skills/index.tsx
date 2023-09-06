import './index.css';
import Divider from '../Divider';

function Skills() {
    const languages = ['JavaScript / TypeScript', 'HTML / CSS', 'C / C++', 'Python', 'Java', 'PHP', 'SQL'];
    const frameworks = ['Flask', 'React', 'JQuery', 'MySQL', 'Bootstrap', 'Oracle Database'];

    return (
        < Divider content={
            <>
                <h1 className='header'>SKILLS</h1>
                <div id="skills-container">
                    <div id='skills-languages'>
                        {languages.map((language) => { return <div key={language} className='skills-language'>{language}</div>; })}
                    </div>
                    <div id='skills-divider'></div>
                    <div id='skills-frameworks'>
                        {frameworks.map((framework) => { return <div key={framework} className='skills-framework'>{framework}</div>; })}
                    </div>
                </div>
            </>
        } id='skills-divider-container' />
    );
}

export default Skills;