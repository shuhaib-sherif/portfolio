import React from 'react'
import NavItem from './NavItem';


function ProjectNav(props) {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
        <NavItem value="all" {...props} />
        <NavItem value="react" {...props} />
        <NavItem value="python" {...props} />
        
      </div>
    )
}

export default ProjectNav
