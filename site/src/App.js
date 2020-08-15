import React from 'react';
import ScrollableAnchor  from 'react-scrollable-anchor'

import StickyHeader from './components/stickyHeader'
import Home from './components/Home'
import Projects from "./components/Projects";
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">

        <StickyHeader/>

        <ScrollableAnchor id={'home'}>
            <Home/>
        </ScrollableAnchor>

        <ScrollableAnchor id={'projects'}>
            <Projects/>
        </ScrollableAnchor>


      <Footer/>
    </div>
  );
}

export default App;
