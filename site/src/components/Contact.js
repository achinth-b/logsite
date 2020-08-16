import React, {Component} from 'react';
import {linkedinURL, emailLink } from '../assets/information'
import linkedin from '../assets/linkedin.svg'
import resume from '../assets/resume.svg'
import email from '../assets/email.svg'


class Contact extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='contacts'>
            <a
                rel="noopener noreferrer"
                className="link-item-title"
                href={linkedinURL}
                target="_blank"
            >
                <img src={linkedin}/>
            </a>

            <a
                rel="noopener noreferrer"
                className="link-item-title"
                href={email}
                target="_blank"
            >
                <img src={email}/>
            </a>

            <a
                rel="noopener noreferrer"
                className="link-item-title"
                href=''
                target="_blank"
            >
                <img src={resume}/>
            </a>
        </div>


        )
    }
}

export default Contact;
