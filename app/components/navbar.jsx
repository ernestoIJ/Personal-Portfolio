import { useState } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon, MenuIcon } from "@heroicons/react/outline";
import "./navbar.css";

export default function Navbar({ theme, toggleTheme }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    return (
        <nav className="navbar">
            <div className={`nav-left ${isNavExpanded ? 'expanded' : ''}`}>
                <Link className="logo" href="/">Ernesto Ibanez Jr.</Link>
                <Link className="nav-link" href="/experience">Experience</Link>
                <Link className="nav-link" href="/projects">Projects</Link>
                <Link className="nav-link" href="/skills">Skills</Link>
                <Link className="nav-link" href="/blogs">Blogs</Link>
                <Link className="nav-link" href="/contact">Contact</Link>
            </div>
            
            <div className="sun-moon-container">
                <span className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                </span>
                <MenuIcon className="hamburger-icon" onClick={toggleNav}/>
            </div>
        </nav>
    );
}
