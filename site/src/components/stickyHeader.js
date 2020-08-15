import React, { Component } from 'react'

const menu = [
    {
        section: '#home',
        component: 'Home'
    },

    {
        section: '#skills',
        component: 'Skills'
    },

    {
        section: '#projects',
        component: 'Projects'
    },

    {
        section: '#experience',
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
                <div className="nav-item" key={component.section}>
                    <a  className="App-link"
                        href={component.section} >
                        {component.component}
                    </a>
                </div>
            )
        })
    }
}

export default StickyHeader;
