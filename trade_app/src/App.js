import './styles/normalize.scss';
import './styles/footer.scss'
import './styles/App.scss';
import './styles/header.scss';

import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
          <Header/>
          <Body/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
