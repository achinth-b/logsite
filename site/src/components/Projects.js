import React, {Component} from 'react';
import Project from './Project';

import {projectList} from '../assets/information'

class Projects extends Component {
    render(){
        return (
            <div className='projects'>
                <h2> Projects </h2>
                {this.renderProjects()}
            </div>
        )
    }

    renderProjects(){
        return projectList.map((item) => {
            return (
                <Project key={item.id} {...item} id={item.id}/>
            )
        })
    }

}

export default Projects;
