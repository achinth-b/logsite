import React, { Component } from 'react';


class Footer extends Component {
    render(){
        return (

                <div className='App-footer'>
                    <div className='footer-text'> made with 💖, by&nbsp;
                        <a className="App-link"
                           href="https://achinth.ca"
                           target="_blank"
                           rel="noopener noreferrer">
                            Achinth
                        </a>&nbsp;© 2020.
                    </div>
                </div>
        )
    }
}

export default Footer;
