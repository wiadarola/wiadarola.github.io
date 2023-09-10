import './index.css';
import LinkButton from '../LinkButton';
import { useEffect, useState } from 'react';

/**
 * Renders a navigation bar component with a title and a button to go to the contact page.
 * @returns JSX.Element
 */
function NavBar() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <section id="navbar" className={`nav ${mousePos.y > (1 / 5 * window.innerHeight) ? 'hidden' : ''}`}>
            <div id='nav-bar'></div>
            <label id='nav-tag'>WJI.</label>
            <LinkButton href="#contact" text="Contact" newTab={false} />
        </section>
    );
}

export default NavBar