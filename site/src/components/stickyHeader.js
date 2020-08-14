import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const menu = [
    {
        section: 'home',
        component: 'Home'
    },

    {
        section: 'skills',
        component: 'Skills'
    },

    {
        section: 'projects',
        component: 'Projects'
    },

    {
        section: 'experience',
        component: 'Experience'
    }
];
// remember to write a stickyHeader.css class for this bad boy
class StickyHeader extends Component {
    render() {
        return (
            <div className='stickyHeader'>
                {this.renderHeader()}
            </div>
        )
    }

    renderHeader() {
        return menu.map((component) => {
            return (
                <Link to={`/${component.section}`}>
                <div className='nav-component'>
                        { component.section }
                </div>
                </Link>
            )
        })
    }
}

export default StickyHeader;
