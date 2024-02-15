'use client';

import "./projects.css";

import { projects } from "./projects";
import { useState, useEffect } from "react";

export default function Projects() {
    const [sortedProjects, setSortedProjects] = useState([]);
    const [sortOrder, setSortOrder] = useState('latest');

    useEffect(() => {
        sortProjects(sortOrder);
    }, [projects, sortOrder]); // Add sortOrder to the dependency array

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const sortProjects = (order) => {
        console.log('Sorting projects by:', order);
        const sorted = [...projects].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === 'oldest' ? dateA - dateB : dateB - dateA;
        });
        console.log('Sorted projects:', sorted);
        setSortedProjects(sorted);
    };

    return (
        <div>
            <select className="sort-dropdown" value={sortOrder} onChange={handleSortChange}>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
            </select>
            <div className="projects-section">
                {sortedProjects.map((project) => (
                  <div className="project-card">
                     <div className="card-image">
                        <img src={project.imgUrl} alt={project.title} />
                     </div>
                     <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        {project.website &&
                            <button className="card-button"><a href={project.website}>Visit</a></button>
                        }
                        <button className="card-button"><a href={project.git}>GitHub</a></button>
                     </div>
                  </div>
                ))}
            </div>
        </div>
    );
}