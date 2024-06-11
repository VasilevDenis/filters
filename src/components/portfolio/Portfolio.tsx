import './Portfolio.css'
import { useState } from 'react'
import ProjectList from '../project_list/ProjectList'
import projects from '../../projects'
import Toolbar from '../toolbar/Toolbar'

function Portfolio() {
    const filters: string[] = ["All", "Websites", "Flayers", "Business Cards"]
    const [selected, setSelected] = useState('All')
    const [filteredPojects, setFilteredProjects] = useState(projects)

    const onSelectFilter = (filter: string) => {
        setSelected(filter)
        if (filter === 'All') {
            setFilteredProjects(projects)

        }
        else {
            setFilteredProjects(projects.filter((project: Project) => project.category === filter))
        }
    }

    return (
        <div className="portfolio">
            <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
            <ProjectList projects={filteredPojects} />
        </div>
    )
}

export default Portfolio