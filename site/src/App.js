import React from 'react';
import StickyHeader from './components/stickyHeader'
import './App.css';

function App() {
  return (
    <div className="App">
        <StickyHeader/>


      <header className="App-header">
        <img src={'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/73460754_2370669923185311_7402300130914729984_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=dpriXahPuDYAX-k7kda&_nc_ht=scontent.fyvr3-1.fna&oh=3bc3f4578c4d00924189cb359f9e2a87&oe=5F3FAE9C'}
             className="log-logo" alt="loglogo" />
        <p>
          Hey! I'm [Insert your name by environment variable] here an incoming third year engineering student
            over at the University of British Columbia!
        </p>
          This is the best site I can find.

      </header>



      <footer className="App-footer">
          An&nbsp;<a
              className="App-link"
              href="https://achinth.ca"
              target="_blank"
              rel="noopener noreferrer"
          >Achinth Bharadwaj</a>&nbsp;production.
      </footer>
    </div>
  );
}

export default App;
