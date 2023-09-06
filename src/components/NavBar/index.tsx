import './index.css';
import LinkButton from '../LinkButton';

/**
 * Renders a navigation bar component with a title and a button to go to the contact page.
 * @returns JSX.Element
 */
function NavBar() {
    return (
        <section id="navbar">
            <div id='bar'></div>
            <label id='nametag'>WJI.</label>
            <LinkButton href="#contact" text="Contact" newTab={false} />
        </section>
    );
}

export default NavBar