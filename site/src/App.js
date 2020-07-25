import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/73460754_2370669923185311_7402300130914729984_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=dpriXahPuDYAX-k7kda&_nc_ht=scontent.fyvr3-1.fna&oh=3bc3f4578c4d00924189cb359f9e2a87&oe=5F3FAE9C'}
             className="log-logo" alt="loglogo" />
        <p>
          Hey! I'm Logan Khan, an incoming third year engineering student
            over at the University of British Columbia!
        </p>
          This is the logsite.

      </header>

      <footer className="App-footer">
          An
          <a
              className="App-link"
              href="https://achinth.ca"
              target="_blank"
              rel="noopener noreferrer"
          >  Achinth Bharadwaj
          </a> production.
      </footer>
    </div>
  );
}

export default App;
