import React, { Component } from 'react'
import {firstname, lastname} from '../assets/information'
import Contact from './Contact'

// make sure to add a button for the resume and linkedin buttons

class Home extends Component {
    constructor(props) {
        super(props);}

     render() {
         return(
         <div className='App-home'>
             <img src={'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/73460754_2370669923185311_7402300130914729984_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=dpriXahPuDYAX-k7kda&_nc_ht=scontent.fyvr3-1.fna&oh=3bc3f4578c4d00924189cb359f9e2a87&oe=5F3FAE9C'}
                  className="log-logo" alt="loglogo" />
             <h3>
                 Hey! I'm { firstname } { lastname }, an incoming third year engineering student
                 over at the University of British Columbia!
             </h3>

             <Contact/>

         </div>
         )

     }

}

export default Home;
