import React from 'react';
import './ProjectList.css';

interface Project {
    img: string;
    category: string;
}

interface ProjectListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <img key={index} src={project.img} alt={project.category} />
            ))}
        </div>
    );
};

export default ProjectList;
