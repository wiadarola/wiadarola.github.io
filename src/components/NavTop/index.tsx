import "./index.css";
import { useState, useEffect } from 'react';
import upArrow from '/assets/up-arrow.svg';

function NavTop() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Set initial visibility
        handleScroll();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  // Empty dependency array means this useEffect runs once after initial render

    function handleScrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return isVisible
        ? <img id="nav-top" src={upArrow} onClick={handleScrollToTop} alt="Scroll to Top" />
        : <img id="nav-top" className="hidden" src={upArrow} onClick={handleScrollToTop} alt="Scroll to Top" />
}

export default NavTop;
